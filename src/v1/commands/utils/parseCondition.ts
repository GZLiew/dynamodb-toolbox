import type { NativeAttributeValue } from '@aws-sdk/util-dynamodb'

import type { Item } from 'v1/item'
import type { Condition } from 'v1/commands/types/condition'
import { ConditionParser } from 'v1/commands/classes/conditionParser'

export const parseCondition = <ITEM extends Item, CONDITION extends Condition<ITEM>>(
  item: ITEM,
  condition: CONDITION
): {
  ConditionExpression: string
  ExpressionAttributeNames: Record<string, string>
  ExpressionAttributeValues: Record<string, NativeAttributeValue>
} => {
  const conditionParser = new ConditionParser(item)
  conditionParser.parseCondition(condition)
  return conditionParser.toCommandOptions()
}