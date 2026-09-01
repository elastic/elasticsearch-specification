---
name: Weekly Elasticsearch Specification Drift
description: Detect merged Elasticsearch REST API changes that are missing from the specification and open one issue per change
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
  id: claude
  model: "llm-gateway/claude-sonnet-4-6"
  env:
    ANTHROPIC_BASE_URL: "https://elastic.litellm-prod.ai/"
    ANTHROPIC_API_KEY: ${{ secrets.LITELLM_API_KEY }}

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
  staged: false
  create-issue:
    max: 10
---

# Weekly Elasticsearch Specification Drift

Every run checks recently merged pull requests in `elastic/elasticsearch` and opens one issue
in `elastic/elasticsearch-specification` for each Elasticsearch change that has an observable
REST API surface impact and is not already represented in this repository. The team triages
these issues and assigns the original Elasticsearch PR author when appropriate.

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
     an issue just because a file path looks suspicious.

4. Determine the Elasticsearch version target.
   - Read version labels from the Elasticsearch PR. Typical labels look like `v8.19.0`, `v9.4.0`,
     `v9.5.0`, or equivalent release labels.
   - Record those labels in the issue so triagers know which specification minor branches will
     eventually need backports (for example `v9.4.0` implies `backport 9.4`; `v8.19.0` implies
     `backport 8.19`).
   - Do not apply backport labels to the issue; the team applies them to the follow-up PR when one
     is opened.

5. Compare against `elastic/elasticsearch-specification`.
   - Inspect `docs/add-new-api.md`, `docs/modeling-guide.md`, `docs/specification-structure.md`,
     `docs/style-guide.md`, and nearby files under `specification/` to understand where a fix
     would land.
   - Identify which specification files would need to change (request/response/type files under
     `specification/`, shared types in `_types`, etc.) and name them in the issue so the assignee
     has a starting point.
   - Search existing spec files thoroughly before declaring an API or type missing. If the
     specification already covers the change, do not open an issue.

6. Open one issue per relevant Elasticsearch PR.
   - Do not combine unrelated Elasticsearch PRs into one issue.
   - Do not open an issue when the specification is already correct.
   - Before creating an issue, search existing issues and pull requests in
     `elastic/elasticsearch-specification`. Check open issues and PRs first, then recently closed
     or merged ones from the same merge window. Search by Elasticsearch PR number, merge commit
     SHA, endpoint/API name, likely specification file names, and feature terms from the
     Elasticsearch PR title and labels.
   - Do not open an issue if an existing open issue or PR already covers the same Elasticsearch
     change or the same API-surface feature, even if it does not mention the Elasticsearch PR
     number. Record the existing issue or PR URL in the run summary instead.
   - Do not open an issue if a merged PR already covered the same Elasticsearch change or feature.
   - Use a title like `Spec drift: update for elasticsearch#123456 (short topic)`.
   - In the issue body include:
     - The Elasticsearch PR URL, author handle, merge commit SHA, and merge date.
     - Version labels from the Elasticsearch PR and the implied specification minor branches that
       will need backports once the fix lands.
     - A concise API impact summary (new/removed endpoints, route or method changes, path/query
       parameters, request and response shape changes, enum values, typed errors, availability,
       stability, feature flags, rest-api-spec changes).
     - The specification files that look most likely to need edits.
     - Any uncertainty or follow-up questions for the triager.
     - A suggestion to consider assigning the original Elasticsearch PR author.

7. Report a no-op run by doing nothing.
   - If there are no relevant Elasticsearch PRs, or all relevant PRs are already reflected in the
     specification, do not open an issue.

## Guardrails

- Only open issues for confirmed API-surface drift.
- Never open more than one issue for the same Elasticsearch PR in a single run.
- Do not modify files in this repository; this workflow only files issues.
- Keep the issue body honest about uncertainty; a narrowly scoped issue that flags gaps is better
  than inventing unverified API details.
