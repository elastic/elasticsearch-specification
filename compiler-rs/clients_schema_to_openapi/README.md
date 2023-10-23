# Schema.json to OpenAPI converter

This project provides a utility to convert the [schema.json](../../output/schema) file representing the Elasticsearch API specification to OpenAPI version 3.0.3.

The conversion pipeline is the following:

```mermaid
flowchart LR
    ts[TypeScript API]
    schema[schema.json]
    schema-no-generics[schema-no-generics.json]
    openapi[openapi.json]
    
    ts --> schema
    schema --> schema-no-generics
    schema-no-generics --> openapi
    schema-no-generics --> serverless-openapi.json
```

This branch is the work for [PR #2047](https://github.com/elastic/elasticsearch-specification/pull/2047) where reviews and comments should be made.

The OpenAPI specification generated from the current `schema.json` can be found in the [output/openapi](../../output/openapi) directory.

The generated OpenAPI schemas validate successfully using the rather strict [Spectral OpenAPI linter](https://github.com/stoplightio/spectral), except for endpoint (this is an ES API issue). You can run the linter using:
* `npm run validate` for the Stack/Stateful OpenAPI spec
* `npm run validate-serverless` for the Serverless OpenAPI spec
