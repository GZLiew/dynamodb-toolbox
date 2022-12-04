import type { AttributeProperties, FrozenAttributeProperties } from '../shared/interface'
import type { MapAttributeAttributes, FrozenMapAttributeAttributes } from '../types/attribute'
import type { ComputedDefault, RequiredOption, AtLeastOnce } from '../constants'
import type { FreezeAttribute } from '../freeze'

// TODO: Add false saveAs option
/**
 * MapAttribute attribute interface
 * (Called MapAttribute to differ from native TS Map class)
 */
export interface MapAttribute<
  Attributes extends MapAttributeAttributes = MapAttributeAttributes,
  IsRequired extends RequiredOption = RequiredOption,
  IsHidden extends boolean = boolean,
  IsKey extends boolean = boolean,
  IsOpen extends boolean = boolean,
  SavedAs extends string | undefined = string | undefined,
  Default extends ComputedDefault | undefined = ComputedDefault | undefined
> extends AttributeProperties<IsRequired, IsHidden, IsKey, SavedAs> {
  _type: 'map'
  _attributes: Attributes
  _open: IsOpen
  _default: Default
  /**
   * Tag attribute as required. Possible values are:
   * - `"atLeastOnce"` _(default)_: Required in PUTs, optional in UPDATEs
   * - `"never"`: Optional in PUTs and UPDATEs
   * - `"always"`: Required in PUTs and UPDATEs
   * - `"onlyOnce"`: Required in PUTs, denied in UPDATEs
   *
   * @param nextRequired RequiredOption
   */
  required: <NextRequired extends RequiredOption = AtLeastOnce>(
    nextRequired?: NextRequired
  ) => MapAttribute<Attributes, NextRequired, IsHidden, IsKey, IsOpen, SavedAs, Default>
  /**
   * Hide attribute after fetch commands and formatting
   */
  hidden: () => MapAttribute<Attributes, IsRequired, true, IsKey, IsOpen, SavedAs, Default>
  /**
   * Tag attribute as needed for Primary Key computing
   */
  key: () => MapAttribute<Attributes, IsRequired, IsHidden, true, IsOpen, SavedAs, Default>
  /**
   * Accept additional attributes of any type
   */
  open: () => MapAttribute<Attributes, IsRequired, IsHidden, IsKey, true, SavedAs, Default>
  /**
   * Rename attribute before save commands
   */
  savedAs: <NextSavedAs extends string | undefined>(
    nextSavedAs: NextSavedAs
  ) => MapAttribute<Attributes, IsRequired, IsHidden, IsKey, IsOpen, NextSavedAs, Default>
  /**
   * Tag attribute as having a computed default value
   *
   * @param nextDefaultValue `ComputedDefault`
   */
  default: <NextComputeDefault extends ComputedDefault | undefined>(
    nextDefaultValue: NextComputeDefault
  ) => MapAttribute<Attributes, IsRequired, IsHidden, IsKey, IsOpen, SavedAs, NextComputeDefault>
}

export interface FrozenMapAttribute<
  Attributes extends FrozenMapAttributeAttributes = FrozenMapAttributeAttributes,
  IsRequired extends RequiredOption = RequiredOption,
  IsHidden extends boolean = boolean,
  IsKey extends boolean = boolean,
  IsOpen extends boolean = boolean,
  SavedAs extends string | undefined = string | undefined,
  Default extends ComputedDefault | undefined = ComputedDefault | undefined
> extends FrozenAttributeProperties<IsRequired, IsHidden, IsKey, SavedAs> {
  type: 'map'
  attributes: Attributes
  open: IsOpen
  default: Default
  path: string
  requiredAttributesNames: Record<RequiredOption, Set<string>>
}

export type FreezeMapAttribute<Attribute extends MapAttribute> = FrozenMapAttribute<
  MapAttribute extends Attribute
    ? FrozenMapAttributeAttributes
    : {
        [key in keyof Attribute['_attributes']]: FreezeAttribute<Attribute['_attributes'][key]>
      },
  Attribute['_required'],
  Attribute['_hidden'],
  Attribute['_key'],
  Attribute['_open'],
  Attribute['_savedAs'],
  Attribute['_default']
>