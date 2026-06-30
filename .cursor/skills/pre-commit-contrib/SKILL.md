---
name: pre-commit-contrib
description: Runs the Elasticsearch specification contrib pre-commit pipeline (lint, generate, license, format, OpenAPI, doc lint). Use before committing specification changes, when validating the full schema output, or when the user asks for contrib/setup validation.
---

# Pre-commit validation (elasticsearch-specification)

## Mandatory before commit

From the repository root:

```bash
make contrib
```

This is what [CONTRIBUTING.md](CONTRIBUTING.md) requires before a PR. It runs, in order: `lint` → `generate` → `license-check` → `spec-format-fix` → `transform-to-openapi` → `filter-for-serverless` → `lint-docs` (see `contrib` in [Makefile](Makefile)).

Stage any files `contrib` updates (including under `output/`) before committing.

## When to run setup / Node first

- **Wrong or missing Node:** use the version in [`.nvmrc`](.nvmrc) — [README.md](README.md) / CONTRIBUTING: `nvm install` (or `nvm use`). `make setup` runs `compiler/check-node.js` and exits if the major version does not match.
- **Fresh clone, pulled dependency changes, or `make contrib` fails on missing modules:** run `make setup` once, then `make contrib`.

`make setup` is **not** a prerequisite on every commit if `node_modules` are already installed and Node matches; `make contrib` does not invoke `setup`.

## Full local check (optional)

Endpoint validation against recordings is separate ([README.md](README.md) `make validate api=...`). For PR readiness, `make contrib` is the required bar.
