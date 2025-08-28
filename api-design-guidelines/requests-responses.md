# API guidelines - Requests and reponses

## Denote endpoints intended for only human usage

Some API functionality is designed for machines to consume while other functionality is intended to be used directly by humans. The former typically returns structured data, whereas the latter returns human readable information.

Human and machine interfaces are also sometimes mixed together within the same endpoint.

- [Where a parameter exists to switch the output from structured to human readable](https://github.com/elastic/elasticsearch-net/issues/5953)
- Where syntactic sugar is added as a simpler way to make a request

In these cases, **the API creator should always clearly denote which pieces of functionality are intended for direct human usage**. This allows tool authors to choose how or whether to support this functionality.

## Use HTTP methods correctly

Methods such as GET and POST must be used consistently in adherance to HTTP standards. Failing to do this can result in third-party network hardware and software being unable to correctly route or handle requests and responses.

For example, if your request has an optional or required body then do not use GET as a method. From RFC 9110 Section 9.3.1:

> Although request message framing is independent of the method used, content received in a GET request has no generally defined semantics, cannot alter the meaning or target of the request, and might lead some implementations to reject the request and close the connection because of its potential as a request smuggling attack.

Use instead an alternative method which does support a request body such as POST.

[RFC 9110](https://datatracker.ietf.org/doc/html/rfc9110) also defines a number of terms relating to the expected behavior of HTTP methods:

- [Safe](https://datatracker.ietf.org/doc/html/rfc9110#section-9.2.1): a method is **safe** if it is read-only, and makes no state change on the server.
- [Idempotent](https://datatracker.ietf.org/doc/html/rfc9110#section-9.2.2): a method is **idempotent** if the effect of a single request is identical to the effect of multiple identical requests.
- [Cacheable](https://datatracker.ietf.org/doc/html/rfc9110#section-9.2.3): a method is **cacheable** if its response may be stored by browsers/proxies/clients for future reuse.

The table shows which properties apply to which HTTP methods:

| Method    | Safe | Idempotent | Cacheable | Request body allowed | Response body allowed |
|-----------|------|------------|-----------|----------------------|-----------------------|
| `GET`     | Y    | Y          | Y         | N                    | Y                     |
| `HEAD`    | Y    | Y          | Y         | N                    | N                     |
| `POST`    | N    | N          | Y/N¹      | Y                    | Y                     |
| `PUT`     | N    | Y          | N         | Y                    | Y                     |
| `DELETE`  | N    | Y          | N         | N                    | Y                     |
| `PATCH`   | N    | Y/N²       | N         | Y                    | Y                     |
| `OPTIONS` | Y    | Y          | N         | N                    | N³                    |

- ¹ A POST response is not HTTP cacheable by peers unless explicit freshness information is included. The server-side implementation may still make use of caching.
- ² PATCH is not idemptotent as defined in RFC 2616, but a note on idempotent use of PATCH can be found in RFC 5789
- ³ RFC 7231 does not strictly disallow a response body for OPTIONS, but does not define its purpose either. A Content-Length header must be included in the response, however.

## Use appropriate HTTP methods and status codes

When designing an endpoint, consider which style of interaction is most appropriate and adhere to convention accordingly. Common endpoint styles include:

- Representational State Transfer (REST)
- Blocking Remote Procedure Call (Blocking RPC)
- Asynchronous Remote Procedure Call (Async RPC)

### Representational State Transfer (REST)

Under REST each endpoint is treated as a remote resource or collection of resources and HTTP methods are employed similarly to CRUD operations.

Many REST GET endpoints support fetching models using a single identifier, a comma-separated list of identifiers, and sometimes identififer patterns including wildcards. In order to avoid running into problems with maximum response sizes, consider adding support for fetching results over multiple requests using pagination (`size`/`from`) or a cursor (`scroll`, `search_after`).

| Behavior                    | Method | Status Codes                                                  |
|-----------------------------|--------|---------------------------------------------------------------|
| Fetch one or more resources | GET    | 200 OK, 404 Not Found                                         |
| Check resource exists       | HEAD   | 200 OK, 404 Not Found                                         |
| Create resource             | POST   | 201 Created, 400 Bad Request, 409 Conflict (already exists)   |
| Create or replace resource  | PUT    | 200 OK (on replace), 201 Created (on create), 400 Bad Request |
| Delete resource             | DELETE | 200 OK, 404 Not Found                                         |

### Blocking Remote Procedure Call (Blocking RPC)

Blocking RPC is a style which treats the endpoint as a foreground data processor. Inputs are provided and proceeded and outputs are returned directly in the HTTP response. While the response may begin streaming back bto the client before processing has been completed it is expected that completion have occurred by the time the response hnas been fully transmitted.

Given the wide variety of functionality that an RPC endpoint may undertake, there is no clear way to map status codes meaningfully. Therefore, only a small selection of status codes should be used with other detailed summary information (for success or failure) included within the error response body.

| Behavior               | Method | Status Codes            |
|------------------------|--------|-------------------------|
| Execute a blocking RPC | `POST` | 200 OK, 400 Bad Request |

### Async Remote Procedure Call (Async RPC)

Async RPC is a style which treatts the endpoint as a background data processor. Inputs are provided and processed is passed to a background task with only the acknowledgement of acceptance or rejection returned in the HTTP response. Following up on the background task and obtaining results from that task will require further exchanges between client and server. The exact nature of these exchanges is not defined here.

Given the wide variety of functionality that an RPC endpoint may potentially undertake there is no clear way to map status codes meaningfully. Therefore, only a small selection of status codes should be used, with other detailed summary information for success or failure included within the response body.

**Note that unlike blocking RPC endpoints async RPC endpoints should return 202 Accepted to indicate that the work has been successfully accepted.**

| Behavior           | Method | Status Codes                                 |
|--------------------|--------|----------------------------------------------|
| Start an async RPC | `POST` | 202 Accepted, 400 Bad Request, 404 Not Found |

## Avoid defining the same request parameter in path, query string, and body

There should be only a single canonical way to pass each request parameter. Allowing the same parameter to be supplied in the path, the query string, and the body adds complexity and ambiguity to the API definition wherein custom rules must be defined for resolving conflicts.

It's best to use the body for large or high cardinality variable-length request components, such as lists of fields, query definitions, etc. Servers often place a limit on the URI length, which can prevent users from passing this data through a path or query string. Some examples of values that should be sent in the request bodies are given below:

- Large values (Scroll ID, Point in Time ID)
- Large objects (Query DSL, aggregations, machine learning models)
- High cardinality variable length values (list of fields, indices, shards, document IDs)

## Consider how client functions would wrap the API endpoint

It is common within client-side architecture to provide a one-to-one mapping between API endpoint and client language function. This simplifies implementation and documentation, provides good developer experience, and makes tracking of endpoint usage straightforward.

The semantics of HTTP and language functions typically differ in a number of ways, however, with HTTP generally allowing a broader range of functionality. The available semantics are constrained further when portability across multiple languages is concerned. It is therefore useful to consider these differences during API design in order to create a programmatic interface that is sympathetic to available client-side functionality.

The generic form of a language client function is:

`name(arguments) -> success response | error response`

The `name` of the function is typically restricted to alphanumeric characters and underscores. Naming is discussed in detail elsewhere in the guidelines.

Functions also only allow a single return / response type which is the "nominal successful response". Error responses can vary based on status code but at a minimum should match the following structure:

```yaml
{
  "type": "error type",
  "reason": "<human readable message>",
  "stack_trace": "<optional stack trace if error_trace=true is used>",
  ...
}
```

### Single vs. Multiple endpoints

While dynamically-typed languages can support typing variation and union types with relative ease, doing so is much more complex for statically-typed languages, such as Java, and often leads to a poor developer experience.

On this basis, if an endpoint can return multiple 2xx (success) responses, then all corresponding payloads **must be structurally compatible**. In other words, it should be possible to comfortably store the body of any possible 2xx response within the same data structure. If this is not feasible, then multiple endpoints should be considered instead.

Consequently, if it is desired that an operation can be carried out both synchronously and asynchronously, then each of these methods should be implemented as separate endpoints, since function signatures for these two approaches will necessarily be quite different.
