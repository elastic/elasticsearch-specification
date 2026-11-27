# Automated Specification PR Review

This repository uses a GitHub Agentic Workflow to review pull requests that change the
Elasticsearch specification. It checks what each pull request adds, changes or removes against the
Elasticsearch source code and posts its findings as a review comment.

The workflow source is [`.github/workflows/review-spec-pr.md`](../.github/workflows/review-spec-pr.md).
`gh aw compile` turns it into the `.lock.yml` file next to it. Edit the `.md` file, never the
`.lock.yml`.

## Goal

A specification change is correct when it matches what the Elasticsearch server accepts and
returns, not when it looks plausible. The linter cannot check that, because it sees the
specification only. This workflow does the check that a reviewer otherwise does by hand: it reads
the code that defines each changed endpoint, type and property, and reports where the pull request
and the source differ.

The review is a table with one row for each checked item: what the pull request has, what the
source has, whether they match, and a permalink to the source at a pinned commit. An item that the
agent cannot find in the source is reported as `unverified`, never as a match.

The workflow only comments. It never approves and never requests changes, so a maintainer still
decides.

## The rules come from `AGENTS.md`

The workflow prompt contains no modeling rules. The agent reads [`AGENTS.md`](../AGENTS.md) and
follows it, together with the guides in `docs/` that it names. A contributor, a coding agent and
this reviewer therefore work from the same text, and a change to `AGENTS.md` changes the review
without a change to the workflow.

- The agent reads `AGENTS.md` from `main`, not from the pull request branch, so a pull request
  cannot change the instructions it is reviewed with.
- If the prompt and `AGENTS.md` disagree about how to model the specification, `AGENTS.md` wins.

To make the reviewer check something new, add the rule to `AGENTS.md`. Do not add it to the
workflow prompt.

## When it runs

The workflow runs when a pull request is opened, updated or marked ready for review, and all of
these are true:

- It changes a file under `specification/`.
- Its base branch is `main`.
- It is not a draft.
- Its branch is in this repository.

So it does not run for:

- **Backports.** They target release branches.
- **Pull requests from forks.** gh-aw skips them by default, and a fork run cannot use the engine
  secret. `CONTRIBUTING.md` asks for pull requests from a branch, not a fork.

A new push cancels the run in progress for that pull request and starts a new one.

### Running it manually

To review a pull request that the workflow skipped, run it from the Actions tab
(`Review Specification PR`) or with the CLI:

```bash
gh workflow run "Review Specification PR" --repo elastic/elasticsearch-specification -f pr_number=<PR number>
```

A run verifies against Elasticsearch `main`. For a pull request that targets a release branch, set
`es_branch` to verify against that branch:

```bash
gh workflow run "Review Specification PR" --repo elastic/elasticsearch-specification -f pr_number=<PR number> -f es_branch=9.4
```

Only a manual run can choose the branch. If the branch does not exist in Elasticsearch, the review
says that the source was unavailable. When the branch differs from the base branch of the pull
request, the review names the branch that it used.

## Elasticsearch source

Before the agent starts, a step makes a shallow clone of `elastic/elasticsearch` at
`/tmp/gh-aw/agent/elasticsearch`, limited to `server`, `libs`, `modules`, `plugins`, `x-pack` and
`rest-api-spec`. It writes the branch to `/tmp/gh-aw/agent/elasticsearch-branch.txt` and the commit
SHA to `/tmp/gh-aw/agent/elasticsearch-sha.txt`. The permalinks in the review use that SHA, so they
keep pointing at the code that the agent read.

If the clone fails, the job continues. The agent finds no source and posts a review that says
nothing was verified. It does the same when it cannot read `AGENTS.md`. It never reviews from
memory.

## Permissions and outputs

The workflow has read-only access to contents, issues and pull requests, and its GitHub tools are
limited to `elastic/elasticsearch-specification`. The agent cannot write to the repository. It can
only ask gh-aw for these safe outputs:

- `create-pull-request-review-comment`: up to 10 inline comments, each for a concrete mismatch on
  a changed line.
- `submit-pull-request-review`: one review. `allowed-events: [COMMENT]` restricts it to a comment.
  The compiled workflow accepts no other review type.

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
mode and keeps them out of the agent container.

## What it does not check

- **Generated output.** CI regenerates `output/**` after the merge, so the review does not ask for
  it.
- **Lint and formatting.** The workflow runs no `make` target. CI runs the linter.
- **Definitions that the pull request does not touch.** A problem in unchanged code is out of
  scope.
- **Style and naming** beyond what `AGENTS.md` and the guides state.

## Changing the workflow

1. Edit `.github/workflows/review-spec-pr.md`. Keep modeling rules out of the prompt. They belong
   in `AGENTS.md`.
2. Run `gh aw compile review-spec-pr`. It must finish with zero warnings.
3. Run `git status`. `gh aw compile` also rewrites `.gitattributes` and drops `merge=ours` from the
   `.github/workflows/*.lock.yml` line. That setting is intentional, so revert the file with
   `git checkout -- .gitattributes`.
4. Commit the `.md`, the regenerated `.lock.yml` and, if it changed, `.github/aw/actions-lock.json`.
