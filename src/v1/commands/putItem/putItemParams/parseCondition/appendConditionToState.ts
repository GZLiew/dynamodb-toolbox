import type { Condition } from 'v1/commands/condition/types'

import { ParsingState } from './types'
import { isComparisonCondition, appendComparisonConditionToState } from './comparison'
import { isSingleArgFnCondition, appendSingleArgFnConditionToState } from './singleArgFn'
import { isBetweenCondition, appendBetweenConditionToState } from './between'
import { isNotCondition, appendNotConditionToState } from './not'

export const appendConditionToState = (state: ParsingState, condition: Condition): ParsingState => {
  if (isComparisonCondition(condition)) {
    return appendComparisonConditionToState(state, condition)
  }

  if (isSingleArgFnCondition(condition)) {
    return appendSingleArgFnConditionToState(state, condition)
  }

  if (isBetweenCondition(condition)) {
    return appendBetweenConditionToState(state, condition)
  }

  if (isNotCondition(condition)) {
    return appendNotConditionToState(state, condition)
  }

  return state
}
