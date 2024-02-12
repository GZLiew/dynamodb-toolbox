import cloneDeep from 'lodash.clonedeep'

import type { AttributeValue } from 'v1/schema'
import type { ReferenceExtension } from 'v1/operations/types'
import type { ExtensionParser } from 'v1/schema/actions/parse/types'
import { isArray } from 'v1/utils/validation/isArray'
import { attributeParser } from 'v1/schema/actions/parse/attribute'
import { DynamoDBToolboxError } from 'v1/errors'

import type { UpdateItemInputExtension } from 'v1/operations/updateItem/types'
import { $GET } from 'v1/operations/updateItem/constants'
import { hasGetOperation } from 'v1/operations/updateItem/utils'
import { isString } from 'v1/utils/validation'

export const parseReferenceExtension: ExtensionParser<
  ReferenceExtension,
  UpdateItemInputExtension
> = (attribute, inputValue, options) => {
  const { fill = true } = options

  if (hasGetOperation(inputValue)) {
    return {
      isExtension: true,
      *extensionParser() {
        const isInputValueArray = isArray(inputValue[$GET])
        let reference: string | undefined = undefined
        let fallbackParser:
          | Generator<AttributeValue<ReferenceExtension>, AttributeValue<ReferenceExtension>>
          | undefined = undefined
        let rest: AttributeValue<ReferenceExtension>[] = []

        if (isInputValueArray) {
          const [_reference, fallback, ..._rest] = inputValue[$GET]
          reference = _reference

          if (fallback !== undefined) {
            fallbackParser = attributeParser(attribute, fallback, options)
          }

          rest = _rest
        }

        if (fill) {
          if (isInputValueArray) {
            const defaultedValue = {
              [$GET]: [
                cloneDeep(reference),
                ...[
                  fallbackParser !== undefined
                    ? [fallbackParser.next().value]
                    : rest.length === 0
                    ? []
                    : [undefined]
                ],
                ...cloneDeep(rest)
              ]
            }
            yield defaultedValue

            const linkedValue = {
              [$GET]: [
                cloneDeep(reference),
                ...[
                  fallbackParser !== undefined
                    ? [fallbackParser.next().value]
                    : rest.length === 0
                    ? []
                    : [undefined]
                ],
                ...cloneDeep(rest)
              ]
            }
            yield linkedValue
          } else {
            const defaultedValue = { [$GET]: cloneDeep(inputValue[$GET]) }
            yield defaultedValue

            const linkedValue = defaultedValue
            yield linkedValue
          }
        }

        if (!isInputValueArray) {
          const { path } = attribute

          throw new DynamoDBToolboxError('parsing.invalidAttributeInput', {
            message: `References ${
              path !== undefined ? `for attribute '${path}' ` : ''
            }should be a tuple of one or two elements`,
            path,
            payload: {
              received: inputValue[$GET]
            }
          })
        }

        if (!isString(reference)) {
          const { path } = attribute

          throw new DynamoDBToolboxError('parsing.invalidAttributeInput', {
            message: `First elements of references ${
              path !== undefined ? `for attribute '${path}' ` : ''
            }should be strings`,
            path,
            payload: {
              received: inputValue[$GET][0]
            }
          })
        }

        const parsedValue = {
          [$GET]: [
            // NOTE: Reference validation will be done in UpdateExpressionParser
            reference,
            ...(fallbackParser !== undefined ? [fallbackParser.next().value] : [])
          ]
        }
        yield parsedValue

        const transformedValue = {
          [$GET]: [
            // NOTE: Reference validation will be done in UpdateExpressionParser
            reference,
            ...(fallbackParser !== undefined ? [fallbackParser.next().value] : [])
          ]
        }
        return transformedValue
      }
    }
  }

  return {
    isExtension: false,
    basicInput: inputValue
  }
}
