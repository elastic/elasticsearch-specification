# Contributing to the Elasticsearch specification

Hello, and thank you for contributing!

There are many ways to contribute, including opening new issues, improving the docs or fixing typos. However, the instructions below focus on changes to the specification itself.

## Prepare the environment

For generating the JSON representation and running the validation code you need
to install and configure Node.js in your development environment.

You can install Node.js with [`nvm`](https://github.com/nvm-sh/nvm):

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Once the installation is completed, install Node.js with `nvm`:

```sh
# this command will install the version configured in .nvmrc
nvm install
```

From here, you can install the dependencies with `make setup`:

```sh
make setup
```

## Make your change

Documents under the docs/ directory will help you to change the specification. The most relevant ones are:

 * [How to add a new API](docs/add-new-api.md)
 * [Specification structure](docs/specification-structure.md)
 * [Modeling Guide](docs/modeling-guide.md)
 * [Documenting the API specification](docs/doc-comments-guide.md)
 * [Fixing a definition, the complete story](docs/validation-example.md)


## Send your pull request from a branch

To fix any style issues and generate the outputs (that we store in git), please run:

```sh
make contrib
```

Then, follow those steps:

- Sign the CLA https://www.elastic.co/contributor-agreement/
- Tag the relative issue (if any)
- Explain what your changes are doing
- Add the appropriate backport labels. If you need to backport a breaking change (e.g. changing the structure of a type or changing the type/optionality of a field), please follow these rules:
  - If the API is unusable without the change -> every supported version
  - If the API is usable, but fix is on the response side -> every supported version
  - If the API is usable, but fix is on the request side -> no backport, unless the API is _partially_ usable and the fix unlocks a missing feature that has no workaround
- Send the pull request from a branch, **not a fork**
