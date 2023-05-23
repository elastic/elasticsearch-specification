# How to add a new API

It might happen that a new API in Elasticsearch is not yet defined
in this repository, or we do have an endpoint definition in [`/specification/_json_spec`](../specification/_json_spec)
but we don't have a type definition for it.
In this document you will see how to add a new endpopint and how to add a new endpoint definition.

## How to add a new endpoint

Add a new endpoint is straightforward, you only need to copy-paste the json rest-api-spec defintion
from the Elasticsearch repository inside [`/specification/_json_spec`](../specification/_json_spec)
and you are good to go.

You can find the rest-api-spec definitions [here](https://github.com/elastic/elasticsearch/tree/7.x/rest-api-spec/src/main/resources/rest-api-spec/api)
or [here](https://github.com/elastic/elasticsearch/tree/7.x/x-pack/plugin/src/test/resources/rest-api-spec/api).

## How to add the definition of an endpoint

Once you have added a new endpoint definition, the next step is to add its type definition.
First of all, you should find the most approariate place inside [`/specification`](../specification)
where to put the new definition. The content of [`/specification`](../specification)
tryied to mimic the Elasticsearch online documentation, so you can use it as inspiration.
For example, the index document defintion can be found in [`/specification/__global/index`](../specification/__global/index).

Once you have found the best place for the new definition, you should create a new file for it.
The filename should be the same of the type definition you are writing, for example:

```ts
// IndexRequest.ts
interface Request {}
```

```ts
// IndexResponse.ts
class Response {}
```

Try to use less files as possible, for example there is no need to create a custom file for an enum,
you can define it in the same file where it's used, unless is a commonly used type.

### Add the endpoint request definition

Request definitions are slighly different from other definitions.
It is required that the request definition is named `Request`.
A request definition is an interface and should contains three top level keys:

- `path_parts`: the path parameters (eg: `indices`, `id`...)
- `query_parameters`: the query parameters (eg: `timeout`, `pipeline`...)
- `body`: the body parameters (eg: `query` or user defined entities)

Furthermore, every request definition **must** contain three JS Doc tags:

- `@rest_spec_name`: the API name (eg: `search`, `indices.create`...).
- `@availability` Which flavor of Elasticsearch is this API available for? (eg `stack` or `serverless`)
  - `stability`: the API stability, one of `experimental`, `beta`, `stable`
  - `visibility`: the API stability, one of `public` or `private`.
  - `since`: the version of Elasticsearch when the API has been introduced (eg: `7.7.0`).
    This field is only available for `stack`.
  - `feature_flag`: the feature flag value, only valid if the `visibility` is set to `feature_flag`.
    This field is only available for `stack`.

Following you can find a template valid for any request definition.

```ts
 /*
 * @rest_spec_name endpoint.name
 * @availability stack since=1.2.3 stability=stable|beta|experimental
 */
interface Request extends RequestBase {
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
  path_parts: {

  }
  query_parameters: {

  }
  body: {

  }
}
```
And the generic will be used somewhere inside the definition.
There are cases where the generic might be the entire body, see [`IndexRequest`](../specification/__global/index/IndexRequest.ts).

### Add the endpoint response definition

Responses definitions should always be defined **after** a request definition,
otherwise the compiler will not pick them up. It is required that the response
definition is named `Response`.

Following you can find a template valid for any response definition.

```ts
class Response {
  body: {

  }
}
```

As you can see, for responses there are no custom top level keys, as the
response definition represents the body of a succesful response.

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

#### Exceptions

Normally, every API returns the exact same structure in case of error, which is defined
in [`ErrorResponseBase`](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_types/Base.ts#L66-L75).
In some edge cases, the response structure may change. To document this situations, you should use the `exceptions` key.

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
