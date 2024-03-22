import type { RecordAttribute, ResolvePrimitiveAttribute } from 'v1/schema/attributes'
import type { Paths } from 'v1/schema/actions/paths'
import type { If } from 'v1/types'
import { isObject } from 'v1/utils/validation'
import { DynamoDBToolboxError } from 'v1/errors'

import type {
  MatchKeys,
  FormatOptions,
  FormattedValueOptions,
  FormattedValueDefaultOptions,
  FromFormatOptions
} from './types'
import { formatPrimitiveAttrRawValue } from './primitive'
import { formatAttrRawValue, AttrFormattedValue, MustBeDefined } from './attribute'
import { matchProjection } from './utils'

export type RecordAttrFormattedValue<
  ATTRIBUTE extends RecordAttribute,
  OPTIONS extends FormattedValueOptions<ATTRIBUTE> = FormattedValueDefaultOptions,
  MATCHING_KEYS extends string = MatchKeys<
    ResolvePrimitiveAttribute<ATTRIBUTE['keys']>,
    '.',
    OPTIONS['attributes']
  >
> = RecordAttribute extends ATTRIBUTE
  ? { [KEY: string]: unknown }
  : // Possible in case of anyOf subSchema
  [MATCHING_KEYS] extends [never]
  ? never
  :
      | If<MustBeDefined<ATTRIBUTE>, never, undefined>
      | {
          [KEY in MATCHING_KEYS]?: AttrFormattedValue<
            ATTRIBUTE['elements'],
            {
              partial: OPTIONS['partial']
              attributes: OPTIONS extends { attributes: string }
                ? MATCHING_KEYS extends infer FILTERED_KEY
                  ? FILTERED_KEY extends string
                    ? `.${FILTERED_KEY}` extends OPTIONS['attributes']
                      ? undefined
                      : OPTIONS['attributes'] extends `.${FILTERED_KEY}${infer CHILDREN_FILTERED_ATTRIBUTES}`
                      ? Extract<CHILDREN_FILTERED_ATTRIBUTES, Paths<ATTRIBUTE['elements']>>
                      : undefined
                    : never
                  : never
                : undefined
            }
          >
        }

export const formatRecordAttrRawValue = <
  ATTRIBUTE extends RecordAttribute,
  OPTIONS extends FormatOptions<ATTRIBUTE>
>(
  attribute: ATTRIBUTE,
  rawValue: unknown,
  { attributes, ...restOptions }: OPTIONS = {} as OPTIONS
): RecordAttrFormattedValue<ATTRIBUTE, FromFormatOptions<ATTRIBUTE, OPTIONS>> => {
  type Formatted = RecordAttrFormattedValue<ATTRIBUTE, FromFormatOptions<ATTRIBUTE, OPTIONS>>

  if (!isObject(rawValue)) {
    const { path, type } = attribute

    throw new DynamoDBToolboxError('formatter.invalidAttribute', {
      message: `Invalid attribute detected while formatting${
        path !== undefined ? `: '${path}'` : ''
      }. Should be a ${type}.`,
      path,
      payload: {
        received: rawValue,
        expected: type
      }
    })
  }

  const formattedRecord: Record<string, unknown> = {}

  Object.entries(rawValue).forEach(([key, element]) => {
    const parsedKey = formatPrimitiveAttrRawValue(attribute.keys, key) as string

    // We don't need isProjected: We used the saved value key so we know it is
    const { childrenAttributes } = matchProjection(new RegExp('^\\.' + parsedKey), attributes)

    const formattedAttribute = formatAttrRawValue(attribute.elements, element, {
      attributes: childrenAttributes,
      ...restOptions
    })

    if (formattedAttribute !== undefined) {
      formattedRecord[parsedKey] = formattedAttribute
    }
  })

  return formattedRecord as Formatted
}