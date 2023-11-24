import type {
  PrimitiveAttribute,
  AttributeBasicValue,
  ResolvedPrimitiveAttribute,
  Extension
} from 'v1/schema'
import { validatorsByPrimitiveType } from 'v1/utils/validation'
import { DynamoDBToolboxError } from 'v1/errors'

import { PrimitiveAttributeParsedBasicValue } from '../types'

export const parsePrimitiveAttributeClonedInput = <EXTENSION extends Extension>(
  primitiveAttribute: PrimitiveAttribute,
  input: AttributeBasicValue<EXTENSION>
): PrimitiveAttributeParsedBasicValue => {
  const validator = validatorsByPrimitiveType[primitiveAttribute.type]
  if (!validator(input)) {
    throw new DynamoDBToolboxError('parsing.invalidAttributeInput', {
      message: `Attribute ${primitiveAttribute.path} should be a ${primitiveAttribute.type}`,
      path: primitiveAttribute.path,
      payload: {
        received: input,
        expected: primitiveAttribute.type
      }
    })
  }

  if (
    primitiveAttribute.enum !== undefined &&
    !primitiveAttribute.enum.includes(input as ResolvedPrimitiveAttribute)
  ) {
    throw new DynamoDBToolboxError('parsing.invalidAttributeInput', {
      message: `Attribute ${
        primitiveAttribute.path
      } should be one of: ${primitiveAttribute.enum.map(String).join(', ')}`,
      path: primitiveAttribute.path,
      payload: {
        received: input,
        expected: primitiveAttribute.enum
      }
    })
  }

  return input as PrimitiveAttributeParsedBasicValue
}