import cloneDeep from 'lodash.clonedeep'
import type { O } from 'ts-toolbelt'

import type { Schema, Attribute, AnyAttribute, Never } from 'v1/schema'
import type { OptionalizeUndefinableProperties } from 'v1/types'
import { isObject } from 'v1/utils/validation/isObject'
import { DynamoDBToolboxError } from 'v1/errors'

import type {
  ParsedValueOptions,
  FromParsingOptions,
  ParsingOptions,
  ParsingDefaultOptions
} from './types'
import type { ParsedValue } from './parser'
import { attrWorkflow, AttrParsedValue } from './attribute'

export type SchemaParsedValue<
  SCHEMA extends Schema,
  OPTIONS extends ParsedValueOptions = ParsedValueOptions
> = Schema extends SCHEMA
  ? { [KEY in string]: AttrParsedValue<Attribute, OPTIONS> }
  : OptionalizeUndefinableProperties<
      {
        [KEY in OPTIONS['operation'] extends 'key'
          ? O.SelectKeys<SCHEMA['attributes'], { key: true }>
          : keyof SCHEMA['attributes'] & string]: AttrParsedValue<
          SCHEMA['attributes'][KEY],
          OPTIONS
        >
      },
      // Sadly we override optional AnyAttributes as 'unknown | undefined' => 'unknown' (undefined lost in the process)
      O.SelectKeys<SCHEMA['attributes'], AnyAttribute & { required: Never }>
    >

export function* schemaWorkflow<
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
  const { operation = 'put', fill = true, transform = true } = options

  const parsers: Record<string, Generator<ParsedValue<Attribute, FromParsingOptions<OPTIONS>>>> = {}
  let restEntries: [string, ParsedValue<Attribute, FromParsingOptions<OPTIONS>>][] = []

  const isInputValueObject = isObject(inputValue)

  if (isInputValueObject) {
    const additionalAttributeNames = new Set(Object.keys(inputValue))

    Object.entries(schema.attributes)
      .filter(([, attr]) => operation !== 'key' || attr.key)
      .forEach(([attrName, attr]) => {
        parsers[attrName] = attrWorkflow(attr, inputValue[attrName], options)

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
