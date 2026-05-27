---
name: Fix Kibana spec type check issues
description: When an issue labeled kibana-spec-check is opened, analyze the SPEC errors and open a fix PR
on:
  issues:
    types: [labeled]

permissions:
  contents: read
  issues: read
  pull-requests: read

engine:
  id: claude
  model: "llm-gateway/claude-sonnet-4-6"
  env:
    ANTHROPIC_BASE_URL: "https://elastic.litellm-prod.ai/"
    ANTHROPIC_API_KEY: ${{ secrets.LITELLM_API_KEY }}

network:
  allowed:
    - defaults
    - elastic.litellm-prod.ai

safe-outputs:
  create-pull-request:
    max: 1
    reviewers:
      - elastic/devtools-team
---

# Fix Kibana spec type check issues

First, fetch issue `${{ github.event.issue.number }}` via the GitHub API and check its labels. Only continue if the label that was just added is `kibana-spec-check`. If it is not, stop immediately with no action.

## Context

This repo (`elastic/elasticsearch-specification`) defines the Elasticsearch REST API types in TypeScript-like `.ts` files under `specification/`. These types are used to generate language client libraries. The `kibana-type-check-analysis` workflow runs daily and opens issues labeled `kibana-spec-check` when Kibana's TypeScript type check fails due to **SPEC** errors — meaning the type information in this repository is wrong or incomplete.

## Steps

1. Read the issue body to understand which TypeScript errors were classified as SPEC errors and what fix is needed.

2. Read `docs/modeling-guide.md` and `docs/style-guide.md` to understand type conventions before making edits.

3. For each SPEC error, locate the relevant type or field in `specification/`:
   - Search by the TypeScript type name mentioned in the error (e.g. `Duration`, `IndexSettings`, `DataStreamLifecycle`)
   - Look for the API namespace first (e.g. errors in `index_management` → look under `specification/indices/`)
   - Use the field path from the tsc error to find the exact property

4. Implement the minimal fix:
   - **Wrong type** (e.g. `Duration | undefined` not assignable to `string | undefined`): correct the field's type to match what Kibana expects
   - **Missing field**: add the field with the appropriate type, following existing patterns in that file
   - **Wrong or missing enum value**: add or correct the value in the relevant `enum` or string union
   - **Type too narrow**: widen the type to include the values Kibana is passing

5. Use `safe-outputs.create-pull-request` to open a PR on branch `fix/kibana-spec-check-${{ github.event.issue.number }}` with:
   - Title: `Fix Kibana type check spec errors (issue #${{ github.event.issue.number }})`
   - Body: link to the issue (`closes #${{ github.event.issue.number }}`), the Buildkite build URL from the issue body, a summary of what was changed and why
   - Label: `specification`
