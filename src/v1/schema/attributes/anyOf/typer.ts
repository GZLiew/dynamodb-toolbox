import { overwrite } from 'v1/utils/overwrite'

import type { RequiredOption, AtLeastOnce } from '../constants'
import {
  $type,
  $elements,
  $required,
  $hidden,
  $key,
  $savedAs,
  $defaults
} from '../constants/attributeOptions'
import type { SharedAttributeState } from '../shared/interface'

import type { $AnyOfAttribute } from './interface'
import type { $AnyOfAttributeElements } from './types'
import { AnyOfAttributeDefaultOptions, ANY_OF_DEFAULT_OPTIONS } from './options'
import { freezeAnyOfAttribute } from './freeze'

type $AnyOfAttributeTyper = <
  $ELEMENTS extends $AnyOfAttributeElements[],
  STATE extends SharedAttributeState = SharedAttributeState
>(
  state: STATE,
  ...elements: $ELEMENTS
) => $AnyOfAttribute<$ELEMENTS, STATE>

const $anyOf: $AnyOfAttributeTyper = <
  $ELEMENTS extends $AnyOfAttributeElements[],
  STATE extends SharedAttributeState = SharedAttributeState
>(
  state: STATE,
  ...elements: $ELEMENTS
) => {
  const $anyOfAttribute: $AnyOfAttribute<$ELEMENTS, STATE> = {
    [$type]: 'anyOf',
    [$elements]: elements,
    [$required]: state.required,
    [$hidden]: state.hidden,
    [$key]: state.key,
    [$savedAs]: state.savedAs,
    [$defaults]: state.defaults,
    required: <NEXT_IS_REQUIRED extends RequiredOption = AtLeastOnce>(
      nextRequired: NEXT_IS_REQUIRED = 'atLeastOnce' as NEXT_IS_REQUIRED
    ) => $anyOf(overwrite(state, { required: nextRequired }), ...elements),
    optional: () => $anyOf(overwrite(state, { required: 'never' }), ...elements),
    hidden: () => $anyOf(overwrite(state, { hidden: true }), ...elements),
    key: () => $anyOf(overwrite(state, { key: true, required: 'always' }), ...elements),
    savedAs: nextSavedAs => $anyOf(overwrite(state, { savedAs: nextSavedAs }), ...elements),
    keyDefault: nextKeyDefault =>
      $anyOf(
        overwrite(state, {
          defaults: {
            key: nextKeyDefault,
            put: state.defaults.put,
            update: state.defaults.update
          }
        }),
        ...elements
      ),
    putDefault: nextPutDefault =>
      $anyOf(
        overwrite(state, {
          defaults: {
            key: state.defaults.key,
            put: nextPutDefault,
            update: state.defaults.update
          }
        }),
        ...elements
      ),
    updateDefault: nextUpdateDefault =>
      $anyOf(
        overwrite(state, {
          defaults: {
            key: state.defaults.key,
            put: state.defaults.put,
            update: nextUpdateDefault
          }
        }),
        ...elements
      ),
    default: nextDefault =>
      $anyOf(
        overwrite(state, {
          defaults: state.key
            ? { key: nextDefault, put: state.defaults.put, update: state.defaults.update }
            : { key: state.defaults.key, put: nextDefault, update: state.defaults.update }
        }),
        ...elements
      ),
    keyLink: nextKeyDefault =>
      $anyOf(
        overwrite(state, {
          defaults: {
            key: nextKeyDefault,
            put: state.defaults.put,
            update: state.defaults.update
          }
        }),
        ...elements
      ),
    putLink: nextPutDefault =>
      $anyOf(
        overwrite(state, {
          defaults: {
            key: state.defaults.key,
            put: nextPutDefault,
            update: state.defaults.update
          }
        }),
        ...elements
      ),
    updateLink: nextUpdateDefault =>
      $anyOf(
        overwrite(state, {
          defaults: {
            key: state.defaults.key,
            put: state.defaults.put,
            update: nextUpdateDefault
          }
        }),
        ...elements
      ),
    link: nextDefault =>
      $anyOf(
        overwrite(state, {
          defaults: state.key
            ? { key: nextDefault, put: state.defaults.put, update: state.defaults.update }
            : { key: state.defaults.key, put: nextDefault, update: state.defaults.update }
        }),
        ...elements
      ),
    freeze: path => freezeAnyOfAttribute(elements, state, path)
  }

  return $anyOfAttribute
}

type AnyOfAttributeTyper = <ELEMENTS extends $AnyOfAttributeElements[]>(
  ...elements: ELEMENTS
) => $AnyOfAttribute<ELEMENTS, AnyOfAttributeDefaultOptions>

/**
 * Define a new anyOf attribute
 * @param elements Attribute[]
 * @param options _(optional)_ AnyOf Options
 */
export const anyOf: AnyOfAttributeTyper = <$ELEMENTS extends $AnyOfAttributeElements[]>(
  ...elements: $ELEMENTS
) => $anyOf(ANY_OF_DEFAULT_OPTIONS, ...elements)
