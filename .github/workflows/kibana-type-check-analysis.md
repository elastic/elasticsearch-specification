---
name: Kibana type check analysis
description: Fetch the latest kibana-type-checks Buildkite build, triage tsc errors, and open generator fix issues
on:
  schedule:
    - cron: daily
  workflow_dispatch:
    inputs:
      branch:
        description: "Buildkite branch to check (default: main)"
        required: false
        default: "main"
engine:
  id: claude
  model: "llm-gateway/claude-sonnet-4-6"
  env:
    ANTHROPIC_BASE_URL: "https://elastic.litellm-prod.ai/"
    ANTHROPIC_API_KEY: ${{ secrets.LITELLM_API_KEY }}
steps:
  - name: Fetch ephemeral GitHub token
    id: fetch-token
    uses: elastic/ci-gh-actions/fetch-github-token@622f9dc1eecdd4af2e81dfb38028aacb1dae03e8 # v1.5.0
    with:
      vault-instance: "ci-prod"
  - name: Fetch Buildkite errors
    env:
      BUILDKITE_API_TOKEN: ${{ secrets.BUILDKITE_API_TOKEN }}
      BRANCH: ${{ github.event.inputs.branch || 'main' }}
    run: |
      mkdir -p /tmp/gh-aw/agent

      BUILD=$(curl -sf \
        "https://api.buildkite.com/v2/organizations/elastic/pipelines/kibana-type-checks/builds?per_page=1&branch=${BRANCH}" \
        -H "Authorization: Bearer $BUILDKITE_API_TOKEN")

      STATE=$(echo "$BUILD" | jq -r '.[0].state')
      BUILD_NUMBER=$(echo "$BUILD" | jq -r '.[0].number')
      BUILD_URL=$(echo "$BUILD" | jq -r '.[0].web_url')

      echo "$STATE" > /tmp/gh-aw/agent/build-state.txt
      echo "$BUILD_URL" > /tmp/gh-aw/agent/build-url.txt

      if [ "$STATE" != "failed" ]; then
        echo "Build passed or not finished, nothing to do."
        exit 0
      fi

      JOB_ID=$(echo "$BUILD" | jq -r '.[0].jobs[] | select(.state == "failed") | .id' | head -1)

      curl -sf \
        "https://api.buildkite.com/v2/organizations/elastic/pipelines/kibana-type-checks/builds/$BUILD_NUMBER/jobs/$JOB_ID/log" \
        -H "Authorization: Bearer $BUILDKITE_API_TOKEN" \
        | jq -r '.content' \
        | sed 's/\x1b\[[0-9;]*m//g' \
        | grep -E "error TS[0-9]+" | head -100 > /tmp/gh-aw/agent/tsc-errors.txt || true
safe-outputs:
  env:
    GITHUB_TOKEN: ${{ steps.fetch-token.outputs.token }}
network:
  allowed:
    - defaults
    - api.buildkite.com
    - elastic.litellm-prod.ai
---

# Kibana type check analysis

A daily Buildkite pipeline generates a fresh Elasticsearch JS client from the main branch of the Elasticsearch specification (using `elastic-client-generator-js`), installs it into Kibana's main branch, and runs Kibana's TypeScript type check.

The pre-step has already fetched the latest build. Check `/tmp/gh-aw/agent/build-state.txt` — if the state is not `failed`, stop immediately.

Otherwise, read the tsc errors from `/tmp/gh-aw/agent/tsc-errors.txt` and `/tmp/gh-aw/agent/build-url.txt`.

Classify each error as one of:
- **GENERATOR**: fixable in `elastic-client-generator-js` (wrong type inference, missing types, incorrect codegen output)
- **SPEC**: the Elasticsearch specification has wrong or missing type information
- **KIBANA**: Kibana code needs to be updated to match the improved types (e.g. removing stale `@ts-expect-error` comments)
- **UNKNOWN**: cannot determine from the error alone

Group errors by classification. For each group, provide a concrete description of the root cause and the required fix.

**If there are SPEC errors:** ensure the label `kibana-spec-check` exists in `elastic/elasticsearch-specification` (create it with color `0075ca` if not), then use `safe-outputs.create-issue` to open one issue in `elastic/elasticsearch-specification` with:
- Label: `kibana-spec-check`
- Title: `Kibana type check: spec fixes needed - <today's date>`
- Body: the Buildkite build URL (from `/tmp/gh-aw/agent/build-url.txt`) followed by the full analysis of all SPEC errors

**If there are GENERATOR errors:** ensure the label `kibana-spec-check` exists in `elastic/elastic-client-generator-js` (create it with color `0075ca` if not), then use `safe-outputs.create-issue` to open one issue in `elastic/elastic-client-generator-js` with:
- Label: `kibana-spec-check`
- Title: `Kibana type check: generator fixes needed - <today's date>`
- Body: the Buildkite build URL (from `/tmp/gh-aw/agent/build-url.txt`) followed by the full analysis of all GENERATOR errors

**If there are no SPEC or GENERATOR errors** (only KIBANA or UNKNOWN), call `noop` with a brief explanation.
