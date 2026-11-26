# Automated Specification PR Review

This repository uses a GitHub Agentic Workflow to review pull requests that change the
Elasticsearch specification. It cross-checks every added or modified field against the
Elasticsearch server source.

The workflow source is [`.github/workflows/review-spec-pr.md`](../.github/workflows/review-spec-pr.md).
It is compiled by `gh aw compile` into a generated GitHub Actions lockfile. Edit the `.md` file,
never the `.lock.yml`.

## Goal

A specification change is correct when it matches what the Elasticsearch server serializes, not
when it looks reasonable. For each pull request, the workflow finds the Java code that emits each
changed field, compares names, types and optionality, and posts a source-linked review.

The review is a compact table: field, specification type, server type, and a permalink to the
Elasticsearch source at a pinned commit. A field the workflow cannot find in the source is marked
`unverified`, never correct.

## When it runs

- Automatically, when a non-draft pull request that changes `specification/**` is opened,
  updated, or marked ready for review, and its base branch is `main`.
- It does **not** run for backport pull requests, because they target release branches.
- It does **not** run automatically for pull requests from forks. gh-aw only runs the workflow
  for branches in this repository, because fork runs have no access to the engine secret.
- A new push cancels the in-flight run for the same pull request and starts a fresh one.

### Running it manually

To review a fork pull request, or one that targets a release branch, run the workflow from the
Actions tab (`Review Specification PR`) or with the CLI:

```bash
gh workflow run "Review Specification PR" --repo elastic/elasticsearch-specification -f pr_number=<PR number>
```

A manual run checks against Elasticsearch `main`, which is usually a superset of a release branch.
The review says so when the pull request base branch is not `main`.

## Ground truth

Before the agent starts, a step makes a shallow, sparse clone of `elastic/elasticsearch` `main`
(`server`, `libs`, `modules`, `x-pack`, `rest-api-spec`) at `/tmp/gh-aw/agent/elasticsearch` and
records its commit SHA in `/tmp/gh-aw/agent/elasticsearch-sha.txt`. Permalinks use that SHA.

If the clone fails, the step does not fail the job. The agent finds the source missing and posts a
review saying no field-level verification was done. It never reviews from memory.

## Permissions and outputs

The workflow has read-only access to contents, issues and pull requests. The agent cannot write
directly. It can only emit these safe-outputs:

- `create-pull-request-review-comment`: at most 10 inline comments, for concrete mismatches on a
  changed line.
- `submit-pull-request-review`: one review, restricted by `allowed-events: [COMMENT]`.

The workflow **never approves** and never requests changes. Approval is a maintainer decision.

The GitHub tools are limited to `elastic/elasticsearch-specification`.

## Engine

The engine is `copilot` in bring-your-own-key mode (`COPILOT_PROVIDER_*`), pointed at OpenRouter's
OpenAI-compatible endpoint with `anthropic/claude-sonnet-5.5` as the model:

```yaml
engine:
  id: copilot
  env:
    COPILOT_PROVIDER_BASE_URL: "https://openrouter.ai/api/v1"
    COPILOT_MODEL: "anthropic/claude-sonnet-5.5"
    COPILOT_PROVIDER_API_KEY: "${{ secrets.OPENROUTER_API_KEY }}"
    COPILOT_PROVIDER_TYPE: "openai"
```

The required repository secret is `OPENROUTER_API_KEY`, and `openrouter.ai` is the only extra
allowed network host. gh-aw allows `COPILOT_PROVIDER_*` variables to reference secrets in strict
mode and keeps them out of the agent container. This differs from
[spec-drift](spec-drift-check.md), which still points at the LiteLLM gateway that is no longer
available.

## What it does not check

- `output/**`. It is generated on merge, so a pull request that only edits `specification/**` is
  complete.
- Style, naming preferences, or documentation wording, unless they contradict server behavior.

## Relationship to the local skill

The workflow is a port of the maintainer-local `review-spec-pr` Claude skill, which reads a local
Elasticsearch checkout and can approve on the maintainer's behalf. The workflow does
neither: it clones the source on the runner and only comments.

## Changing the workflow

1. Edit `.github/workflows/review-spec-pr.md`.
2. Run `gh aw compile review-spec-pr` and commit both the `.md` and the regenerated `.lock.yml`.
3. The compile must finish with zero warnings.
4. Check `git status` before committing. `gh aw compile` rewrites `.gitattributes`, dropping
   `merge=ours` from the `.github/workflows/*.lock.yml` line. Revert that file
   (`git checkout -- .gitattributes`), because the setting is intentional. It may also update
   `.github/aw/actions-lock.json`; that change belongs in the same commit.
