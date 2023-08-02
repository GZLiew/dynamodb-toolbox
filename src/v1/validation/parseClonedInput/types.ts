import type {
  Attribute,
  AttributeBasicValue,
  AttributeValue,
  RequiredOption,
  $savedAs,
  ResolvedPrimitiveAttribute,
  Extension,
  ExtendedValue,
  PrimitiveAttributeType
} from 'v1/schema'
import type { If } from 'v1/types'

import type { HasExtension } from '../types'

export type ExtensionParser<EXTENSION extends Extension> = (
  attribute: Attribute,
  input: AttributeValue<EXTENSION> | undefined,
  options: ParsingOptions<EXTENSION>
) =>
  | { isExtension: true; parsedExtension: AttributeValue<EXTENSION>; basicInput?: never }
  | {
      isExtension: false
      parsedExtension?: never
      basicInput: AttributeBasicValue<EXTENSION> | undefined
    }

export interface AttributeFilters {
  key?: boolean
}

export type ParsingOptions<EXTENSION extends Extension> = {
  requiringOptions?: Set<RequiredOption>
  filters?: AttributeFilters
} & If<
  HasExtension<EXTENSION>,
  { parseExtension: ExtensionParser<EXTENSION> },
  { parseExtension?: never }
>

/**
 * @debt refactor "note: All those types are just to add the $savedAs secret prop to items & maps. Maybe we can update ResolvedX types to incorporate them"
 */
export type PrimitiveAttributeParsedValue<EXTENSION extends Extension = never> =
  | ExtendedValue<EXTENSION, PrimitiveAttributeType>
  | PrimitiveAttributeParsedBasicValue

export type PrimitiveAttributeParsedBasicValue = ResolvedPrimitiveAttribute

export type SetAttributeParsedValue<EXTENSION extends Extension = never> =
  | ExtendedValue<EXTENSION, 'set'>
  | SetAttributeParsedBasicValue<EXTENSION>

export type SetAttributeParsedBasicValue<EXTENSION extends Extension = never> = Set<
  AttributeParsedValue<EXTENSION>
>

export type ListAttributeParsedValue<EXTENSION extends Extension = never> =
  | ExtendedValue<EXTENSION, 'list'>
  | ListAttributeParsedBasicValue<EXTENSION>

export type ListAttributeParsedBasicValue<
  EXTENSION extends Extension = never
> = AttributeParsedValue<EXTENSION>[]

export type MapAttributeParsedValue<EXTENSION extends Extension = never> =
  | ExtendedValue<EXTENSION, 'map'>
  | MapAttributeParsedBasicValue<EXTENSION>

export type MapAttributeParsedBasicValue<EXTENSION extends Extension = never> = {
  [$savedAs]: Record<string, string>
  [key: string]: AttributeParsedValue<EXTENSION>
}

export type RecordAttributeParsedValue<EXTENSION extends Extension = never> =
  | ExtendedValue<EXTENSION, 'record'>
  | RecordAttributeParsedBasicValue<EXTENSION>

export type RecordAttributeParsedBasicValue<EXTENSION extends Extension = never> = {
  [key: string]: AttributeParsedValue<EXTENSION>
}

export type AttributeParsedValue<EXTENSION extends Extension = never> =
  | PrimitiveAttributeParsedValue<EXTENSION>
  | SetAttributeParsedValue<EXTENSION>
  | ListAttributeParsedValue<EXTENSION>
  | MapAttributeParsedValue<EXTENSION>
  | RecordAttributeParsedValue<EXTENSION>

export type AttributeParsedBasicValue<EXTENSION extends Extension = never> =
  | PrimitiveAttributeParsedBasicValue
  | SetAttributeParsedBasicValue<EXTENSION>
  | ListAttributeParsedBasicValue<EXTENSION>
  | MapAttributeParsedBasicValue<EXTENSION>
  | RecordAttributeParsedBasicValue<EXTENSION>

export type ParsedItem<EXTENSION extends Extension = never> = {
  [$savedAs]: Record<string, string>
  [key: string]: AttributeParsedValue<EXTENSION>
}
