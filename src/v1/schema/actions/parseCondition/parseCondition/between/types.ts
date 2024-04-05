import type { AnyAttributeCondition, NonLogicalCondition, Condition } from '../../condition'

export type BetweenOperator = 'between'
export type BetweenCondition = NonLogicalCondition &
  Extract<AnyAttributeCondition<string, string>, Record<BetweenOperator, unknown>>

export const isBetweenCondition = (condition: Condition): condition is BetweenCondition =>
  'between' in condition
