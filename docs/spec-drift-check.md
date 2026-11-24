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

## Model Access Through Agent Router

The workflow uses the `claude` gh-aw engine with the `claude-opus-5-5` model. Requests go to the Anthropic-compatible
endpoint of Agent Router, the Elastic LLM gateway:

```yaml
engine:
  id: claude
  model: claude-opus-5-5
  env:
    ANTHROPIC_BASE_URL: "https://llm.idea.elastichosting.ai/anthropic"
    ANTHROPIC_API_KEY: Bearer ${{ steps.agent-router-auth.outputs.id_token || 'agent-router' }}
    AWF_ANTHROPIC_AUTH_HEADER: Authorization
    ANTHROPIC_DEFAULT_HAIKU_MODEL: claude-haiku-5-5
```

Agent Router accepts a Google ID token of a registered service account and no API key, so the workflow needs no
repository secret for the model. The first custom step of the agent job runs `google-github-actions/auth`. It exchanges
the GitHub OIDC token of the job for an ID token of the service account, with the gateway origin as the audience. The
workflow has `id-token: write` for this exchange. The token is valid for about one hour, and the workflow times out
after 45 minutes.

Status: the workload identity provider and the service account in that step are placeholders. IT provisions the
identity through the onboarding request `elastic/centralized-it-infra#1927`, which is in an internal repository. The
step fails until the workflow source has the two values and the lock file is compiled again.

The gateway reads the token from `Authorization: Bearer`, and the gh-aw firewall proxy sends the Anthropic key in
`x-api-key` by default. `AWF_ANTHROPIC_AUTH_HEADER` names the header. The proxy sends the key value as it is, so the
value starts with `Bearer `. gh-aw validates the key in the `activation` job, which does not run the token step, and
the `|| 'agent-router'` literal makes that validation pass. The gateway serves exact model IDs, so
`ANTHROPIC_DEFAULT_HAIKU_MODEL` gives the small model of the Claude Code CLI an ID that the gateway routes.

Threat detection runs on the Copilot engine with the token of the run, which needs `copilot-requests: write`. gh-aw
gives the detection job no `id-token: write`, so that job cannot get a gateway token.

## Running Locally

Use the gh-aw CLI to initialize and compile agentic workflows:

```sh
gh aw init --no-mcp
gh aw compile spec-drift
```

Use a gh-aw release that has a price for each model of the workflow. v1.2.2 has entries for `claude-opus-5-5` and
`claude-haiku-5-5`, and v0.89.21 has no entry for `claude-opus-5-5`. Without an entry, the firewall proxy rejects each
model request with HTTP 400, unless the frontmatter sets `models.default-ai-credits-pricing`.

Use validation when changing the workflow source:

```sh
gh aw compile spec-drift --no-emit --json
```

The compiled `.lock.yml` file is generated and should not be hand-edited.
