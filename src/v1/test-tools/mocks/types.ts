import type { GetItemCommandMock } from './getItemCommand'
import type { PutItemCommandMock } from './putItemCommand'

type ClassStaticProperties<CLASSES> = CLASSES extends infer CLASS
  ? {
      [KEY in keyof CLASS as KEY extends 'prototype'
        ? never
        : CLASS[KEY] extends (...args: unknown[]) => unknown
        ? never
        : KEY]: CLASS[KEY]
    }
  : never

type CommandMock = typeof GetItemCommandMock | typeof PutItemCommandMock

export type CommandType = ClassStaticProperties<CommandMock>['commandType']