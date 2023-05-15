import type {
  AnyAttributeCondition,
  NonLogicalCondition,
  Condition
} from 'v1/commands/types/condition'

export type BetweenCondition = NonLogicalCondition &
  Extract<AnyAttributeCondition<string, string>, { between: unknown }>

export const isBetweenCondition = (condition: Condition): condition is BetweenCondition =>
  'between' in condition