# Schema structure

The goal of the specification is to be used by different languages, from dynamically typed to statically typed.
To achieve this goal the specification contains a series of custom structures that may not have a meaning
for the target language, but they should be translated to the most appropriate construct.

The specification is written in [TypeScript](https://www.typescriptlang.org/), you can find all
the basic types [here](https://www.typescriptlang.org/docs/handbook/basic-types.html),
while in [behaviors](./behaviors.md) you can find the list of special interfaces used
for describing APIs that can't be represented in the specification.

Refer to the [documentation guide](doc-comments-guide.md) to add documentation to types and fields,
and to the [modeling guide](modeling-guide.md) to learn how to model the different types.

> [!TIP]
> To learn more about how to write docs specifically for our [API references](https://www.elastic.co/docs/api/), refer to the [Contribute to Elastic API docs](https://www.elastic.co/docs/extend/contribute/api-docs/).

You can find the schema representing all APIs and types in the [output folder](output/schema/schema.json).
The schema is structured as follows:

```jsonc
{
  "_info": {
    "license": {
      "name": "Apache 2.0",
      "url": "https://github.com/elastic/elasticsearch-specification/blob/main/LICENSE"
    },
    "title": "Elasticsearch Request & Response Specification"
  },
  "endpoints": [...],
  "types": [...]
}
```

The `endpoints` array contains the list of every endpoint supported by Elasticsearch,
while the `types` array contains the list of every type present in the specification
to model the various endpoints.

## Specification format

The specification's specification can be found [here](compiler/src/model/metamodel.ts).

## Identify a type by name

Each type can be uniquely identified by its type name, which is an object with two keys:
- `name`
- `namespace`

The `name` is the same name given to the type in the specification, while the `namespace`
is the formatted path where the type is stored. For example:

```ts
// file: specification/security/_types/User.ts
export class User {
  email?: string | null
  full_name?: Name | null
  metadata: Metadata
  roles: string[]
  username: Username
  enabled: boolean
}
```

The type name will be:
```json
{
  "name": "User",
  "namespace": "security._types"
}
```

## Identify a type by kind

Each type in the specification has a `kind` property, which can be used to detect
what type you are dealing with, for example:

```jsonc
{
  "kind": "interface",
  "name": {
    "name": "User",
    "namespace": "security._types"
  },
  "properties": [...],
  "specLocation": "security/_types/User.ts#L22-L29"
}
```

## The `_builtins` namespace

In the `schema.json` you will find a namespace that is not present in the `specification` folder named `_builtins`.
This namespace houses all the primitive types that you might need.

- `string`
- `boolean`
- `number`
- `null`
- `void`
- `binary`


