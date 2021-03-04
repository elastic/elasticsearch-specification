# Behaviors

Some APIs needs to be handled differently based on the output language, while others share many common parameters.
This document contains the list of this special interfaces and where those should be used.
Behaviors should be used via `implements` in the specification.

You can find all the special classes and aliases in in the [modeling guide](./modeling-guide.md).

## AdditionalProperties

In some places in the specification an object consists of the union of a set of known properties
and a set of runtime injected properties. Meaning that object should theoretically extend Dictionary but expose
a set of known keys and possibly. The object might already be part of an object graph and have a parent class.
This puts it into a bind that needs a client specific solution.
We therefore document the requirement to behave like a dictionary for unknown properties with this interface.

```ts
class IpRangeBucket implements AdditionalProperties<AggregateName, Aggregate> {}
```

## ArrayResponseBase

A response formatted as an array of records.
Some languages can't represent this easily and need to wrap the
array inside an object.

```ts
class CatResponseBase 
 implements ArrayResponseBase<CatAliasesRecord> {}
class CatAliasesResponse
  extends CatResponseBase {}
```

Hint this also showcases that behaviors can be inherited

## EmptyResponseBase

HEAD APIs can have a different behavior based on the language,
the response body is always empty to it's up to language generators
to define how those should be represented.

```ts
class DocumentExistsResponse
  extends ResponseBase
  implements EmptyResponseBase {}
```

## CommonQueryParameters

Implements a set of common query parameters all API's support.
Since these can break the request structure these are listed explicitly as a behavior.
Its up to individual clients to define support although `error_trace` and `pretty` are
recommended as a minimum.

```ts
class RequestBase implements CommonQueryParameters {}
```

## CommonCatQueryParameters

Implements a set of common query parameters all Cat API's support.
Since these can break the request structure these are listed explicitly as a behavior.

```ts
class CatRequestBase extends RequestBase implements CommonCatQueryParameters {}
```
