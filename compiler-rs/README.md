# Rust API schema manipulation utilities

This directory contains a set of Rust crates to manipulate and transform the API specification's `schema.json` file. The primary feature is conversion of `schema.json` to an OpenAPI schema for Elasticsearch Serverless.

## Workspace members

* [`clients_schema`](./clients_schema/): a Rust implementation of the [Elasticsearch specification schema](https://github.com/elastic/elasticsearch-specification/blob/main/compiler/src/model/metamodel.ts) metamodel.
* [`clients_schema_to_openapi`](./clients_schema_to_openapi): conversion of the `schema.json` format to OpenAPI. Supersedes [elasticsearch-openapi](https://github.com/elastic/elasticsearch-openapi).
* [`compiler-wasm-lib`](./schema-wasm-lib): a WebAssembly library that exposes features of this workspace, to allow its use from the larger [schema toolchain](../compiler). 
* [`openapi_to_clients_schema`](./openapi_to_clients_schema): experimental, incomplete, work in progress: translate an OpenAPI specification to an Elasticsearch schema that can be used as input for code generation.

## Building

The output of this directory is the `compiler-wasm-lib` WebAssembly library. It must be built and committed in this repository every time the Rust code is changed. Use `make compiler-wasm-lib` to build it.
