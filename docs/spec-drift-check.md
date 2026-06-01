# Automated Spec Drift Detection

This repository uses a GitHub Agentic Workflow to check whether recently merged
Elasticsearch REST API changes are reflected in `elastic/elasticsearch-specification`.

The workflow source is [`.github/workflows/spec-drift.md`](../.github/workflows/spec-drift.md).
It is compiled by `gh aw compile` into a generated GitHub Actions lockfile.

## Goal

Every week, inspect pull requests merged in `elastic/elasticsearch`. For each merged PR that has
an observable REST API surface impact and is not already represented in this repository, open one
issue in `elastic/elasticsearch-specification` describing the drift. The team triages the issue and
assigns the original Elasticsearch PR author (or another owner) for the follow-up specification
change.

The workflow must not batch multiple Elasticsearch PRs into one issue. One relevant Elasticsearch
PR should produce at most one specification issue per run.

Before opening an issue, the workflow searches existing `elastic/elasticsearch-specification`
issues and pull requests. It skips issue creation when an open or already-resolved issue or PR
appears to cover the same Elasticsearch PR, endpoint, API, changed spec files, or feature terms.
This avoids duplicates when a human or an earlier workflow run already handled the drift.

## Repository Scope And Input Integrity

The workflow can read only the repositories needed for this task:

```yaml
strict: true
timeout-minutes: 45

tools:
  github:
    mode: gh-proxy
    allowed-repos:
      - elastic/elasticsearch
      - elastic/elasticsearch-specification
    min-integrity: approved
```

`min-integrity: approved` is used because the workflow can create issues. The agent should act only
on trusted repository content from owners, members, collaborators, non-fork PRs on public
repositories, and recognized automation rather than arbitrary untrusted comments or issues.
`mode: gh-proxy` uses the pre-authenticated GitHub CLI path and avoids starting a GitHub MCP server
for this scheduled repository task.

## What Counts As API Surface

Relevant changes include:

- New, removed, or renamed REST endpoints.
- Changed routes, HTTP methods, path parts, or query parameters.
- Changed request or response body fields, types, enum values, or optionality.
- Changed typed error responses.
- Changed API visibility, availability, stability, feature flags, or `since` version.
- Changes to `rest-api-spec` files in Elasticsearch.
- Examples that feed generated API documentation.

The workflow should skip implementation-only changes, tests, build logic, benchmarks,
transport-only behavior, and docs that do not affect generated API references.

## Version And Backports

Elasticsearch PR target versions are usually discoverable from PR labels such as `v8.19.0` or
`v9.4.0`. The workflow records those labels in the issue body and notes the implied specification
minor branches that will eventually need backports:

- `v8.19.0` -> backport to `8.19`
- `v9.0.0` -> backport to `9.0`
- `v9.4.0` -> backport to `9.4`

The workflow does not apply `backport X.Y` or `skip-backport` labels itself. Those labels are
applied by the team to the follow-up pull request when the specification fix is opened.

## Copilot BYOK Through LiteLLM

The workflow uses the `copilot` gh-aw engine in bring-your-own-key mode. Requests are routed
through Elastic's LiteLLM OpenAI-compatible endpoint:

```yaml
engine:
  id: copilot
  env:
    COPILOT_PROVIDER_BASE_URL: "https://elastic.litellm-prod.ai/v1"
    COPILOT_MODEL: "llm-gateway/claude-sonnet-4-6"
    COPILOT_PROVIDER_API_KEY: "${{ secrets.LITELLM_API_KEY }}"
    COPILOT_PROVIDER_TYPE: "openai"
```

`COPILOT_PROVIDER_BASE_URL`, `COPILOT_PROVIDER_API_KEY`, and `COPILOT_PROVIDER_BEARER_TOKEN` are
recognized by gh-aw as Copilot BYOK credential variables. They are allowed to reference secrets in
strict mode and are isolated by the Agentic Workflow Firewall proxy instead of being exposed to the
agent container. The required repository secret is `LITELLM_API_KEY`.

`COPILOT_PROVIDER_TYPE` is `openai` because the LiteLLM `/v1` endpoint exposes an OpenAI-compatible
API. The selected model is still Claude Sonnet through the `llm-gateway/claude-sonnet-4-6` model
name. Use `anthropic` only when routing to an Anthropic-compatible API shape rather than the
OpenAI-compatible LiteLLM endpoint.

## Running Locally

Use the gh-aw CLI to initialize and compile agentic workflows:

```sh
gh aw init --no-mcp
gh aw compile spec-drift
```

Use validation when changing the workflow source:

```sh
gh aw compile spec-drift --no-emit --json
```

The compiled `.lock.yml` file is generated and should not be hand-edited.
