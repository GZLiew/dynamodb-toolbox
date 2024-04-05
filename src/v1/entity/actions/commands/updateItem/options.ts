import type { CapacityOption } from 'v1/operations/constants/options/capacity'
import type { MetricsOption } from 'v1/operations/constants/options/metrics'
import type { ReturnValuesOption } from 'v1/operations/constants/options/returnValues'
import type { EntityV2 } from 'v1/entity'
import type { EntityCondition } from 'v1/entity/actions/parseCondition'

export type UpdateItemCommandReturnValuesOption = ReturnValuesOption

export const updateItemCommandReturnValuesOptionsSet = new Set<UpdateItemCommandReturnValuesOption>(
  ['NONE', 'ALL_OLD', 'UPDATED_OLD', 'ALL_NEW', 'UPDATED_NEW']
)

export interface UpdateItemOptions<ENTITY extends EntityV2 = EntityV2> {
  capacity?: CapacityOption
  metrics?: MetricsOption
  returnValues?: UpdateItemCommandReturnValuesOption
  condition?: EntityCondition<ENTITY>
}
