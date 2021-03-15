# Modeling Guide

The goal of the specification is to be used by different languages, from dynamically typed to statically typed.
To achieve this goal the specification contains a series of custom types that do not have a meaning
for the target language, but they should be translated to the most approriate construct.

The specification is written in [TypeScript](https://www.typescriptlang.org/), you can find all
the basic types [here](https://www.typescriptlang.org/docs/handbook/basic-types.html),
while in [behaviors](./behaviors.md) you can find the list of special interfaces used
for describing APIs that can't be represented in the specification.

### Code generator property name hints

In some cases you need to tell to language generators how to name a property.
This might happen because the default name cannot be used in the language or because
some APIs do not define the body as a structured object, but accept a generic instead.
In those cases you should add a js doc tag to suggest to language generators what
property name should be used.

It's important to mention that language generators **don't have to** respect the name hint.
It is only a suggestion or it might apply only to specific languages.

The js tag should be used as follows:
```ts
  /** @identifier document */
  body: TDocument
```

Fo example: 
```ts
/**
 * @rest_spec_name index
 * @since 0.0.0
 * @stability stable
 * @class_serializer IndexRequestFormatter`1`
 */
interface IndexRequest<TDocument> extends RequestBase {
  path_parts?: {
    ...
  }
  query_parameters?: {
    ...
  }
  /** @identifier document */
  body?: TDocument
}
```

Another example with enums:

```ts
enum DateMathTimeUnit {
  /** @identifier Second */
  s = 0,
  /** @identifier Minute */
  m = 1,
  /** @identifier Hour */
  h = 2,
  /** @identifier Day */
  d = 3,
  /** @identifier Week */
  w = 4,
  /** @identifier Month */
  M = 5,
  /** @identifier Year */
  y = 6
}
```

### Dictionary

Represents a dynamic key value map:

```ts
property: Dictionary<string, TypeDefinition>
```

For example:

```json
{
  "property1": "type",
  "property2": "other-type",
}
```

### SingleKeyDictionary

Represents a dynamic key value map with a single top level key:

```ts
property: SingleKeyDictionary<string, TypeDefinition>
```

For example:

```json
{
  "onlyKey": "type"
}
```

### Array

Represents an array of the given value:

```ts
// generics syntax
property: Array<string>

// short syntax
property: string[]
```

### Union

Represents a type that can accept multiple types:

```ts
property: string | long
```

It can be combined with other types:
```ts
// array
property: Array<string | long>

// dictionary
property: Dictionary<string, string | long>
```

### Enum

Represents a set of allowed values:

```ts
enum MyEnum {
  first = 0,
  second = 1,
  third = 2
}

property: MyEnum
```

### User defined value

Represents a value that will be defined by the user and has no specific type.

```ts
property: UserDefinedValue
```

### Numbers

The numeric type in TypeScript is `number`, but given that this specification target mutliple languages,
it offers a bunch of alias that represents the type that should be used if the language supports it:

```ts
type short = number
type byte = number
type integer = number
type long = number
type float = number
type double = number
```

### Strings

The string type in TypeScript is `string`. It's ok to use it in the spec, but to offer a more developer
friendly specification, we do offer a set of aliases based on which string we do expect, for example:

```ts
type ScrollId = string
type ScrollIds = string
type CategoryId = string
type ActionIds = string
type Field = string
type Id = string | number
type Ids = string | number | string[]
type IndexName = string
type Indices = string | string[]
...
```

You can find the full list [here](https://github.com/elastic/elastic-client-generator/blob/update-docs/specification/specs/common.ts),
feel free to add more if it feels appropriate!

### Dates

The `Date` type in TypeScript refers to the JavaScript `Date` object,
since Elasticsearch needs a string or a numeric value, there are aliases also for date types:

```ts
type Timestamp = string
type TimeSpan = string
type DateString = string
```
