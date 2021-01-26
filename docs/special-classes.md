# Special classes

Some APIs needs to be handled differenlty based on the output language, while others share many common parameters.
This document contains the list of this special classes and where those should be used.

## CatRequestBase

This class must be used when implementing any Cat request definition.

For example:
```ts
@rest_spec_name("cat.aliases")
class CatAliasesRequest extends CatRequestBase {
  path_parts?: {
    name?: Names;
  }
  query_parameters?: {
    expand_wildcards?: ExpandWildcards;
  }
  body?: {
  }
}
```

## CatResponseBase

This class must be used when implementing any Cat response definition.

For example:
```ts
class CatAliasesResponse extends CatResponseBase<CatAliasesRecord> {}
```

## HeadResponseBase

This class must be used when implementing any API response definition where
the request used the `HEAD` method.

For example:
```ts
class DocumentExistsResponse extends HeadResponseBase {}
```