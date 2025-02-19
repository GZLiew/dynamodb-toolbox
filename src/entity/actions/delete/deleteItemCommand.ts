import { DeleteCommand } from '@aws-sdk/lib-dynamodb'
import type { DeleteCommandInput, DeleteCommandOutput } from '@aws-sdk/lib-dynamodb'
import type { O } from 'ts-toolbelt'

import { EntityFormatter } from '~/entity/actions/format/index.js'
import type { FormattedItem } from '~/entity/actions/format/index.js'
import type { KeyInput } from '~/entity/actions/parse/index.js'
import { EntityAction } from '~/entity/index.js'
import type { Entity } from '~/entity/index.js'
import { DynamoDBToolboxError } from '~/errors/index.js'
import type { AllOldReturnValuesOption, NoneReturnValuesOption } from '~/options/returnValues.js'

import { $key, $options } from './constants.js'
import { deleteItemParams } from './deleteItemParams/index.js'
import type { DeleteItemOptions } from './options.js'

type ReturnedAttributes<
  ENTITY extends Entity,
  OPTIONS extends DeleteItemOptions<ENTITY>
> = OPTIONS['returnValues'] extends NoneReturnValuesOption
  ? undefined
  : OPTIONS['returnValues'] extends AllOldReturnValuesOption
    ? FormattedItem<ENTITY> | undefined
    : never

export type DeleteItemResponse<
  ENTITY extends Entity,
  OPTIONS extends DeleteItemOptions<ENTITY> = DeleteItemOptions<ENTITY>
> = O.Merge<
  Omit<DeleteCommandOutput, 'Attributes'>,
  { Attributes?: ReturnedAttributes<ENTITY, OPTIONS> | undefined }
>

export class DeleteItemCommand<
  ENTITY extends Entity = Entity,
  OPTIONS extends DeleteItemOptions<ENTITY> = DeleteItemOptions<ENTITY>
> extends EntityAction<ENTITY> {
  static actionName = 'delete' as const;

  [$key]?: KeyInput<ENTITY>;
  [$options]?: OPTIONS

  constructor(entity: ENTITY, key?: KeyInput<ENTITY>, options: OPTIONS = {} as OPTIONS) {
    super(entity)
    this[$key] = key
    this[$options] = options
  }

  key(nextKey: KeyInput<ENTITY>): DeleteItemCommand<ENTITY, OPTIONS> {
    return new DeleteItemCommand(this.entity, nextKey, this[$options])
  }

  options<NEXT_OPTIONS extends DeleteItemOptions<ENTITY>>(
    nextOptions: NEXT_OPTIONS
  ): DeleteItemCommand<ENTITY, NEXT_OPTIONS> {
    return new DeleteItemCommand(this.entity, this[$key], nextOptions)
  }

  params(): DeleteCommandInput {
    if (!this[$key]) {
      throw new DynamoDBToolboxError('actions.incompleteAction', {
        message: 'DeleteItemCommand incomplete: Missing "key" property'
      })
    }

    return deleteItemParams(this.entity, this[$key], this[$options])
  }

  async send(): Promise<DeleteItemResponse<ENTITY, OPTIONS>> {
    const deleteItemParams = this.params()

    const commandOutput = await this.entity.table
      .getDocumentClient()
      .send(new DeleteCommand(deleteItemParams))

    const { Attributes: attributes, ...restCommandOutput } = commandOutput

    if (attributes === undefined) {
      return restCommandOutput
    }

    const formattedItem = new EntityFormatter(this.entity).format(attributes)

    return {
      Attributes: formattedItem as any,
      ...restCommandOutput
    }
  }
}

export type DeleteItemCommandClass = typeof DeleteItemCommand
