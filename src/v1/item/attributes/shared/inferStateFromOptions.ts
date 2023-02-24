import type { O } from 'ts-toolbelt'

import type {
  AttributeOptionsConstraints,
  AttributeOptionName
} from '../constants/attributeOptions'

type InferStateValueFromOption<
  OPTIONS_CONSTRAINTS extends Partial<AttributeOptionsConstraints>,
  DEFAULT_OPTIONS extends OPTIONS_CONSTRAINTS,
  OPTIONS extends Partial<OPTIONS_CONSTRAINTS>,
  OPTION_NAME extends keyof OPTIONS_CONSTRAINTS,
  OPTION_VALUE = undefined extends OPTIONS_CONSTRAINTS[OPTION_NAME]
    ? OPTIONS[OPTION_NAME]
    : NonNullable<OPTIONS[OPTION_NAME]>
> = OPTIONS_CONSTRAINTS[OPTION_NAME] extends OPTION_VALUE
  ? DEFAULT_OPTIONS[OPTION_NAME]
  : OPTION_VALUE

export type InferStateFromOptions<
  OPTIONS_CONSTRAINTS extends Partial<AttributeOptionsConstraints>,
  DEFAULT_OPTIONS extends OPTIONS_CONSTRAINTS,
  OPTIONS extends Partial<OPTIONS_CONSTRAINTS>
> =
  // Applying void O.Update improves type display
  O.Update<
    {
      [KEY in Extract<keyof OPTIONS_CONSTRAINTS, AttributeOptionName>]: InferStateValueFromOption<
        OPTIONS_CONSTRAINTS,
        DEFAULT_OPTIONS,
        OPTIONS,
        KEY
      >
    },
    never,
    never
  >
