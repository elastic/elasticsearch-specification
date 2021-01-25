# How to add a new API

It might happen that a new API in Elasticsearch is not yet defined
in this repository, or we do have an endpoint definition in [`/specification/specs/_json_spec`](../specification/specs/_json_spec)
but we don't have a type definition for it.
In this document you will see how to add a new endpopint and how to add a new endpoint definition.

**NOTE:** Currenlty we are following the work on the `7.x` release line.

## How to add a new endpoint

Add a new endpoint is straightforward, you only need to copy-paste the json rest-api-spec defintion
from the Elasticsearch repository inside [`/specification/specs/_json_spec`](../specification/specs/_json_spec)
and you are good to go.

You can find the rest-api-spec definitions [here](https://github.com/elastic/elasticsearch/tree/7.x/rest-api-spec/src/main/resources/rest-api-spec/api)
or [here](https://github.com/elastic/elasticsearch/tree/7.x/x-pack/plugin/src/test/resources/rest-api-spec/api).

## How to add the definition of an endpoint

Once you have added a new endpoint definition, the next step is to add its type definition.
First of all, you should find the most approariate place inside [`/specification/specs`](../specification/specs)
where to put the new definition. The content of [`/specification/specs`](../specification/specs)
tryied to mimic the Elasticsearch online documentation, so you can use it as inspiration.
For example, the index document defintion can be found in [`/specification/specs/document/single/index`](../specification/specs/document/single/index).

Once you have found the best place for the new definition, you should create a new file for it.
The filename should be the same of the type definition you are writing, for example:

```ts
// IndexRequest.ts
class IndexRequest {}
```

```ts
// IndexResponse.ts
class IndexResponse {}
```

Try to use less files as possible, for example there is no need to create a custom file for an enum,
you can define it in the same file where it's used, unless is a commonly used type.

### Add the endpoint request definition

Request definitions are slighly different from other definitions.
A request definition should contains three top level keys:

- `path_parts`: the path parameters (eg: `indices`, `id`...)
- `query_parameters`: the query parameters (eg: `timeout`, `pipeline`...)
- `body`: the body parameters (eg: `query` or user defined entities)

Finally there should be a decorator to inform the compiler that this is a endpoint request definition.
The value of the decorator should be the endpoint name as it's defined in the json spec (eg: `search`, `indices.create`...).
Following you can find a template valid for any request definition.

```ts
@rest_spec_name("endpoint.name")
class EndpointRequest extends RequestBase {
  path_parts?: {

  };
  query_parameters?: {

  };
  body?: {

  };
}
```

In some cases, the request could take one or more generics, in such case the definition will be:
```ts
@rest_spec_name("endpoint.name")
class EndpointRequest<Generic> extends RequestBase {
  path_parts?: {

  };
  query_parameters?: {

  };
  body?: {

  };
}
```
And the generic will be used somewhere inside the definition.
There are cases where the generic might be the entire body, see [`IndexRequest`](../specification/specs/document/single/index/IndexRequest.ts).

### Add the endpoint response definition

Responses definitions should always be defined **after** a request definition,
otherwise the compiler will not pick them up. It is required that the response
definition has the same name as the request definition aside from the `Response` suffix.

For example the response definition for `ClusterHealthRequest` will be named `ClusterHealthResponse`.
Following you can find a template valid for any response definition.

```ts
class EndpointResponse extends ResponseBase {

}
```

As you can see, for responses there are no custom top level keys, as the
response definition represents the body of a succesful response.

In some cases, the response could take one or more generics, in such case the definition will be:
```ts
class EndpointResponse<Generic> extends ResponseBase {

}
```
And the generic will be used somewhere inside the definition.