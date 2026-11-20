# Validate PR Github Action

This validates all the endpoints that have been updated in a given pull request.
It runs automatically and it post a comment to the PR at the end of the validation.

If you're seeing more modifications than expected, update the branch to make
sure you are comparing against the tip of the main branch.

## Example coverage

`example-coverage.js` runs from the `Example coverage` workflow. It compiles the
schema for the pull request and for its base, then flags public endpoints that
lose request examples, response examples or language alternatives. It never
fails the build. To list the whole backlog locally, run `make generate` and
then `make example-coverage`. Run the tests with `node --test .github/validate-pr/`.
