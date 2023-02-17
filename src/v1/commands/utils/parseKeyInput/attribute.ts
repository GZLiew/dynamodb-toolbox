import { RequiredOption, Attribute, PossiblyUndefinedResolvedAttribute } from 'v1'

import { parseConstantAttributeKeyInput } from './constant'
import { parsePrimitiveAttributeKeyInput } from './primitive'
import { parseSetAttributeKeyInput } from './set'
import { parseListAttributeKeyInput } from './list'
import { parseMapAttributeKeyInput } from './map'
import { parseAnyOfAttributeKeyInput } from './anyOf'

export const requiringOptions = new Set<RequiredOption>(['always', 'onlyOnce', 'atLeastOnce'])

export const isRequired = (attribute: Attribute): boolean =>
  requiringOptions.has(attribute.required)

export const parseAttributeKeyInput = (
  attribute: Attribute,
  input: PossiblyUndefinedResolvedAttribute
): PossiblyUndefinedResolvedAttribute => {
  if (input === undefined) {
    if (isRequired(attribute)) {
      // TODO
      throw new Error()
    } else {
      return undefined
    }
  }

  switch (attribute.type) {
    case 'any':
      return input
    case 'constant':
      return parseConstantAttributeKeyInput(attribute, input)
    case 'boolean':
    case 'binary':
    case 'number':
    case 'string':
      return parsePrimitiveAttributeKeyInput(attribute, input)
    case 'set':
      return parseSetAttributeKeyInput(attribute, input)
    case 'list':
      return parseListAttributeKeyInput(attribute, input)
    case 'map':
      return parseMapAttributeKeyInput(attribute, input)
    case 'anyOf':
      return parseAnyOfAttributeKeyInput(attribute, input)
  }
}
