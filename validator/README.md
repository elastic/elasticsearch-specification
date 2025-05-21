# es-spec-validator

An [ESLint](https://eslint.org/) plugin that uses [typescript-eslint](https://typescript-eslint.io/) to validate the Elasticsearch specification against a set of custom rules.
It is configured [in the specification directory](../specification/eslint.config.mjs).

## Rules

| Name | Description |
| - | - |
| `single-key-dictionary-key-is-string` | `SingleKeyDictionary` keys must be strings |

## Writing rules

Each rule should be written in a separate JavaScript file (e.g. `single-key-dictionary-key-is-string.mjs`) following the format of a custom rule [as defined by the typescript-eslint docs](https://typescript-eslint.io/developers/custom-rules).
Within a rule's `create` function, return an object whose keys are the names of [AST node types](https://typescript-eslint.io/packages/typescript-estree/ast-spec).

If a rule needs to report a problem, it should call `context.report()` with the appropriate arguments.

To get a familiar the different node types possible within a TypeScript AST, paste some code into [an AST viewer](https://ts-ast-viewer.com/) and explore the resulting visual tree.

To add your rule to the spec validator ESLint plugin, import it into [the plugin file](./eslint-plugin-es-spec.mjs) and add it to the `rules` object with an appropriate key.
