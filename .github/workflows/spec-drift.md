---
name: Weekly Elasticsearch Specification Drift
description: Detect merged Elasticsearch REST API changes that are missing from the specification and open one PR per change
on:
  workflow_dispatch:
    inputs:
      since:
        description: "Only inspect Elasticsearch PRs merged on or after this YYYY-MM-DD date. Defaults to the last 7 days."
        required: false
        type: string
      max_prs:
        description: "Maximum number of merged Elasticsearch PRs to inspect."
        required: false
        default: "50"
        type: string
  schedule: weekly on monday

permissions:
  contents: read
  issues: read
  pull-requests: read

strict: true
timeout-minutes: 45

engine:
  id: copilot
  env:
    COPILOT_PROVIDER_BASE_URL: "https://elastic.litellm-prod.ai/v1"
    COPILOT_MODEL: "llm-gateway/claude-sonnet-4-6"
    COPILOT_PROVIDER_API_KEY: "${{ secrets.LITELLM_API_KEY }}"
    COPILOT_PROVIDER_TYPE: "openai"

tools:
  github:
    mode: gh-proxy
    allowed-repos:
      - elastic/elasticsearch
      - elastic/elasticsearch-specification
    min-integrity: approved
    toolsets: [repos, issues, pull_requests]

network:
  allowed:
    - defaults
    - elastic.litellm-prod.ai

safe-outputs:
  staged: true
  create-pull-request:
    max: 10
    reviewers:
      - elastic/devtools-team
  add-labels:
    max: 10
  create-issue:
    max: 1
---

# Weekly Elasticsearch Specification Drift

Every run checks recently merged pull requests in `elastic/elasticsearch` and opens one pull
request in `elastic/elasticsearch-specification` for each Elasticsearch change that has an
observable REST API surface impact and is not already represented in this repository.

## Inputs

- `since`: optional `YYYY-MM-DD`. When omitted, inspect PRs merged in the last seven days.
- `max_prs`: optional maximum number of Elasticsearch PRs to inspect. Default: `50`.

## Process

1. Determine the merge window.
   - For `workflow_dispatch`, use `inputs.since` when present.
   - Otherwise compute the date seven days before the current run date.

2. Query `elastic/elasticsearch` for pull requests merged after the selected date.
   - Inspect at most `inputs.max_prs` pull requests.
   - Prefer GraphQL or `gh pr list --repo elastic/elasticsearch --state merged --search "merged:>=DATE"`.
   - Fetch each candidate's title, body, labels, base branch, merge commit SHA, changed files, and diff.

3. Classify each Elasticsearch PR.
   - Relevant changes include new endpoints, removed endpoints, changed routes or methods, path/query
     parameters, request bodies, response bodies, enum values, typed error bodies, API visibility,
     availability, stability, feature flags, documentation examples used by the generated API docs,
     and rest-api-spec JSON or YAML changes.
   - Skip PRs that only change implementation, tests, docs unrelated to generated API references,
     infrastructure, internal Java APIs, benchmarks, build logic, or transport-only behavior.
   - When uncertain, inspect the Elasticsearch diff and this repository before deciding. Do not open
     a PR just because a file path looks suspicious.

4. Determine the Elasticsearch version target.
   - Read version labels from the Elasticsearch PR. Typical labels look like `v8.19.0`, `v9.4.0`,
     `v9.5.0`, or equivalent release labels.
   - Convert those labels to specification minor branches and backport labels. For example,
     `v9.4.0` maps to branch `9.4` and label `backport 9.4`; `v8.19.0` maps to `backport 8.19`.
   - Always open the initial specification PR against `main`.
   - Add backport labels for every relevant released minor branch. If the change only applies to
     main and should not be backported, add `skip-backport` and explain why in the PR body.
   - If an exact target branch is newer than the label allow-list in this workflow, open a single
     failure issue explaining which backport label must be added to the workflow.

5. Compare against `elastic/elasticsearch-specification`.
   - Inspect `docs/add-new-api.md`, `docs/modeling-guide.md`, `docs/specification-structure.md`,
     `docs/style-guide.md`, and nearby files under `specification/` before editing.
   - Follow existing request/response/type layout patterns. Put shared types in `types.ts` or a
     suitable `_types` file, reuse existing aliases from `specification/_types`, and keep request
     definitions named `Request` and response definitions named `Response`.
   - Preserve `@rest_spec_name` and `@availability` conventions. Use the Elasticsearch target version
     for the `since` value on branches where a new API first appears.
   - Search existing spec files thoroughly before adding a new type or endpoint.

6. Open one pull request per relevant Elasticsearch PR.
   - Do not combine unrelated Elasticsearch PRs into one specification PR.
   - Do not create a PR when the specification is already correct.
   - Before creating a PR, search existing pull requests in `elastic/elasticsearch-specification`.
     Check open PRs first, then recently closed or merged PRs from the same merge window. Search by
     Elasticsearch PR number, merge commit SHA, endpoint/API name, changed specification file names,
     and likely feature terms from the Elasticsearch PR title and labels.
   - Do not create a PR if an existing open PR already covers the same Elasticsearch change or the
     same API-surface feature, even if that PR does not mention the Elasticsearch PR number. Add the
     existing PR URL to the run summary instead.
   - Do not create a PR if a merged PR already covered the same Elasticsearch change or feature.
   - Use a branch name like `spec-drift/es-123456-short-topic`.
   - Use a title like `Update specification for elasticsearch#123456`.
   - Include the Elasticsearch PR URL, merge commit, version labels, API impact summary,
     files changed in this repository, and any uncertainty in the PR body.
   - Request review from `@elastic/devtools-team`.
   - Apply the `specification` label and either one or more `backport X.Y` labels or `skip-backport`.

7. Validate changes before opening each PR.
   - Run the fastest relevant local checks available from repository metadata.
   - If validation cannot run, state why in the PR body.

8. Report a no-op run by doing nothing.
   - If there are no relevant Elasticsearch PRs, or all relevant PRs are already reflected in the
     specification, do not open an issue or PR.

## Guardrails

- Only edit this repository for confirmed API-surface drift.
- Never open more than one PR for the same Elasticsearch PR in a single run.
- Prefer small, directly reviewable changes over broad generated rewrites.
- Do not edit workflow files, package manifests, lockfiles, generated output, or unrelated docs as part
  of the specification drift PRs.
- Keep the PR body honest about uncertainty; a narrowly scoped partial PR is better than inventing
  unverified API details.
