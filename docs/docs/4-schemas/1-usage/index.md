---
title: Usage
---

# Schema

A `Schema` is a list of attributes that describe the items of an [`Entity`](../../3-entities/1-usage/index.md):

```ts
import { schema } from 'dynamodb-toolbox/schema'
import { string } from 'dynamodb-toolbox/attribute/string'
import { number } from 'dynamodb-toolbox/attribute/number'

const pokemonSchema = schema({
  pokemonId: string().key(),
  level: number().default(1),
  pokeType: string()
    .enum('fire', 'water', 'grass')
    .optional()
})

const PokemonEntity = new Entity({
  ...,
  schema: pokemonSchema
})
```

Schemas always start with a **root object**, listing [**attributes**](#attributes) by their names.

## Attribute Types

Schema attributes can be imported by their **dedicated exports**, or through the `attribute` or `attr` shorthands. For instance, those declarations output the same attribute:

```ts
// 👇 More tree-shakable
import { string } from 'dynamodb-toolbox/attribute/string'

const nameAttr = string()

// 👇 Less tree-shakable, but single import
import { attribute, attr } from 'dynamodb-toolbox/attribute'

const nameAttr = attribute.string()
const nameAttr = attr.string()
```

Available attribute types are:

- [**`any`**](../4-any/index.md) - Contains any value
- [**`boolean`**](../5-boolean/index.md) - Contains [booleans](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes)
- [**`number`**](../6-number/index.md): Contains [numbers](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes)
- [**`string`**](../7-string/index.md): Contains [strings](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes)
- [**`binary`**](../8-binary/index.md): Contains [binaries](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes)
- [**`set`**](../9-set/index.md): Contains [sets](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes) of either `number`, `string`, or `binary` elements
- [**`list`**](../10-list/index.md): Contains [lists](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes) of elements of any type
- [**`map`**](../11-map/index.md): Contains [maps](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes), i.e. a finite list of key-value pairs, values being child attributes of any type
- [**`record`**](../12-record/index.md): Contains a different kind of [maps](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes) - Records differ from `maps` as they have a non-explicit (potentially infinite) range of keys, but with a single value type
- [**`anyOf`**](../4-any/index.md): Contains a finite **union** of possible attributes

:::info

DynamoDB-Toolbox attribute types closely mirror the capabilities of DynamoDB. See the [DynamoDB documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes) for more details.

:::

Note that some attribute types are **nested**, i.e. defined with other attributes. For instance, here's a list of string:

```ts
const nameAttr = string()
const namesAttr = list(nameAttr)
```

:::info

Schemas are a standalone feature of DynamoDB-Toolbox (you can use them separately to [parse](../14-actions/1-parse.md) and [format](../14-actions/2-format.md) data for instance) and might event be moved in a separate library one day.

:::

## Fine-Tuning Attributes

You can update attribute properties by using **dedicated methods** or by providing **option objects**.

The former provides a **slick devX** with autocomplete and shorthands, while the latter theoretically requires **less compute time and memory usage** (although it should be negligible):

```ts
// Using methods
const pokemonName = string().required('always')
// Using options
const pokemonName = string({ required: 'always' })
```

:::info

Attribute methods do not mute the origin attribute, but **return a new attribute** (hence the impact in memory usage).

:::

The output of an attribute method **is also an attribute**, so you can **chain methods**:

```ts
const pokeTypeAttr = string()
  .required('always')
  .enum('fire', 'water', 'grass')
  .savedAs('t')
```

See each [attribute type](#attribute-types) documentation (for instance the [`string`](../7-string/index.md) page) to learn about available options.

Finally, note that once `schema` is applied, attributes **cannot be modified** anymore (check the [Warm vs Frozen](../2-warm-vs-frozen/index.md) section for more details):

```ts
const pokemonSchema = schema({
  name: string().required('always'),
  ...
})

pokemonSchema.attributes.name.required
// => 'always'

pokemonSchema.attributes.name.required('atLeastOnce')
// => ❌ `required` is not a function
```
