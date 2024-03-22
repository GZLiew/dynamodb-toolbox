import type { O } from 'ts-toolbelt'

import type { If, ValueOrGetter } from 'v1/types'
import type { AttributeUpdateItemInput, UpdateItemInput } from 'v1/operations/updateItem'
import type { ParserInput } from 'v1/schema/actions'

import type { Schema, SchemaAction } from '../../schema'
import type { RequiredOption, AtLeastOnce, Never, Always } from '../constants/requiredOptions'
import type { $type, $elements } from '../constants/attributeOptions'
import type { $SharedAttributeState, SharedAttributeState } from '../shared/interface'

import type { $SetAttributeElements, SetAttributeElements } from './types'
import type { FreezeSetAttribute } from './freeze'

export interface $SetAttributeState<
  $ELEMENTS extends $SetAttributeElements = $SetAttributeElements,
  STATE extends SharedAttributeState = SharedAttributeState
> extends $SharedAttributeState<STATE> {
  [$type]: 'set'
  [$elements]: $ELEMENTS
}

export interface $SetAttributeNestedState<
  $ELEMENTS extends $SetAttributeElements = $SetAttributeElements,
  STATE extends SharedAttributeState = SharedAttributeState
> extends $SetAttributeState<$ELEMENTS, STATE> {
  freeze: (path?: string) => FreezeSetAttribute<$SetAttributeState<$ELEMENTS, STATE>>
}

/**
 * Set attribute interface
 */
export interface $SetAttribute<
  $ELEMENTS extends $SetAttributeElements = $SetAttributeElements,
  STATE extends SharedAttributeState = SharedAttributeState
> extends $SetAttributeNestedState<$ELEMENTS, STATE> {
  [$type]: 'set'
  [$elements]: $ELEMENTS
  /**
   * Tag attribute as required. Possible values are:
   * - `"atLeastOnce"` _(default)_: Required in PUTs, optional in UPDATEs
   * - `"never"`: Optional in PUTs and UPDATEs
   * - `"always"`: Required in PUTs and UPDATEs
   *
   * @param nextRequired RequiredOption
   */
  required: <NEXT_IS_REQUIRED extends RequiredOption = AtLeastOnce>(
    nextRequired?: NEXT_IS_REQUIRED
  ) => $SetAttribute<$ELEMENTS, O.Overwrite<STATE, { required: NEXT_IS_REQUIRED }>>
  /**
   * Shorthand for `required('never')`
   */
  optional: () => $SetAttribute<$ELEMENTS, O.Overwrite<STATE, { required: Never }>>
  /**
   * Hide attribute after fetch commands and formatting
   */
  hidden: () => $SetAttribute<$ELEMENTS, O.Overwrite<STATE, { hidden: true }>>
  /**
   * Tag attribute as needed for Primary Key computing
   */
  key: () => $SetAttribute<$ELEMENTS, O.Overwrite<STATE, { key: true; required: Always }>>
  /**
   * Rename attribute before save commands
   */
  savedAs: <NEXT_SAVED_AS extends string | undefined>(
    nextSavedAs: NEXT_SAVED_AS
  ) => $SetAttribute<$ELEMENTS, O.Overwrite<STATE, { savedAs: NEXT_SAVED_AS }>>
  /**
   * Provide a default value for attribute in Primary Key computing
   *
   * @param nextKeyDefault `keyAttributeInput | (() => keyAttributeInput)`
   */
  keyDefault: (
    nextKeyDefault: ValueOrGetter<
      ParserInput<
        FreezeSetAttribute<$SetAttributeState<$ELEMENTS, STATE>>,
        { operation: 'key'; fill: false }
      >
    >
  ) => $SetAttribute<
    $ELEMENTS,
    O.Overwrite<
      STATE,
      {
        defaults: {
          key: unknown
          put: STATE['defaults']['put']
          update: STATE['defaults']['update']
        }
      }
    >
  >
  /**
   * Provide a default value for attribute in PUT commands
   *
   * @param nextPutDefault `putAttributeInput | (() => putAttributeInput)`
   */
  putDefault: (
    nextPutDefault: ValueOrGetter<
      ParserInput<FreezeSetAttribute<$SetAttributeState<$ELEMENTS, STATE>>, { fill: false }>
    >
  ) => $SetAttribute<
    $ELEMENTS,
    O.Overwrite<
      STATE,
      {
        defaults: {
          key: STATE['defaults']['key']
          put: unknown
          update: STATE['defaults']['update']
        }
      }
    >
  >
  /**
   * Provide a default value for attribute in UPDATE commands
   *
   * @param nextUpdateDefault `updateAttributeInput | (() => updateAttributeInput)`
   */
  updateDefault: (
    nextUpdateDefault: ValueOrGetter<
      AttributeUpdateItemInput<FreezeSetAttribute<$SetAttributeState<$ELEMENTS, STATE>>, true>
    >
  ) => $SetAttribute<
    $ELEMENTS,
    O.Overwrite<
      STATE,
      {
        defaults: {
          key: STATE['defaults']['key']
          put: STATE['defaults']['put']
          update: unknown
        }
      }
    >
  >
  /**
   * Provide a default value for attribute in PUT commands OR Primary Key computing if attribute is tagged as key
   *
   * @param nextDefault `key/putAttributeInput | (() => key/putAttributeInput)`
   */
  default: (
    nextDefault: ValueOrGetter<
      If<
        STATE['key'],
        ParserInput<
          FreezeSetAttribute<$SetAttributeState<$ELEMENTS, STATE>>,
          { operation: 'key'; fill: false }
        >,
        ParserInput<FreezeSetAttribute<$SetAttributeState<$ELEMENTS, STATE>>, { fill: false }>
      >
    >
  ) => $SetAttribute<
    $ELEMENTS,
    O.Overwrite<
      STATE,
      {
        defaults: If<
          STATE['key'],
          {
            key: unknown
            put: STATE['defaults']['put']
            update: STATE['defaults']['update']
          },
          {
            key: STATE['defaults']['key']
            put: unknown
            update: STATE['defaults']['update']
          }
        >
      }
    >
  >
  /**
   * Provide a **linked** default value for attribute in Primary Key computing
   *
   * @param nextKeyLink `keyAttributeInput | ((keyInput) => keyAttributeInput)`
   */
  keyLink: <SCHEMA extends Schema>(
    nextKeyLink: (
      keyInput: ParserInput<SCHEMA, { operation: 'key'; fill: false }>
    ) => ParserInput<
      FreezeSetAttribute<$SetAttributeState<$ELEMENTS, STATE>>,
      { operation: 'key'; fill: false }
    >
  ) => $SetAttribute<
    $ELEMENTS,
    O.Overwrite<
      STATE,
      {
        links: {
          key: unknown
          put: STATE['links']['put']
          update: STATE['links']['update']
        }
      }
    >
  >
  /**
   * Provide a **linked** default value for attribute in PUT commands
   *
   * @param nextPutLink `putAttributeInput | ((putItemInput) => putAttributeInput)`
   */
  putLink: <SCHEMA extends Schema>(
    nextPutLink: (
      putItemInput: ParserInput<SCHEMA, { fill: false }>
    ) => ParserInput<FreezeSetAttribute<$SetAttributeState<$ELEMENTS, STATE>>, { fill: false }>
  ) => $SetAttribute<
    $ELEMENTS,
    O.Overwrite<
      STATE,
      {
        links: {
          key: STATE['links']['key']
          put: unknown
          update: STATE['links']['update']
        }
      }
    >
  >
  /**
   * Provide a **linked** default value for attribute in UPDATE commands
   *
   * @param nextUpdateLink `unknown | ((updateItemInput) => updateAttributeInput)`
   */
  updateLink: <SCHEMA extends Schema>(
    nextUpdateLink: (
      updateItemInput: UpdateItemInput<SCHEMA, true>
    ) => AttributeUpdateItemInput<FreezeSetAttribute<$SetAttributeState<$ELEMENTS, STATE>>, true>
  ) => $SetAttribute<
    $ELEMENTS,
    O.Overwrite<
      STATE,
      {
        links: {
          key: STATE['links']['key']
          put: STATE['links']['put']
          update: unknown
        }
      }
    >
  >
  /**
   * Provide a **linked** default value for attribute in PUT commands OR Primary Key computing if attribute is tagged as key
   *
   * @param nextLink `key/putAttributeInput | (() => key/putAttributeInput)`
   */
  link: <SCHEMA extends Schema>(
    nextLink: (
      keyOrPutItemInput: If<
        STATE['key'],
        ParserInput<SCHEMA, { operation: 'key'; fill: false }>,
        ParserInput<SCHEMA, { fill: false }>
      >
    ) => If<
      STATE['key'],
      ParserInput<
        FreezeSetAttribute<$SetAttributeState<$ELEMENTS, STATE>>,
        { operation: 'key'; fill: false }
      >,
      ParserInput<FreezeSetAttribute<$SetAttributeState<$ELEMENTS, STATE>>, { fill: false }>
    >
  ) => $SetAttribute<
    $ELEMENTS,
    O.Overwrite<
      STATE,
      {
        links: If<
          STATE['key'],
          {
            key: unknown
            put: STATE['links']['put']
            update: STATE['links']['update']
          },
          {
            key: STATE['links']['key']
            put: unknown
            update: STATE['links']['update']
          }
        >
      }
    >
  >
}

export class SetAttribute<
  ELEMENTS extends SetAttributeElements = SetAttributeElements,
  STATE extends SharedAttributeState = SharedAttributeState
> implements SharedAttributeState<STATE> {
  type: 'set'
  path?: string
  elements: ELEMENTS
  required: STATE['required']
  hidden: STATE['hidden']
  key: STATE['key']
  savedAs: STATE['savedAs']
  defaults: STATE['defaults']
  links: STATE['links']

  constructor({ path, elements, ...state }: STATE & { path?: string; elements: ELEMENTS }) {
    this.type = 'set'
    this.path = path
    this.elements = elements
    this.required = state.required
    this.hidden = state.hidden
    this.key = state.key
    this.savedAs = state.savedAs
    this.defaults = state.defaults
    this.links = state.links
  }

  build<SCHEMA_ACTION extends SchemaAction<this> = SchemaAction<this>>(
    schemaAction: new (schema: this) => SCHEMA_ACTION
  ): SCHEMA_ACTION {
    return new schemaAction(this)
  }
}
