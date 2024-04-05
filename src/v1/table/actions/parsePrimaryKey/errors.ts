import type { ErrorBlueprint } from 'v1/errors/blueprint'

type InvalidKeyPartErrorBlueprint = ErrorBlueprint<{
  code: 'actions.parsePrimaryKey.invalidKeyPart'
  hasPath: true
  payload: {
    expected: string
    received: unknown
    keyPart: string
  }
}>

export type PrimaryKeyParserErrorBlueprints = InvalidKeyPartErrorBlueprint
