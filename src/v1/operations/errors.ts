import type { ErrorBlueprint } from 'v1/errors/blueprint'

import type { ScanCommandErrorBlueprints } from './scan/errors'
import type { QueryCommandErrorBlueprints } from './query/errors'
import type { CommandUtilsErrorBlueprints } from './utils/errors'
import type { ExpressionParsersErrorBlueprints } from './expression/errors'

type IncompleteCommandErrorBlueprint = ErrorBlueprint<{
  code: 'commands.incompleteCommand'
  hasPath: false
  payload: undefined
}>

type InvalidCapacityOptionErrorBlueprint = ErrorBlueprint<{
  code: 'commands.invalidCapacityOption'
  hasPath: false
  payload: { capacity: unknown }
}>

type InvalidConsistentOptionErrorBlueprint = ErrorBlueprint<{
  code: 'commands.invalidConsistentOption'
  hasPath: false
  payload: { consistent: unknown }
}>

type InvalidIndexOptionErrorBlueprint = ErrorBlueprint<{
  code: 'commands.invalidIndexOption'
  hasPath: false
  payload: { index: unknown }
}>

type InvalidLimitOptionErrorBlueprint = ErrorBlueprint<{
  code: 'commands.invalidLimitOption'
  hasPath: false
  payload: { limit: unknown }
}>

type InvalidMaxPagesOptionErrorBlueprint = ErrorBlueprint<{
  code: 'commands.invalidMaxPagesOption'
  hasPath: false
  payload: { maxPages: unknown }
}>

type InvalidMetricsOptionErrorBlueprint = ErrorBlueprint<{
  code: 'commands.invalidMetricsOption'
  hasPath: false
  payload: { metrics: unknown }
}>

type InvalidReturnValuesOptionErrorBlueprint = ErrorBlueprint<{
  code: 'commands.invalidReturnValuesOption'
  hasPath: false
  payload: { returnValues: unknown }
}>

type InvalidSelectOptionErrorBlueprint = ErrorBlueprint<{
  code: 'commands.invalidSelectOption'
  hasPath: false
  payload: { select: unknown }
}>

type UnknownOptionErrorBlueprint = ErrorBlueprint<{
  code: 'commands.unknownOption'
  hasPath: false
  payload: { option: unknown }
}>

export type CommandsErrorBlueprints =
  | ScanCommandErrorBlueprints
  | QueryCommandErrorBlueprints
  | CommandUtilsErrorBlueprints
  | IncompleteCommandErrorBlueprint
  | InvalidCapacityOptionErrorBlueprint
  | InvalidConsistentOptionErrorBlueprint
  | InvalidIndexOptionErrorBlueprint
  | InvalidLimitOptionErrorBlueprint
  | InvalidMaxPagesOptionErrorBlueprint
  | InvalidMetricsOptionErrorBlueprint
  | InvalidReturnValuesOptionErrorBlueprint
  | InvalidSelectOptionErrorBlueprint
  | UnknownOptionErrorBlueprint
  | ExpressionParsersErrorBlueprints