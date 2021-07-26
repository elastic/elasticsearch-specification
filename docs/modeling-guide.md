# Modeling Guide

The goal of the specification is to be used by different languages, from dynamically typed to statically typed.
To achieve this goal the specification contains a series of custom types that do not have a meaning
for the target language, but they should be translated to the most approriate construct.

The specification is written in [TypeScript](https://www.typescriptlang.org/), you can find all
the basic types [here](https://www.typescriptlang.org/docs/handbook/basic-types.html),
while in [behaviors](./behaviors.md) you can find the list of special interfaces used
for describing APIs that can't be represented in the specification.

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

You can find the full list [here](https://github.com/elastic/elasticsearch-specification/blob/update-docs/specification/specs/common.ts),
feel free to add more if it feels appropriate!

### Dates

The `Date` type in TypeScript refers to the JavaScript `Date` object,
since Elasticsearch needs a string or a numeric value, there are aliases also for date types:

```ts
type Timestamp = string
type TimeSpan = string
type DateString = string
```

### Literal values

The compiler supports literal values as well. This can be useful if a
definition changes based on a specific field.

```ts
class Foo {
  type: 'foo',
  prop: string
}

class Bar {
  type: 'bar',
  prop: boolean
}

type FooOrBar = Foo | Bar
```

The example shown above is the correct way to solve this cases, but to make it
easy to use in every language you need to add a *variant* definition as well.
You can find how it works in the next section.

### Void value

The absence of any type. This is commonly used in APIs that returns an empty body.

```ts
class Response {
  body: Void
}
```

### Variants

Variants is a special syntax that can be used by language generators to understand
which type they will need to build based on the variant configuration.
There are three type of variants:

#### Internal

The key used as variant is present inside the definition, for example:

```ts
class Foo {
  type: 'foo', // 'type' is the variant
  prop: string
}
```

If the variant type is internal you should configure the parent type with
the `@variants` js doc tag. teh syntax is:

```ts
/** @variants internal tag='<field-name>' */
```

For example:

```ts
class Foo {
  type: 'foo',
  prop: string
}

class Bar {
  type: 'bar',
  prop: boolean
}

/** @variants internal tag='type' */
type FooOrBar = Foo | Bar
```

An example of internal variants are the type mapping properties.

#### External

The key that defines the variant is external to the definition, like in the
case of aggregations in responses or suggesters.

The variant type should be configured in the parent type, while the variant
name in the definition itself.

The syntax is:

```ts
/** @variants external */

/** @variant name='<field-name>' */
```

For example:

```ts
/** @variants external */
type FooAlias = Faz | Bar

/** @variant name='faz' */
class Faz {
  prop: string
}

/** @variant name='bar' */
class Bar {
  prop: boolean
}
```

In the example above, `FooAlias` will look like this:

```json
{
  "faz": {
    "prop": "hello world"
  }
}
```

or:

```json
{
  "bar": {
    "prop": true
  }
}
```

#### Container

The container variant is used for all the types that contains all the
variants inside the defintion. An example is `QueryContainer`.

The syntax is:

```ts
/** @variants container */
```

For example:

```ts
/** @variants container */
class FooContainer {
  bar?: BarDefinition
  baz?: BazDefinition
  faz?: FazDefinition
}

```
Some containers have properties associated to the container that are not part of the list of variants,
for example `AggregationContainer` and its `aggs` and `meta` properties.

An annotation allows distinguishing these properties from container variants:

```ts
/** @variant container_property */
```

For example:

```
/**
 * @variants container
 */
class AggregationContainer {
  // These two field are always available
  /** @variant container_property */
  aggs?: Dictionary<string, AggregationContainer>
  /** @variant container_property */
  meta?: Dictionary<string, UserDefinedValue>
  // Regular container fields. Only one of them can exist at a time.
  adjacency_matrix?: AdjacencyMatrixAggregation
  auto_date_histogram?: AutoDateHistogramAggregation
  avg?: AverageAggregation
  ...
```

### Shortcut properties

In many places Elasticsearch accepts a property value to be either a complete data structure or a single value, that value being a shortcut for a property in the data structure.

A typical example can be found in queries such as term query: `{"term": {"some_field": {"value": "some_text"}}}` can also be written as `{"term": {"some_field": "some_text"}}`.

This could be modelled as a union of `SomeClass | string`, but this notation doesn't capture the relation between the string variant and the corresponding field (`value` in the above example).

To capture this information and also simplify the spec by avoiding the union, we use the `@shortcut_property` JSDoc tag:

```ts
/** @shortcut_property value */
export class TermQuery extends QueryBase {
  value: string | float | boolean
  case_insensitive?: boolean
}
```

### Additional information

If needed, you can specify additional information on each type with the approariate JSDoc tag.
Following you can find a list of the supported tags:

#### `@since`

Every API already has a `@since` tag, which describes when an API has been added.
You can specify an additional `@since` tag for every property that has been added afterwards.
If the tag is not defined, it's assumed that the property has been added with the API the first time

```ts
/**
 * @since 7.10.0
 */
class FooRequest {
  bar: string
  /** @since 7.11.0 */
  baz: string
  faz: string
}
```

#### description

You can add a description for each property, in this case there is no need to use a JSDoc tag.

```ts
class Foo {
  bar: string
  /** You can baz! */
  baz: string
  faz: string
}
```

#### `@server_default`

The server side default value if the property is not specified.
Default values can only be specified on optional properties.

```ts
class Foo {
  bar: string
  /** @server_default hello */
  baz?: string
  faz: string
}
```

#### `@doc_url`

The documentation url for the parameter.

```ts
class Foo {
  bar: string
  /** @doc_url http://localhost:9200 */
  baz?: string
  faz: string
}
```
