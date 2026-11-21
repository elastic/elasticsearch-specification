# Agent instructions

This repository holds the specification of the Elasticsearch REST API. The definitions under `specification/` are the
input of the client generators and of the API reference, so a wrong type becomes a wrong client in each language.

## Before you change the specification

Read `docs/add-new-api.md`, `docs/modeling-guide.md` and `docs/style-guide.md`. They are the rules for each definition
in `specification/`. `docs/behaviors.md` describes the behavior interfaces, and `docs/doc-comments-guide.md` describes
the comments.

Run `make setup` one time, then `make lint` after each change. The lint rules are in `validator/`, and
`validator/README.md` has one line for each rule. Run `make contrib` before you open a pull request.

## Checks that need the Elasticsearch source

The linter sees the specification only. It cannot know what Elasticsearch accepts and returns. Do the checks below for
each endpoint, type and property that you add or change. Use the [Elasticsearch
source](https://github.com/elastic/elasticsearch) on the branch that matches the branch of the specification.

Three places in the source answer most questions. The `Rest...Action` class of the endpoint declares the routes and
reads the path and query parameters. The request class and its parser (`ConstructingObjectParser`, `ObjectParser` or a
`fromXContent` method) define the body. The `toXContent` method of the response class defines the response.

When the source and the reference documentation disagree, the source is correct. When the source shows a behavior
that the specification cannot express, model the closest shape and record the difference with `@es_quirk`.

### Endpoint

**URLs and methods.** Compare the `urls` block with the `routes()` of the REST handler. Each route is one path with
one method. A route that the handler marks as deprecated gets a `deprecation` entry in the specification.

**Path parts.** A path part is required when all routes contain it and optional when one route does not. The lint
checks this against the `urls` block, so the `urls` block must be correct first. Use a list alias such as `Indices` or
`Names` when the handler splits the value on commas.

**Query parameters.** List each parameter that the handler reads with `request.param` or one of the `paramAs`
methods, and no others. Parameters that all endpoints share, such as `error_trace`, `filter_path`, `human` and
`pretty`, belong to `CommonQueryParameters`. Look at helper methods too: the handler can read `allow_no_indices`,
`expand_wildcards` and `ignore_unavailable` through `IndicesOptions.fromRequest`, and `master_timeout` and `timeout`
through a utility method.

**Parameters in two places.** Some values can be sent in the query string and in the body. Model the value in each
place where the handler reads it. Do not copy a body property into `query_parameters` because a sibling endpoint has
it there.

**Request body.** The body is required when the handler fails without content and optional when it checks for content
first.

**Media types.** Set `request_media_type` and `response_media_type` when the endpoint does not use JSON, for example
binary vector tiles, newline-delimited JSON for bulk requests, or plain text for the cat APIs.

**Availability.** Take `since` from the first release that contains the endpoint, and `stability` from the release
notes or the documentation of the feature. The `@ServerlessScope` annotation of the REST handler says if the endpoint
exists in Serverless and if it is public. An endpoint behind a feature flag gets `visibility=feature_flag` and the
name of the flag.

**Privileges.** Derive `@cluster_privileges` and `@index_privileges` from the name of the transport action that the
handler calls and from the privileges that grant that action name. Do not copy them from a similar endpoint.

### Properties

**Names and aliases.** Take each property name from the `ParseField` of the parser or from the `builder.field` call of
`toXContent`. A `ParseField` with deprecated names gives `@aliases` on the property. An enum whose `fromString`
accepts a second spelling gives `@aliases` on the member.

**Required or optional.** A property is required in a request when the parser declares it as a required constructor
argument or when `validate()` rejects a request without it. A property is required in a response when `toXContent`
writes it without a condition. A field that `toXContent` writes inside an `if` is optional, even when the examples in
the documentation contain it.

**Server defaults.** Take `@server_default` from the initial value of the field, from the default argument of the
`paramAs` call, or from the default of the `Setting`. Write the value as Elasticsearch writes it on the wire, without
quotes.

**Numbers.** Match the Java type: `double` is `double`, `float` is `float`, `int` is `integer`, `long` is `long`.
Use `uint` or `ulong` only when the source treats the value as unsigned. Do not use `long` for a value that the source
holds in an `int` because the number can be large.

**Dates, durations and sizes.** A `TimeValue` that is parsed from a string is a `Duration`. A number of milliseconds
or nanoseconds is a `DurationValue` with the matching unit when it is an amount of time, and an `EpochTime` when it is
a point in time. Only the source tells the two apart, because the property names look the same. A `ByteSizeValue`
that is parsed from a string is a `ByteSize`.

**Human-readable fields.** `toXContent` writes some values two times: a raw field such as `took_in_millis` and a
readable field such as `took` that appears only with `?human`. Model the raw field as required and the readable field
as optional.

**Enums.** List the members that the Java enum or the parser accepts, in the spelling of the wire format. Add
`@non_exhaustive` when a plugin or a later version can add values, for example when the values come from a registry.
A string that accepts a fixed set of values and also free text stays a `string`.

**Letter case of enum values.** A parser that converts the value to upper case before the lookup accepts each letter
case. Use the spelling that Elasticsearch writes as the member, in most cases the lower-case one. Add a second spelling
with `@aliases` when the source or the documentation shows that users send it or that Elasticsearch returns it, for
example the upper-case name. An alias is one exact spelling, and some values come back in the spelling of the request:
settings are stored as text, so `ReQuEsT` in a request is `ReQuEsT` in the response. No member and no alias matches that
text. Do not add `@non_exhaustive` and do not keep a `string` because of the letter case alone. Code that reads the
specification, and each client made from it, must expect such a value for each enum, also for an exhaustive one, and
must compare the enum values of a response without regard to letter case. `docs/modeling-guide.md` has the same rule in
its Enum section.

**One value or a list.** A parser that accepts a single value where it declares an array gives a `T | T[]` union. A
parser that accepts an array only gives `T[]`. Do not add the single-value form because other properties have it.

**Shared aliases.** Use an alias of `specification/_types/common.ts` only when the source shows that the value is what
the alias names. `Id` is the ID of a document. For another identifier, use the alias of that kind, such as `NodeId` or
`TaskId`, or a `string`, and do not add to the older uses of `Id` for other identifiers. `Indices` is a multi-target
expression that accepts the constant `_all`. Use it only where the source resolves the value as such an expression, for
example with `IndexNameExpressionResolver`. For a list of names or patterns where `_all` has no special meaning, such as
the index privileges of the security APIs, use `IndexName[]`, or `IndexName | IndexName[]` in full when the parser also
accepts one string. The form on the wire is the same, but the clients give `Indices` a behavior of its own: the .NET
client writes `*` as `_all`. `Fields`, `Ids`, `Names` and the other plural aliases are unions of one value and an array,
so use them only where the parser accepts the one value.

**Null.** Add `| null` only when the parser accepts an explicit null with a meaning, such as a reset to the default,
or when `toXContent` writes a null value. An absent field is an optional property.

**Stringified values.** Use `Stringified<T>` only for a response field that Elasticsearch can write as a string, as
the cat APIs and some settings do. Check the `toXContent` call. Do not use it because an example in the documentation
has quotes around a number.

**Property availability.** A property that a later version added gets `@availability` with that version in `since`.
The version check in the serialization code of the class shows when the field was added.

### Shapes

**Containers.** Use `@variants container` when the parser accepts exactly one of several keys, each with its own
type. A named object registry, a parser that rejects a second key, or a set of mutually exclusive fields in the parser
shows this. A class with several optional properties that can be set together is not a container. Statistics and
settings objects have that shape.

**Internally tagged unions.** Use `@variants internal` when the parser reads a field such as `type` first and then
selects the class. Give that field a literal type in each member. When the parser falls back to one class if the
field is absent, name that member with `default=` in the `@variants` tag and make its tag optional.

**Shortcut properties.** Use `@shortcut_property` when the parser accepts a scalar in place of the object and assigns
the scalar to one property. Name the property that the parser assigns. When the scalar has a meaning of its own, for
example the name of a predefined configuration, model a union with `@codegen_names`.

**Unions without a tag.** When a value can have several types and nothing in the JSON tells them apart except the
type itself, use `@codegen_names` with one name for each member.

**Open sets of variants.** Add `@non_exhaustive` to a container or a tagged union when plugins can register more
variants. Aggregations, analyzers, processors and queries are examples.

**Single implementations.** When the source has an interface with one implementation today and the wire format
carries a type tag, model a tagged union with one member and `@non_exhaustive`. A second implementation is then not a
breaking change for the clients.

**Dynamic keys.** Use `Dictionary` when the keys of an object are data, such as index names or node identifiers. Use
`SingleKeyDictionary` when the parser rejects a second key. When an object has fixed properties next to keys that are
data, use the `AdditionalProperties` behavior. When exactly one key is data, as in the field name of a term query, use
`AdditionalProperty`.

**Read and write shapes.** When a response returns the object of a request with more fields, or with fields that are
optional in the request and always present in the response, model the response type with `OverloadOf`. Do not make
the properties of the request type optional to cover the two cases.

**User content.** Use `UserDefinedValue` only for JSON that Elasticsearch stores or passes through without a schema,
such as a document source or the parameters of a script. A structure that the parser reads has a class, even when
that class is large.

### Responses

**Body shape.** Walk through `toXContent` from the first call to the last. Each `startObject(name)` is a property with
a class, each `startArray(name)` is a list, and each object whose name comes from a variable is a dictionary.

**Shape that depends on the request.** Some endpoints return a different body for a parameter value, for example a
task identifier for `wait_for_completion=false`. The specification has one response for each endpoint, so make the
properties of the two shapes optional and say in the description which parameter selects them.

**Status codes.** A response with a body for a status other than 200, for example 404 with `found: false`, gets an
`exceptions` entry. Take the status from the `RestStatus` that the handler or the response returns.

**Typed keys.** Aggregations and suggesters in a response carry their type in the key (`type#name`) when the request
sets `typed_keys`. They are the only users of `@variants typed_keys_quirk`. Do not use it for a new union.

### Documentation

**Descriptions.** Describe what the property does and state the constraints that the parser enforces: the range of a
number, the maximum length of a list, the properties that cannot be used together. Do not describe a constraint that
the source does not enforce.

**Listed values.** When a description lists the values of a `string` property, check the source. If the list is
complete, replace the `string` with an enum and remove the list from the description.

**Links.** Use `@doc_id` and `@ext_doc_id` with an entry in `specification/_doc_ids/table.csv`. Check that the page
exists for the branch.
