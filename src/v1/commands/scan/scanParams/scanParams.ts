import type { ScanCommandInput } from '@aws-sdk/lib-dynamodb'
import isEmpty from 'lodash.isempty'

import type { TableV2 } from 'v1/table'
import type { AnyAttributePath, Condition } from 'v1/commands/types'
import type { EntityV2 } from 'v1/entity'
import { DynamoDBToolboxError } from 'v1/errors'
import { parseCapacityOption } from 'v1/commands/utils/parseOptions/parseCapacityOption'
import { parseIndexNameOption } from 'v1/commands/utils/parseOptions/parseIndexNameOption'
import { parseConsistentOption } from 'v1/commands/utils/parseOptions/parseConsistentOption'
import { parseLimitOption } from 'v1/commands/utils/parseOptions/parseLimitOption'
import { parseSelectOption } from 'v1/commands/utils/parseOptions/parseSelectOption'
import { rejectExtraOptions } from 'v1/commands/utils/parseOptions/rejectExtraOptions'
import { isInteger } from 'v1/utils/validation/isInteger'
import { parseCondition } from 'v1/commands/expression/condition/parse'
import { parseProjection } from 'v1/commands/expression/projection/parse'

import type { ScanOptions } from '../options'

export const scanParams = <
  TABLE extends TableV2,
  ENTITIES extends EntityV2,
  OPTIONS extends ScanOptions<TABLE, ENTITIES>
>(
  { table, entities = [] }: { table: TABLE; entities?: ENTITIES[] },
  scanOptions: OPTIONS = {} as OPTIONS
): ScanCommandInput => {
  const {
    capacity,
    consistent,
    exclusiveStartKey,
    indexName,
    limit,
    select,
    totalSegments,
    segment,
    filters: _filters,
    attributes: _attributes,
    ...extraOptions
  } = scanOptions

  const filters = (_filters ?? {}) as Record<string, Condition>
  const attributes = _attributes as AnyAttributePath[] | undefined

  const commandOptions: ScanCommandInput = {
    TableName: table.getName()
  }

  if (capacity !== undefined) {
    commandOptions.ReturnConsumedCapacity = parseCapacityOption(capacity)
  }

  if (consistent !== undefined) {
    commandOptions.ConsistentRead = parseConsistentOption(consistent, indexName)
  }

  if (exclusiveStartKey !== undefined) {
    commandOptions.ExclusiveStartKey = exclusiveStartKey
  }

  if (indexName !== undefined) {
    commandOptions.IndexName = parseIndexNameOption(table, indexName)
  }

  if (limit !== undefined) {
    commandOptions.Limit = parseLimitOption(limit)
  }

  if (select !== undefined) {
    commandOptions.Select = parseSelectOption(select, { indexName, attributes })
  }

  if (segment !== undefined) {
    if (totalSegments === undefined) {
      throw new DynamoDBToolboxError('scanCommand.invalidSegmentOption', {
        message: 'If a segment option has been provided, totalSegments must also be defined',
        payload: {}
      })
    }

    if (!isInteger(totalSegments) || totalSegments < 1) {
      throw new DynamoDBToolboxError('scanCommand.invalidSegmentOption', {
        message: `Invalid totalSegments option: '${String(
          totalSegments
        )}'. 'totalSegments' must be a strictly positive integer.`,
        payload: { totalSegments }
      })
    }

    if (!isInteger(segment) || segment < 0 || segment >= totalSegments) {
      throw new DynamoDBToolboxError('scanCommand.invalidSegmentOption', {
        message: `Invalid segment option: '${String(
          segment
        )}'. 'segment' must be a positive integer strictly lower than 'totalSegments'.`,
        payload: { segment, totalSegments }
      })
    }

    commandOptions.TotalSegments = totalSegments
    commandOptions.Segment = segment
  }

  if (entities.length > 0) {
    const expressionAttributeNames: Record<string, string> = {}
    const expressionAttributeValues: Record<string, any> = {}
    const filterExpressions: string[] = []
    let projectionExpression: string | undefined = undefined

    entities.forEach((entity, index) => {
      const entityNameFilter = { attr: entity.entityAttributeName, eq: entity.name }
      const entityFilter = filters[entity.name]

      const {
        ExpressionAttributeNames: filterExpressionAttributeNames,
        ExpressionAttributeValues: filterExpressionAttributeValues,
        ConditionExpression: filterExpression
      } = parseCondition<EntityV2, Condition<EntityV2>>(
        entity,
        entityFilter !== undefined ? { and: [entityNameFilter, entityFilter] } : entityNameFilter,
        index.toString()
      )

      Object.assign(expressionAttributeNames, filterExpressionAttributeNames)
      Object.assign(expressionAttributeValues, filterExpressionAttributeValues)
      filterExpressions.push(filterExpression)

      // TODO: For now, we compute the projectionExpression using the first entity. Will probably use Table schemas once they exist.
      if (projectionExpression === undefined && attributes !== undefined) {
        const {
          ExpressionAttributeNames: projectionExpressionAttributeNames,
          ProjectionExpression
        } = parseProjection<EntityV2, AnyAttributePath[]>(entity, attributes)

        Object.assign(expressionAttributeNames, projectionExpressionAttributeNames)
        projectionExpression = ProjectionExpression
      }
    })

    if (!isEmpty(expressionAttributeNames)) {
      commandOptions.ExpressionAttributeNames = expressionAttributeNames
    }

    if (!isEmpty(expressionAttributeValues)) {
      commandOptions.ExpressionAttributeValues = expressionAttributeValues
    }

    if (filterExpressions.length > 0) {
      commandOptions.FilterExpression =
        filterExpressions.length === 1
          ? filterExpressions[0]
          : `(${filterExpressions.filter(Boolean).join(') OR (')})`
    }

    if (projectionExpression !== undefined) {
      commandOptions.ProjectionExpression = projectionExpression
    }
  }

  rejectExtraOptions(extraOptions)

  return commandOptions
}