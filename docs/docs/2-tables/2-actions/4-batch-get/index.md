---
title: BatchGet
sidebar_custom_props:
  sidebarActionType: read
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# BatchGetCommand

Groups one or several [`BatchGetRequest`](../../../3-entities/3-actions/6-batch-get/index.md) from the `Table` entities to execute a [BatchGetItem](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html) operation.

BatchGetItem operations can affect **multiple tables**, so `BatchGetCommands` do not have a `.send(...)` method. Instead, they should be performed via the dedicated `execute` function:

```ts
import {
  BatchGetCommand,
  execute
} from 'dynamodb-toolbox/table/actions/batchGet'
import { BatchGetRequest } from 'dynamodb-toolbox/entity/actions/batchGet'

const pokeCmd = PokeTable.build(BatchGetCommand).requests(
  PokemonEntity.build(BatchGetRequest).key(pikachuKey),
  PokemonEntity.build(BatchGetRequest).key(charizardKey)
)

const params = pokeCmd.params()

const otherCmd = OtherTable.build(BatchGetCommand).requests(
  TrainerEntity.build(BatchGetRequest).key(ashKey)
)

const { Responses } = await execute(pokeCmd, otherCmd)

// 🙌 Correctly typed!
const [[pikachu, charizard], [ash]] = Responses
```

:::note

Note that batch operations are more efficient than running their equivalent commands in parallel, but **do not reduce costs**.

:::

## Request

### `.requests(...)`

<p style={{ marginTop: '-15px' }}><i>(required)</i></p>

The [`BatchGetRequests`](../../../3-entities/3-actions/6-batch-get/index.md) to execute.

Note that the requests can be provided as **tuples** or **arrays** (the output is typed accordingly):

:::noteExamples

<Tabs>
<TabItem value="tuple" label="Tuple">

```ts
const command = PokeTable.build(BatchGetCommand).requests(
  PokemonEntity.build(BatchGetRequest).key(pikachuKey),
  PokemonEntity.build(BatchGetRequest).key(charizardKey),
  ...
)
```

</TabItem>
<TabItem value="array" label="Array">

```ts
const requests: BatchGetRequest<typeof PokemonEntity>[] = [
  PokemonEntity.build(BatchGetRequest).key(pikachuKey),
  PokemonEntity.build(BatchGetRequest).key(charizardKey),
  ...
]

const command =
  PokeTable.build(BatchGetCommand).requests(requests)
```

</TabItem>
</Tabs>

:::

### `.options(...)`

Provides additional **table-level** options:

```ts
const command = PokeTable.build(BatchGetCommand).options({
  consistent: true
  ...
})
```

You can use the `BatchGetCommandOptions` type to explicitly type an object as a `BatchGetCommand` options object:

```ts
import type { BatchGetCommandOptions } from 'dynamodb-toolbox/table/actions/batchGet'

const batchGetOptions: BatchGetCommandOptions<
  // 👇 Optional entities
  [typeof PokemonEntity, typeof TrainerEntity]
> = {
  consistent: true,
  ...
}

const command = PokeTable.build(BatchGetCommand)
  .requests(...)
  .options(batchGetOptions)
```

:::info

It is advised to provide `requests` first as they constrain the `options` type.

:::

Available options (see the [DynamoDB documentation](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html#API_BatchGetItem_RequestParameters) for more details):

| Option       |    Type    | Default | Description                                                                                                                                                                                                                                                                                                                                 |
| ------------ | :--------: | :-----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `consistent` | `boolean`  | `false` | By default, read operations are <b>eventually</b> consistent (which improves performances and reduces costs).<br/><br/>Set to `true` to use <b>strongly</b> consistent reads.                                                                                                                                                               |
| `attributes` | `string[]` |    -    | To specify a list of attributes to retrieve (improves performances but does not reduce costs).<br/><br/>Requires [requests](#requests). Paths must be common to all requested entities.<br/><br/>See the [PathParser](../../../3-entities/3-actions/18-parse-paths/index.md#paths) action for more details on how to write attribute paths. |

## Execution

```ts
import { execute } from 'dynamodb-toolbox/table/actions/batchGet'

await execute(...batchGetCommands)
```

:::caution

Only one `BatchGetCommand` per Table is supported.

:::

Note that the commands can be provided as **tuples** or **arrays** (the output is typed accordingly):

:::noteExamples

<Tabs>
<TabItem value="tuple" label="Tuple">

```ts
await execute(
  PokeTable.build(BatchGetCommand).requests(...),
  OtherTable.build(BatchGetCommand).requests(...),
  ...
)
```

</TabItem>
<TabItem value="array" label="Array">

```ts
const commands: (
  | BatchGetCommand<typeof PokeTable>
  | BatchGetCommand<typeof OtherTable>
)[] = [
  PokeTable.build(BatchGetCommand).requests(...),
  OtherTable.build(BatchGetCommand).requests(...)
]

await execute(...commands)
```

</TabItem>
</Tabs>

:::

### Options

The `execute` function accepts an additional object as a first argument for **operation-level** options:

```ts
await execute(options, ...batchGetCommands)
```

Available options (see the [DynamoDB documentation](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html#API_BatchGetItem_RequestParameters) for more details):

| Option           |       Type       | Default  | Description                                                                                                                                                                              |
| ---------------- | :--------------: | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `capacity`       | `CapacityOption` | `"NONE"` | Determines the level of detail about provisioned or on-demand throughput consumption that is returned in the response.<br/><br/>Possible values are `"NONE"`, `"TOTAL"` and `"INDEXES"`. |
| `documentClient` | `DocumentClient` |    -     | By default, the `documentClient` attached to the `Table` of the first `BatchGetCommand` is used to execute the operation.<br/><br/>Use this option to override this behavior.            |

:::noteExamples

<Tabs>
<TabItem value="capacity" label="Capacity">

```ts
const { ConsumedCapacity } = await execute(
  { capacity: 'TOTAL' },
  ...batchGetCommands
)
```

</TabItem>
<TabItem value="document-client" label="Document client">

```ts
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'

const documentClient = new DynamoDBDocumentClient(...)

const { Response } = await execute(
  { documentClient },
  ...batchGetCommands
)
```

</TabItem>
</Tabs>

:::

### Response

The data is returned with the same response syntax as from the [DynamoDB BatchGetItem API](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html#API_BatchGetItem_ResponseSyntax), except for the `Responses` property.

Instead of a map of arrays indexed by table name, DynamoDB-Toolbox returns an **array of arrays**, where each sub-array contains the items of a `BatchGetCommand`. Both commands and items are returned in the **same order they were provided**, and items are formatted by their respective entities.

:::note

The official documentation states that _"DynamoDB does not return items in any particular order"_, but DynamoDB-Toolbox **handles the re-ordering for you** 😘

This format is also better for type inference, as DynamoDB-Toolbox does not statically know your table names.

:::
