import type { O } from 'ts-toolbelt'

import type { AnyAttribute, Attribute, Never } from '~/attributes/index.js'
import { DynamoDBToolboxError } from '~/errors/index.js'
import type { Schema } from '~/schema/index.js'
import type { OptionalizeUndefinableProperties } from '~/types/index.js'
import { cloneDeep } from '~/utils/cloneDeep.js'
import { isObject } from '~/utils/validation/isObject.js'

import { attrParser } from './attribute.js'
import type { AttrParsedValue } from './attribute.js'
import type { ParsedValue } from './parser.js'
import type {
  FromParsingOptions,
  ParsedValueOptions,
  ParsingDefaultOptions,
  ParsingOptions
} from './types/options.js'

export type SchemaParsedValue<
  SCHEMA extends Schema,
  OPTIONS extends ParsedValueOptions = ParsedValueOptions
> = Schema extends SCHEMA
  ? { [KEY: string]: AttrParsedValue<Attribute, OPTIONS> }
  : OptionalizeUndefinableProperties<
      {
        [KEY in OPTIONS extends { mode: 'key' }
          ? O.SelectKeys<SCHEMA['attributes'], { key: true }>
          : keyof SCHEMA['attributes'] & string as OPTIONS extends { transform: false }
          ? KEY
          : SCHEMA['attributes'][KEY] extends { savedAs: string }
            ? SCHEMA['attributes'][KEY]['savedAs']
            : KEY]: AttrParsedValue<SCHEMA['attributes'][KEY], OPTIONS>
      },
      // Sadly we override optional AnyAttributes as 'unknown | undefined' => 'unknown' (undefined lost in the process)
      O.SelectKeys<SCHEMA['attributes'], AnyAttribute & { required: Never }>
    >

export function* schemaParser<
  SCHEMA extends Schema,
  OPTIONS extends ParsingOptions = ParsingDefaultOptions
>(
  schema: SCHEMA,
  inputValue: unknown,
  options: OPTIONS = {} as OPTIONS
): Generator<
  ParsedValue<SCHEMA, FromParsingOptions<OPTIONS>>,
  ParsedValue<SCHEMA, FromParsingOptions<OPTIONS>>
> {
  const { mode = 'put', fill = true, transform = true } = options

  const parsers: Record<string, Generator<ParsedValue<Attribute, FromParsingOptions<OPTIONS>>>> = {}
  let restEntries: [string, ParsedValue<Attribute, FromParsingOptions<OPTIONS>>][] = []

  const isInputValueObject = isObject(inputValue)

  if (isInputValueObject) {
    const additionalAttributeNames = new Set(Object.keys(inputValue))

    Object.entries(schema.attributes)
      .filter(([, attr]) => mode !== 'key' || attr.key)
      .forEach(([attrName, attr]) => {
        parsers[attrName] = attrParser(attr, inputValue[attrName], options)

        additionalAttributeNames.delete(attrName)
      })

    restEntries = [...additionalAttributeNames.values()].map(attributeName => [
      attributeName,
      cloneDeep(inputValue[attributeName])
    ])
  }

  if (fill) {
    if (isInputValueObject) {
      const defaultedValue = Object.fromEntries([
        ...Object.entries(parsers)
          .map(([attrName, attr]) => [attrName, attr.next().value])
          .filter(([, defaultedAttrValue]) => defaultedAttrValue !== undefined),
        ...restEntries
      ])
      yield defaultedValue

      const linkedValue = Object.fromEntries([
        ...Object.entries(parsers)
          .map(([attrName, parser]) => [attrName, parser.next(defaultedValue).value])
          .filter(([, linkedAttrValue]) => linkedAttrValue !== undefined),
        ...restEntries
      ])
      yield linkedValue
    } else {
      const defaultedValue = cloneDeep(inputValue)
      yield defaultedValue as any

      const linkedValue = defaultedValue
      yield linkedValue as any
    }
  }

  if (!isInputValueObject) {
    throw new DynamoDBToolboxError('parsing.invalidItem', {
      message: 'Items should be objects',
      payload: {
        received: inputValue,
        expected: 'object'
      }
    })
  }

  const parsedValue = Object.fromEntries(
    Object.entries(parsers)
      .map(([attrName, attr]) => [attrName, attr.next().value])
      .filter(([, attrValue]) => attrValue !== undefined)
  )

  if (transform) {
    yield parsedValue
  } else {
    return parsedValue
  }

  const transformedValue = Object.fromEntries(
    Object.entries(parsers)
      .map(([attrName, attr]) => [
        schema.attributes[attrName].savedAs ?? attrName,
        attr.next().value
      ])
      .filter(([, attrValue]) => attrValue !== undefined)
  )
  return transformedValue
}
