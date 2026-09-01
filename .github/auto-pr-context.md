# Auto PR context — elasticsearch-specification

This repository defines the Elasticsearch REST API types in TypeScript-like `.ts` files under `specification/`. These types are used by `elastic-client-generator-js` to generate language client libraries (JavaScript, Python, Go, etc.).

## File layout

- `specification/` — API type definitions, grouped by API namespace (e.g. `specification/indices/`, `specification/search/`)
- `compiler/` — the type compiler that validates and transforms the spec
- `docs/modeling-guide.md` — conventions for defining types (read this before making changes)
- `docs/style-guide.md` — naming and formatting conventions

## What kinds of fixes are expected

Issues labeled `auto-pr: kibana type check` contain TypeScript errors from Kibana's type check against the generated JS client. Errors are classified as SPEC errors — meaning the type information in this repo is wrong or missing.

Common fix patterns:
- **Wrong type** (e.g. `Duration` not assignable to `string`): change the field type to match what Kibana expects
- **Missing field**: add the field with the appropriate type following existing patterns in that file
- **Wrong enum value**: add or correct the value in the relevant enum or string union
- **Type too narrow**: widen the type to include additional valid values

## Search hints

Type names in tsc errors (e.g. `IndexSettings`, `Duration`, `DataStreamLifecycle`) correspond to types defined in `specification/`. Search for the type name to find the relevant file.

Only modify files under `specification/`. Do not modify generated files or compiler code.
