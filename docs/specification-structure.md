# Specification structure

The [`/specification`](../specification) folders follows a set of rules to
keep the definition easy to access and contribute, while maintaining
the generated schema consistent and useful for language generators.

## Rules

### Shared types

Every type that should be shared among different files, must be placed
inside a folder named `_types`. This special folder is present in the
root of the [`/specification`](../specification) folder as well
as inside the namespaces when necessary.

You should decide if a type should go inside the top-level `_types`
folder or inside a namespace (e.g.: `indices/_types`) on a case by case basis.
A good rule of thumb is that if a type is widely used in the specification,
it should go in the top level `_types`, while if it's used only within
a namespace or a few times in other namespaces, it could go inside the
specific namespace `_types`.

Types defined inside the top level `_types` folder should be globally
unique specification-wide, while types defined inside namespaces in `*/_types`
should be globally unique within the namespace where they are defined.

Unless you are defining a request or response type, a type name cannot
end with `Request` or `Response`.

### Request and Response definitions

Request and Response definitions should be placed by strictly following
the rest-api-spec structure.
the `rest-api-spec` structure.
For example, the request and response definition for `indices.put_mapping`
should go in [`/specification/indices/put_mapping`](../specification/indices/put_mapping).
There are no requirements on the file name, but the type should be
called either `Request` or `Response`.

### APIs without a namespace

There are some APIs without namespace, `search` or `index` for example.
Those APIs should be placed inside the `_global` folder.
For example: [`/specification/_global/search`](../specification/_global/search).

### Specification helpers

The specification has a set of custom types used to define complex structures
or behaviors. Those types must be placed in [`/specification/_spec_utils`](../specification/_spec_utils).
