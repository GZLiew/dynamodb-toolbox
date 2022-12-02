import type { O } from 'ts-toolbelt'
import {
  UpdateItemCommand,
  UpdateItemCommandInput,
  UpdateItemCommandOutput
} from '@aws-sdk/client-dynamodb'

import {
  EntityV2,
  UpdateItemInput,
  validateUpdateItemInput,
  FormattedItem,
  format,
  validateSavedItem
} from 'v1'

const hasNoAttributes = (
  commandOutput: UpdateItemCommandOutput
): commandOutput is Omit<UpdateItemCommandOutput, 'Attributes'> & { Attributes?: undefined } =>
  commandOutput?.Attributes === undefined

/**
 * Run an UPDATE Item command for a given Entity
 *
 * @param entity Entity
 * @param updateItemInput Input
 * @return UpdateItemCommandOutput
 */
export const updateItem = async <ENTITY extends EntityV2>(
  entity: ENTITY,
  updateItemInput: UpdateItemInput<ENTITY>
): Promise<
  O.Merge<
    Omit<UpdateItemCommandOutput, 'Attributes'>,
    { Attributes?: FormattedItem<ENTITY> | undefined }
  >
> => {
  const commandOutput = await entity.table.dynamoDbClient.send(
    new UpdateItemCommand(updateItemParams<ENTITY>(entity, updateItemInput))
  )

  if (hasNoAttributes(commandOutput)) {
    return commandOutput
  }

  // CommandOutput necessarily has Attributes
  const { Attributes: attributes, ...restCommandOutput } = commandOutput as O.Required<
    UpdateItemCommandOutput,
    'Attributes'
  >

  if (!validateSavedItem(entity, attributes)) {
    throw new Error()
  }

  const formattedItem = format(entity, attributes)

  return { Attributes: formattedItem, ...restCommandOutput }
}

/**
 * Builds an UPDATE Item command input for a given Entity
 *
 * @param entity Entity
 * @param updateItemInput Input
 * @return UpdateItemCommandInput
 */
export const updateItemParams = <ENTITY extends EntityV2>(
  entity: ENTITY,
  updateItemInput: UpdateItemInput<ENTITY>
): UpdateItemCommandInput => {
  const { name: tableName } = entity.table

  if (!validateUpdateItemInput(entity, updateItemInput)) {
    throw new Error()
  }

  // TODO: Recursively add initial defaults
  const Item = entity.computeDefaults(updateItemInput as any)
  const Key = entity.computeKey(updateItemInput)

  return {
    TableName: tableName,
    // @ts-ignore TODO parse input
    Item: { ...Item, ...Key }
  }
}