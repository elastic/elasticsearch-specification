# How to add a new API

It might happen that a new API in Elasticsearch is not yet defined
in this repository.
This document explains how to add a new endpoint and how to add a new endpoint definition.

> [!TIP]
> To learn more about how to write docs specifically for our [API references](https://www.elastic.co/docs/api/), refer to the [Contribute to Elastic API docs](https://www.elastic.co/docs/extend/contribute/api-docs/).

## rest-api-spec

Note that you currently need to define endpoints twice:

 1. [elasticsearch/rest-api-spec](https://github.com/elastic/elasticsearch/tree/main/rest-api-spec/src/main/resources/rest-api-spec/api)
 2. elasticsearch-specification/specification (Elasticsearch specification as defined in this repository)

Now that the rest-api-spec endpoints are a strict subset of the Elasticsearch
specification endpoints, we are working to remove this limitation.

## How to add the definition of an endpoint

Once you have added a new endpoint definition, the next step is to add its type definition.
First, you should find the most appropriate place inside [`/specification`](../specification)
where to put the new definition. The content of [`/specification`](../specification)
tries to mimic the Elasticsearch online documentation, so you can use that as inspiration.
For example, the index document definition can be found in [`/specification/_global/index`](../specification/_global/index).

Once you have found the best place for the new definition, you should create a new file for it.
The filename should be the same as the type definition you are writing, for example:

```ts
// IndexRequest.ts
interface Request {}
```

```ts
// IndexResponse.ts
class Response {}
```

The request and response files should only contain the main type definition: everything else, from subtypes to enums, should
be placed in a separate file, usually called types.ts, at the same level in the hierarchy, for example:

[`/specification/_global/bulk/types.ts`](../specification/_global/bulk/types.ts)


or, if there are too many types, they can be organized in separate files in a `_types` folder:

[`/specification/_global/search/_types`](../specification/_global/search/_types)

In general, try to use the fewest files possible, and check if a new type already exists before introducing it.

### Add the endpoint request definition

Request definitions are slightly different from other definitions.
It is required that the request definition is named `Request`.
A request definition is an interface and should contain these top level keys:

- `urls`: the URL paths templates and allowed HTTP methods
- `path_parts`: the path parameters (eg: `indices`, `id`...)
- `query_parameters`: the query parameters (eg: `timeout`, `pipeline`...)
- `body`: the body parameters (eg: `query` or user defined entities)

Furthermore, every request definition **must** contain these JS Doc tags:

- `@rest_spec_name`: the API name (eg: `search`, `indices.create`...).
- `@availability` Which flavor of Elasticsearch is this API available for? (eg `stack` or `serverless`)
  - `stability`: the API stability, one of `experimental`, `beta`, `stable`
  - `visibility`: the API stability, one of `public` or `private`.
  - `since`: the version of Elasticsearch when the API has been introduced (eg: `7.7.0`).
    This field is only available for `stack`. If the API is introduced in multiple major versions (eg: `8.19.0` and `9.1.0`), use the appropriate value in each branch.
  - `feature_flag`: the feature flag value, only valid if the `visibility` is set to `feature_flag`.
    This field is only available for `stack`.

Following, you can find a template valid for any request definition.

```ts
 /*
 * @rest_spec_name endpoint.name
 * @availability stack since=1.2.3 stability=stable|beta|experimental
 */
interface Request extends RequestBase {
  urls: [
    {
      path: "/path/with/{parts}"
      methods: ["POST"]
    }
  ]
  path_parts: {

  }
  query_parameters: {

  }
  body: {

  }
}
```

In some cases, the request could take one or more generics, in such case the definition will be:
```ts
 /*
 * @rest_spec_name endpoint.name
 * @availability stack since=1.2.3 stability=stable|beta|experimental
 */
interface Request<Generic> extends RequestBase {
  urls: [
    {
      path: "/path/with/{parts}"
      methods: ["POST"]
    }
  ]
  path_parts: {

  }
  query_parameters: {

  }
  body: {

  }
}
```
And the generic will be used somewhere inside the definition.
There are cases where the generic might be the entire body, see [`IndexRequest`](../specification/_global/index/IndexRequest.ts).

### Add the endpoint response definition

Response definitions should always be defined **after** a request definition,
otherwise the compiler will not pick them up. It is required that the response
definition is named `Response`.

Following, you can find a template valid for any response definition.

```ts
class Response {
  body: {

  }
}
```

As you can see, for responses there are no custom top level keys, as the
response definition represents the body of a successful response.

#### Generics

In some cases, the response could take one or more generics, in such case the definition will be:

```ts
class Response<Generic> {
  body: {
    key: Generic
  }
}
```

And the generic will be used somewhere inside the definition.

#### Path/Query parameters csv

In case the server accepts either a string or comma separated values for path or query parameters, they can be mapped as:
```ts
path_parts: {
    param_name?: string | string[]
}
query_parameters: {
    param_name?: string | string[]
}
```
This is just an example, it's better to create an alias and use that instead of the unnamed union. Even better, the right alias might exist already, so always check [common.ts](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/common.ts) first.  

#### Exceptions

Normally, every API returns the exact same structure in case of error, which is defined
in [`ErrorResponseBase`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/Base.ts#L66-L75).
In some edge cases, the response structure may change. To document these cases, you should use the `exceptions` key.

```ts
class Response {
  body: SuccessResponseBodyType
  exceptions: [
    {
      /**
       * A brief description of the exception.
       */
      statusCodes: [404]
      body: NotFoundException
    }
  ]
}
```

### Add endpoint request and response examples

Add an `examples` folder and `request` and `xxx_response` subfolders (where `xxx` is the relevant response code). The file names within these folders should be unique (for example,`DownsampleRequestExample1.yaml` not `RequestExample1.yaml`).

These examples are for use in the API documentation and must adhere to the [OpenAPI 3.0 Example object specification](https://spec.openapis.org/oas/v3.0.3#example-object). They must have a `value` field that contains the request or response body.
If there are multiple examples for the endpoint, they must each have a brief `summary` field, which is used as the label for the example. You can also optionally provide an explanation in a `description` field.
In order to generate curl and console examples automatically, the request examples must also contain a `method_request`.

For example:

```yaml
summary: Sequence query
method_request: GET /my-data-stream/_eql/search
# type: request
description: >
  Run `GET /my-data-stream/_eql/search` to search for a sequence of events.
  The sequence starts with an event with an `event.category` of `file`, a `file.name` of `cmd.exe`, and a `process.pid` other than `2013`.
  It is followed by an event with an `event.category` of `process` and a `process.executable` that contains the substring `regsvr32`.
  These events must also share the same `process.pid` value.
value: |-
  {
    "query": """
      sequence by process.pid
        [ file where file.name == "cmd.exe" and process.pid != 2013 ]
        [ process where stringContains(process.executable, "regsvr32") ]
    """
  }
```

NOTE: A good example covers a very common use case or demonstrates a more complex but critical use case.
It involves realistic data sets (rather than generic "hello world" values).
If it requires detailed setup or explanations, however, it is more appropriate for coverage in longer-form narrative documentation.
