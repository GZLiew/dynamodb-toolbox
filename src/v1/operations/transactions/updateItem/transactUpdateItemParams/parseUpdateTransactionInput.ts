import type { EntityV2 } from 'v1/entity'
import type { Item, RequiredOption } from 'v1/schema'
import { schemaParser } from 'v1/parsing'
import { UpdateItemInputExtension } from 'v1/operations/types'
import { parseUpdateExtension } from 'v1/operations/updateItem/updateItemParams/extension/parseExtension'

type EntityUpdateCommandInputParser = (
  entity: EntityV2,
  input: Item<UpdateItemInputExtension>
) => Generator<Item<UpdateItemInputExtension>, Item<UpdateItemInputExtension>>

const requiringOptions = new Set<RequiredOption>(['always'])

export const parseEntityUpdateTransactionInput: EntityUpdateCommandInputParser = (
  entity,
  input
) => {
  const parser = schemaParser(entity.schema, input, {
    fill: 'update',
    transform: true,
    requiringOptions,
    parseExtension: parseUpdateExtension
  })

  parser.next() // defaulted
  parser.next() // linked

  return parser
}