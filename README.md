# elastic client generator

This repository contains the Elasticsearch request/response definitions in TypeScript,
you can find them inside [`/specification/specs`](specification/specs).
The [`specification`](specification) folder contains a TypeScript program that compiles the entire definition
in a JSON representation that can be used for generating language clients.

This JSON representation is formally defined by [a set of TypeScript definitions (a meta-model)](specification/src/metamodel.ts) that also explains the various properties and their values.

## How to generate the JSON representation

```
# clone the project
$ git clone https://github.com/elastic/elastic-client-generator.git

# install the dependencies
$ npm install --prefix specification

# generate the JSON representation
$ npm run generate-schema --prefix specification

# the generated output can be found in ./output/schema/schema.json
$ cat output/schema/schema.json
```

### Structure of the JSON representation

The JSON representation is [formally defined as TypeScript definitions](specification/src/metamodel.ts). Refer to them for the full details. It is an object with two top level keys:

```jsonc
{
  "types": [...],
  "endpoints": [...]
}
```

The first one, `types`, contains all the type definitions from the specification, such as
`IndexRequest` or `MainError`, while the second one, `endpoints`, contains every
endpoint of Elasticsearch and the respective type mapping. For example:

```json
{
  "types": [{
    "kind": "request",
    "name": {
      "namespace": "document.single.index",
      "name": "IndexRequest"
    },
    "description": "The document",
    "annotations": {
      "type_stability": "stable"
    },
    "generics": [
      "TDocument"
    ],
    "inherits": [
      {
        "type": {
          "namespace": "common_abstractions.request",
          "name": "RequestBase"
        }
      }
    ],
    "path": [...],
    "query": [...],
    "body": {...}
  }, {
    "kind": "interface",
    "name": {
      "namespace": "document.single.index",
      "name": "IndexResponse"
    },
    "inherits": [
      {
        "type": {
          "namespace": "document.single",
          "name": "WriteResponseBase"
        }
      }
    ],
    "properties": []
  }],
  "endpoints": [{
    "name": "index",
    "description": "Creates or updates a document in an index.",
    "docUrl": "https://www.elastic.co/guide/en/elasticsearch/reference/master/docs-index_.html",
    "stability": "stable",
    "request": {
      "namespace": "document.single.index",
      "name": "IndexRequest"
    },
    "requestBodyRequired": true,
    "response": {
      "namespace": "document.single.index",
      "name": "IndexResponse"
    },
    "urls": [...]
  }]
}
```

The example above represents the [index](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-index_.html)
request, inside the `endpoints` array you can find the API name and the type mappings under `request.name`
and `response.name`. The respective type definitons can be found inside the `types` array.

In some cases an endpoint might be defined, but there is no a type definition yet, in such case
the `request` and `response` value will be `null`.

## How to validate the specification

The specification is validated daily by the [client-flight-recorder](https://github.com/elastic/clients-flight-recorder) project.
The validation result can be found [here](https://github.com/elastic/clients-flight-recorder/blob/dev/recordings/types-validation/types-validation.md).

If you need to fix the specification and then validate the result again, you need to
perform the following commands:

```sh
git clone https://github.com/elastic/elastic-client-generator.git
git clone https://github.com/elastic/clients-flight-recorder.git

cd elastic-client-generator
./run-validations
```

The last command above will boot an Elasticsearch instance and start the fligh recorder
recording process, once that is finished, it will not be executed
again unless you run again the command like this: `PULL_LATEST=true ./run-validations`.

You can validate a specific API with the `--api` option, same goes for `--request` and `--response`.
For example, the following command validates the index request api:

```js
./run-validations --api index --request
```
The following command validates the index response api:

```js
./run-validations --api index --response
```
The following command validates the index request and response api:

```js
./run-validations --api index --request --response
```

Once you see the errors, you can fix the original definition in `/specification/specs`
and then run the command again until the types validator does not trigger any new error.
Once an api is stable, add the following comment above the api definition:
```js
/**
 * @type_stability stable
 */
```
For example:
```ts
/**
 * @type_stability stable
 */
class IndexRequest<TDocument> extends RequestBase { ... }
```

And finally open a pull request with your changes.

### Where do I see the test?

Everytime you run the `run-validations` script, a series of test will be generated and dumped on disk.
You can find them in `clients-flight-recorder/scripts/types-validator/workbench`.
The content of this folder is a series of recorded responses from Elasticsearch wrapped inside an helper
that verifies if the type definiton is correct.

## Custom types

The goal of the specification is to be used by different languages, from dynamically typed to statically typed.
To achieve this goal the specification contains a series of custom types that do not have a meaning
for the target language, but they should be translated to the most approriate construct.

The specification is written in [TypeScript](https://www.typescriptlang.org/), you can find all
the basic types [here](https://www.typescriptlang.org/docs/handbook/basic-types.html).

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
friendly specification, we do offer a set of aliases based on which string we do expect, for exmaple:

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
interface Date {}
```

## FAQ

### A specific property is not always present, how do I define it?

When you define a property the syntax is `propertyName: propertyType`.
By default a property is required to exist. If you know that a property will not
always be there, you can add a question mark just before the column:

```ts
propertyRequired: string
propertyOptional?: string
```

### A definition is missing, how do I add it?

All the definitons are in the [`specifications/specs`](specifications/specs) folder, you should explore its content and find the
most approriate place where to add the new defintion. You can either create a new file or update an existing one.
If possible, try to reuse existing type definitions (eg `Indices` instead of `string`).

### A definition is not correct, how do I fix it?

All the definitons are inside `specifications/specs` folder, search the bad defintion and update it,
you can find above how to run the validation of the spec.

### An endpoint is missing, how do I add it?

All the endpoint definitons are inside `specifications/specs/json` folder, which contains a series of
JSON files taken directly from the Elasticsearch rest-api-spec.
You should copy from there the missing endpoint and add it here.

### An endpoint definition is not correct, how do I fix it?

All the endpoint definitons are inside `specifications/specs/json` folder, which contains a series of
JSON files taken directly from the Elasticsearch rest-api-spec.
You should copy from there the updated endpoint defintion and change it here.

### The validation in broken on GitHub but works on my machine!

Very likely the recordings on your machine are stale, you can regenerate them
by executing the following command (it will take a while).

```sh
PULL_LATEST=true ./run-validations
```

### Which editor should I use?

Any editor is fine, but to have a better development experience it should be configured
to work with TypeScript. If you don't have it, [Visual Studio Code](https://code.visualstudio.com/)
comes with TypeScript support out of the box.

### Is there a complete example of the process?

Yes, take a look [here](./validation-example.md).

## BirdsEye overview

The work of several repositories come together in this repository.
This diagram aims to sketch an overview of how different pieces connect

![overview.png](overview.png)
