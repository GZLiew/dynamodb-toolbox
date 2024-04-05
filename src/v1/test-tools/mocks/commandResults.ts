import { isInteger } from 'v1/utils/validation'

import { $receivedActions } from './constants'

export class CommandResults<INPUT, OPTIONS> {
  [$receivedActions]: [input?: INPUT, options?: OPTIONS][]

  constructor(receivedActions: [input?: INPUT, options?: OPTIONS][]) {
    this[$receivedActions] = receivedActions
  }

  count(): number {
    return this[$receivedActions].length
  }

  args(at: number): [input?: INPUT, options?: OPTIONS] | undefined {
    if (!isInteger(at)) {
      throw new Error('Please provide an integer when searching for received command arguments')
    }

    return this[$receivedActions][at]
  }

  allArgs(): [input?: INPUT, options?: OPTIONS][] {
    return this[$receivedActions]
  }
}
