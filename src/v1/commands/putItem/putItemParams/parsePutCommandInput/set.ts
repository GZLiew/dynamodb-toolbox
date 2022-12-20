import { SetAttribute, PossiblyUndefinedResolvedAttribute, PutItem } from 'v1'
import { isSet } from 'v1/utils/validation'

import { parseAttributePutCommandInput } from './attribute'

export const parseSetAttributePutCommandInput = <SET_ATTRIBUTE extends SetAttribute>(
  setAttribute: SET_ATTRIBUTE,
  input: PossiblyUndefinedResolvedAttribute
): PutItem<SET_ATTRIBUTE> => {
  if (!isSet(input)) {
    // TODO
    throw new Error()
  }

  const parsedPutItemInput: PossiblyUndefinedResolvedAttribute = new Set()

  input.forEach(element =>
    parsedPutItemInput.add(parseAttributePutCommandInput(setAttribute.elements, element))
  )

  return parsedPutItemInput as PutItem<SET_ATTRIBUTE>
}
