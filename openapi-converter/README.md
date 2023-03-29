# Elasticsearch Rust client generator and other code-generation utilities written in Rust.

Workspace members:

* [`clients_schema`](./clients_schema/): a Rust implementation of the [Elasticsearch specification schema](https://github.com/elastic/elasticsearch-specification/blob/main/compiler/src/model/metamodel.ts) metamodel.
* [`openapi_to_clients_schema`](./openapi_to_clients_schema): translate an OpenAPI specification to an Elasticsearch 
  schema that can be used as input for code generation.
