# Style Guide

This document contains all conventions to follow when implementing or updating an API definition.

## Code style

Following you can find the rules enforced inside [`/specification`](../specification):

```json
{
  "trailingComma": "none",
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "bracketSpacing": true,
  "endOfLine": "lf"
}
```

You can automatically apply them by running `make spec-format-fix`.
Those rules are enforced in CI, if you don't follow them, the build will fail.

## Merge definitions

When possible, it's better to merge multiple definitions in a single file.
For instance, if a response method uses multiple classes, and those classes
are mainly used in that response, those definitions will live in the same
file as the response.

When defining request and response definitions, place both in the same file,
where the filename is a meaningful name. For example, if you are implementing
the `indices.create` API, the file name will be `CreateIndex.ts` and will
contains both the request and response classes.

As a rule of thumb, if you have a collection of small definitions (smaller than 15 properties)
it's preferable to put them in a single file, while big definitions (search, for example),
can live in single files, as those definitions are big and more complicated.
You can also group definitions if they are related and consumed by a single type.

## Reuse definitions

To improved the developer experience, the specification make an extensive use
of aliases and custom types, to describe what kind of value needs to be passed
to an API. You can find some of this aliases in the top level [`_types`](../specification/_types) folder.

Where applicable, try to reuse those definitions, or if you see a pattern that
has not been defined yet, feel free to add a new alias or abstraction.

You can find a not comprehensive list of the most commonly used abstractions
in the [modeling guide](./modeling-guide.md), while in [behaviors](./behaviors.md)
you can find the list of special interfaces used for describing APIs that can't be
represented in the specification.

## Where to store files

In [`/specification`](../specification), every folder represents the namespace,
while every subfolder represent the API name.  For top level APIs, you must use
the `_global` namespace.

## Using unions

Using unions directly in definitions is considered code smell, it's recommended to create
a type alias that describes the union. These aliases do not need to live in common files
unless those are truly commonly used throughout the specification.

```ts
// nay
class Foo {
  id: string | number
}

// yay
class Foo {
  id: Id
}
type Id = string | number
```

## Arrays

It's fine to use the short TypeScript array notation, unless the type
becomes more complex (eg: array of unions), in such case prefer the full definition.

```ts
class Foo {
  bar: string[] // yay
  bar: (string | number)[] // nay
  bar: Array<string | number> // yay
}
```
