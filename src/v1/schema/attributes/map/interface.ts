import type { O } from 'ts-toolbelt'

import type { $MapAttributeAttributes, MapAttributeAttributes } from '../types/attribute'
import type { ComputedDefault, RequiredOption, AtLeastOnce, Never, Always } from '../constants'
import type { $type, $attributes, $default } from '../constants/attributeOptions'
import type {
  AttributeSharedStateConstraint,
  $AttributeSharedState,
  AttributeSharedState
} from '../shared/interface'

export interface MapAttributeStateConstraint extends AttributeSharedStateConstraint {
  default: ComputedDefault | undefined
}

/**
 * MapAttribute attribute interface
 */
export interface $MapAttribute<
  $ATTRIBUTES extends $MapAttributeAttributes = $MapAttributeAttributes,
  STATE extends MapAttributeStateConstraint = MapAttributeStateConstraint
> extends $AttributeSharedState<STATE> {
  [$type]: 'map'
  [$attributes]: $ATTRIBUTES
  [$default]: STATE['default']
  /**
   * Tag attribute as required. Possible values are:
   * - `"atLeastOnce"` _(default)_: Required in PUTs, optional in UPDATEs
   * - `"never"`: Optional in PUTs and UPDATEs
   * - `"always"`: Required in PUTs and UPDATEs
   *
   * @param nextRequired RequiredOption
   */
  required: <NEXT_REQUIRED extends RequiredOption = AtLeastOnce>(
    nextRequired?: NEXT_REQUIRED
  ) => $MapAttribute<$ATTRIBUTES, O.Update<STATE, 'required', NEXT_REQUIRED>>
  /**
   * Shorthand for `required('never')`
   */
  optional: () => $MapAttribute<$ATTRIBUTES, O.Update<STATE, 'required', Never>>
  /**
   * Hide attribute after fetch commands and formatting
   */
  hidden: () => $MapAttribute<$ATTRIBUTES, O.Update<STATE, 'hidden', true>>
  /**
   * Tag attribute as needed for Primary Key computing
   */
  key: () => $MapAttribute<$ATTRIBUTES, O.Update<O.Update<STATE, 'key', true>, 'required', Always>>
  /**
   * Rename attribute before save commands
   */
  savedAs: <NEXT_SAVED_AS extends string | undefined>(
    nextSavedAs: NEXT_SAVED_AS
  ) => $MapAttribute<$ATTRIBUTES, O.Update<STATE, 'savedAs', NEXT_SAVED_AS>>
  /**
   * Tag attribute as having a computed default value
   *
   * @param nextDefaultValue `ComputedDefault`
   */
  default: <NEXT_DEFAULT extends ComputedDefault | undefined>(
    nextDefaultValue: NEXT_DEFAULT
  ) => $MapAttribute<$ATTRIBUTES, O.Update<STATE, 'default', NEXT_DEFAULT>>
}

export interface MapAttribute<
  ATTRIBUTES extends MapAttributeAttributes = MapAttributeAttributes,
  STATE extends MapAttributeStateConstraint = MapAttributeStateConstraint
> extends AttributeSharedState<STATE> {
  path: string
  type: 'map'
  attributes: ATTRIBUTES
  default: STATE['default']
  keyAttributesNames: Set<string>
  requiredAttributesNames: Record<RequiredOption, Set<string>>
}