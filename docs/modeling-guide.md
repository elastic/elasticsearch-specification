# Modeling Guide

The goal of the specification is to be used by different languages, from dynamically typed to statically typed.
To achieve this goal the specification contains a series of custom types that do not have a meaning
for the target language, but they should be translated to the most appropriate construct.

The specification is written in [TypeScript](https://www.typescriptlang.org/), you can find all
the basic types [here](https://www.typescriptlang.org/docs/handbook/basic-types.html),
while in [behaviors](./behaviors.md) you can find the list of special interfaces used
for describing APIs that can't be represented in the specification.

Refer to the [documentation guide](doc-comments-guide.md) to add documentation to types and fields.

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

Represents a set of allowed values.


```ts
enum MyEnum {
  first,
  second,
  third
}

property: MyEnum
```

Note that you don't have to provide both identifiers and values as is common in TypeScript. When there's only an identifier, the API specification compiler will use it for both the identifier and the value of enum members.

Also do not use identifiers and values for the sole purpose of providing upper-case identifiers (e.g. `FOO = 'foo'`). Each language generator will use the identifier casing that is expected by that language.

Some enumerations contain values that aren't identifiers, or that are not explicit enough. In that case you can either assign values to enum members or use the `@codegen_name` jsdoc tag to define the identifier that will be used by code generators:

```ts
enum MyEnum {
    percent_of_sum,
    mean,
    /** @codegen_name z_score */
    'z-score',
    softmax
}

export enum IntervalUnit {
    second = 's',
    minute = 'm',
    hour = 'h',
    day = 'd',
    week = 'w'
}
```

**Use custom identifiers for enum members sparingly**: we want to keep identifiers as close as possible to their value in JSON payloads to that usesr can easily map values found in the Elasticsearch reference documentation to code identifiers in the client libraries. 

Some enumerations accept alternate values for some of their members. The `@aliases` jsdoc tac can be used to capture these values:

```ts
enum Orientation {
  /** @aliases counterclockwise, ccw */
  right,
  /** @aliases clockwise, cw */
  left
}
```

Some enumerations can accept arbitrary values other than the ones defined. The `@non_exhaustive` jsdoc tag can be used to describe this behavior.
By default, an enum is to be considered exhaustive.

```ts
/** @non_exhaustive */
export enum ScriptLanguage {
  painless,
  expression,
  mustache,
  java
}
```

### User defined value

Represents a value that will be defined by the user and has no specific type.

```ts
property: UserDefinedValue
```

### Numbers

The numeric type in TypeScript is `number`, but given that this specification targets multiple languages,
it offers a bunch of aliases that represent the type that should be used if the language supports it:

```ts
type short = number
type byte = number
type integer = number
type long = number
type float = number
type double = number
```

### Strings

The string type in TypeScript is `string`. It's okay to use it in the spec, but to offer a more developer
friendly specification, we do offer a set of aliases based on which string we expect, for example:

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

You can find the full list [here](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts),
feel free to add more if it feels appropriate!

### Dates

Elasticsearch uses a lot of dates, times and durations. There are various types available to capture the variety of types and representations in the specification:

* for date and time: `DateTime` for formatted dates, `EpochTime<UnitMillis>`, `EpochTime<UnitSeconds>`, etc. for number values
* for intervals: `Duration` for formatted values, `DurationValue<UnitMillis>`, `DurationValue<UnitSeconds>`, etc. for number values
* for time of day: `TimeOfDay

See [`specification/_types/Time.ts`](../specification/_types/Time.ts) for additional details.

Since code generators may choose to use a platform builtin type to represent time-related data, make sure to choose the appropriate representation and **never** use a primitive value such as `string` or `long`.


### Binary

Some APIs return a Binary stream of data instead of JSON.
Create an alias of the `ArrayBuffer` type for the appropriate name.

```ts
export type MapboxVectorTiles = ArrayBuffer

export class Response {
  body: MapboxVectorTiles
}
```

In the output schema.json `MapboxVectorTiles` will be defined as:

```json
{
  "kind": "type_alias",
  "name": {
    "name": "MapboxVectorTiles",
    "namespace": "_types"
  },
  "type": {
    "kind": "instance_of",
    "type": {
      "name": "binary",
      "namespace": "internal"
    }
  }
}
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

### Stringified values

Elasticsearch sometimes uses string-only representations in the JSON it outputs, even for numbers and booleans. This is notably seen in `cat` request and index and cluster settings.

To keep the semantic soundness of the specification and avoid adding ` | string` to handle these cases, the `Stringified` behaviour should be used for these cases. Also, this problem only affects output: data should be sent in its original format (i.e. number, boolean, etc).

Instead of:
```ts
export class IndexSettings {
  // DO NOT DO THAT
  number_of_shards?: integer | string
  number_of_replicas?: integer | string
  hidden?: boolean | string
}
```

Use the `Stringified` behavior:
```
export class IndexSettings {
  number_of_shards?: Stringified<integer>
  number_of_replicas?: Stringified<integer>
  hidden?: Stringified<boolean>
}
```

### Variants

Variants is a special syntax that can be used by language generators to understand
which type they will need to build based on the variant configuration.

If the list of variants is not exhaustive (e.g. for types where new variants can be added by
Elasticsearch plugins), you can add the `@non_exhaustive` js doc tag to indicate that additional
variants can exist and should be accepted.

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
the `@variants` js doc tag. The syntax is:

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

#### typed_keys_quirk

**Note**: this feature exists because of some early Elasticsearch APIs where tagging was forgotten, and added after the fact using this quirk to avoid breaking compatibility. **It should not be used for new APIs.**

The key that defines the variant is external to the definition, like in the
case of aggregations in responses or suggesters.

The variant type should be configured in the parent type, while the variant
name in the definition itself.

The syntax is:

```ts
/** @variants typed_keys_quirk */

/** @variant name='<field-name>' */
```

For example:

```ts
/** @variants typed_keys_quirk */
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
  "name#faz": {
    "prop": "hello world"
  }
}
```

or:

```json
{
  "name#bar": {
    "prop": true
  }
}
```

#### Container

The container variant is used for all the types that contain all the
variants inside the definition. An example is `QueryContainer`.

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
Some containers have properties associated with the container that are not part of the list of variants,
for example `AggregationContainer` and its `aggs` and `meta` properties.

An annotation allows distinguishing these properties from container variants:

```ts
/** @variant container_property */
```

For example:

```ts
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

#### Untagged

The untagged variant is used for unions that can only be distinguished by the type of one or more fields.

> [!WARNING]
> This variant should only be used for legacy types and should otherwise be avoided as far as possible, as it leads to less optimal code generation in the client libraries.

The syntax is:

```ts
/** @variants untagged */
```

Untagged variants must exactly follow a defined pattern.

For example:

```ts
export class MyTypeBase<T1, T2, ...> { ... }

export class MyTypeUntyped extends MyTypeBase<UserDefinedValue> {}
export class MyTypeSpecialized1 extends MyTypeBase<int> {}
export class MyTypeSpecialized2 extends MyTypeBase<string> {}
export class MyTypeSpecialized3 extends MyTypeBase<bool> {}

/**
 * @codegen_names untyped, mytype1, mytypet2, mytype3 
 * @variant untagged untyped=_types.MyTypeUntyped
 */
// Note: deserialization depends on value types
export type MyType = MyTypeUntyped | MyTypeSpecialized1 | MyTypeSpecialized2 | MyTypeSpecialized3 
```

### Shortcut properties

In many places Elasticsearch accepts a property value to be either a complete data structure or a single value, that value being a shortcut for a property in the data structure.

A typical example can be found in queries such as term query. `{"term": {"some_field": {"value": "some_text"}}}` can also be written as `{"term": {"some_field": "some_text"}}`.

This could be modelled as a union of `SomeClass | string`, but this notation doesn't capture the relation between the string variant and the corresponding field (`value` in the above example).

To capture this information and also simplify the spec by avoiding the union, we use the `@shortcut_property` JSDoc tag:

```ts
/** @shortcut_property value */
export class TermQuery extends QueryBase {
  value: string | float | boolean
  case_insensitive?: boolean
}
```

### Tracking Elasticsearch quirks

There are a few places where Elasticsearch has an uncommon behavior that does not deserve a specific feature in the API specification metamodel. These quirks still have to be captured so that code generators can act on them. The `eq_quirk` jsdoc tag is meant for that, and can be used on type definitions and properties.

```ts
/**
 * @es_quirk This enum is a boolean that evolved into a tri-state enum. True and False have
 *   to be (de)serialized as JSON booleans.
 */
enum Foo { true, false, bar }
```

Code generators should track the `es_quirk` they implement and fail if a new unhandled quirk is present on a type or a property. This behavior allows code generators to be updated whenever a new quirk is identified in the API specification.

### Additional information

If needed, you can specify additional information on each type with the appropriate JSDoc tag.
Following you can find a list of the supported tags:

#### `@availability`

Every API already has a `@availability <name> ...` annotation, which describes when an API was added.
You can specify an additional `since=` value for every property that has been added afterwards.
If the tag is not defined, it's assumed that the property has been added with the API the first time

```ts
/**
 * @availability stack since=7.10.0
 * @availability serverless
 */
class FooRequest {
  bar: string
  /**
   * @availability stack since=7.11.0
   * @availability serverless
   */
  baz: string
  faz: string
}
```

If you'd like an API or property to be available for only Stack or Serverless Elasticsearch
the annotation with the desired flavor should be used without specifying the other. If the property
is available in both flavors either the `@availability` annotation can either be omitted entirely
or both flavors can be specified.

```ts
export class Example {
  /**
   * This field is available in both (default when there aren't any annotations).
   */
  fieldBoth1: integer

  /**
   * This field is available in both flavors and is explicitly annotated.
   * @availability stack
   * @availability serverless
   */ 
  fieldBoth2: integer

  /**
   * This field is only available on Serverless Elasticsearch.
   * @availability serverless
   */
  fieldServerlessOnly: integer

  /**
   * This field is only available on Stack Elasticsearch.
   * @availability stack
   */
  fieldStackOnly: integer
}
```

#### description

You can (and should!) add a description for each type and property. For an in-depth explanation of how to write good descriptions, see [Documenting the API specification](doc-comments-guide.md).

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
They appear in the generated documentation and do not affect clients.

```ts
class Foo {
  bar: string
  /** @server_default hello */
  baz?: string
  faz: string
}
```

If you need to specify a server default value for an array, you must use the JavaScript array syntax:

```ts
class Foo {
  bar: string
  /** @server_default ['hello'] */
  baz?: string[]
  faz: string
}
```

If you need an `@` sign, you can escape it:

```ts
class Foo {
  /**
   * Field containing event timestamp.
   * @server_default \@timestamp
   */
  timestamp_field?: Field
}
```

#### `@doc_id`

An identifier that can be used for generating the doc url in clients.
The unique id/url pair must exist in `specification/_doc_ids/table.csv`.
NOTE: This link is *not* included in the OpenAPI output.

```ts
/**
 * @rest_spec_name api
 * @doc_id foobar
 */
class Request {
  ...
}
```

```csv
foobar,/guide/en/example
```

#### `@ext_doc_id`

An identifier for a link.
The unique id/url pair must exist in `specification/_doc_ids/table.csv`.
NOTE: This link is included in the OpenAPI output.

```ts
/**
 * @variants container
 * @non_exhaustive
 * @ext_doc_id query-dsl
 */
export class QueryContainer {
  ...
}
```

```csv
query-dsl,/guide/en/example
```


#### `@doc_url`

The documentation url for the parameter or definition.
To reduce the risk of broken links, use `@doc_id` instead.
NOTE: This link is *not* included in the OpenAPI output.

```ts
class Foo {
  bar: string
  /** @doc_url http://localhost:9200 */
  baz?: string
  faz: string
}
```

#### `@doc_tag`

An OpenAPI tag that is used to group similar endpoints in the API documentation.
If it is absent, by default the tag is derived from the first part of the namespace.

```ts
/**
 * @rest_spec_name api
 * @doc_tag my tag
 */
class Request {
  ...
}
```

You can see the existing tag values in [elasticsearch-shared-overlays.yaml](https://github.com/elastic/elasticsearch-specification/blob/main/docs/overlays/elasticsearch-shared-overlays.yaml).
If you add a new tag value in your specification, you must also add it to this file.

NOTE: In the OpenAPI specification, operations can have multiple tags. However, we currently support only a single tag.


#### `@codegen_name`

A custom name that can be used to display the property. Useful in Enums and
for request bodies where the document is the entire body.

```ts
export class ConfusionMatrixThreshold {
  /**
   * True Positive
   * @codegen_name true_positive
   */
  tp: integer
  /**
   * False Positive
   * @codegen_name false_positive
   */
  fp: integer
  /**
   * True Negative
   * @codegen_name true_negative
   */
  tn: integer
  /**
   * False Negative
   * @codegen_name false_negative
   */
  fn: integer
}

export interface Request<TDocument> extends RequestBase {
  path_parts: {}
  query_parameters: {}
  /** @codegen_name document */
  body?: TDocument
}
```

#### `@index_privileges`

If an endpoint has some index security prerequisites to satisfy, you can specify them here with a comma separated list.

```ts
/**
 * @rest_spec_name indices.create
 * @availability stack since=0.0.0 stability=stable
 * @index_privileges create_index, manage
 */
export interface Request extends RequestBase {
 ...
}
```

#### `@cluster_privileges`

If an endpoint has some cluster security prerequisites to satisfy, you can specify them here with a comma separated list.

```ts
/**
 * @rest_spec_name cluster.state
 * @availability stack since=1.3.0 stability=stable
 * @cluster_privileges monitor, manage
 */
export interface Request extends RequestBase {
 ...
}
```

#### `@deprecated`

Use if an endpoint or property is deprecated; you should add the version as well.

```ts
class Foo {
  bar: string
  /** @deprecated 7.0.0 */
  baz?: string
  faz: string
}
```

You can also add an optional description:

```ts
class Foo {
  bar: string
  /** @deprecated 7.0.0 'baz' has been deprecated, use 'bar' instead */
  baz?: string
  faz: string
}
```

#### `@stability` and `@visibility`

These annotations have been removed, use `@availability` instead.
