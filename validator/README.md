# es-spec-validator

An [ESLint](https://eslint.org/) plugin that uses [typescript-eslint](https://typescript-eslint.io/) to validate the Elasticsearch specification against a set of custom rules.
It is configured [in the specification directory](../specification/eslint.config.js).

## Rules

| Name                                  | Description |
|---------------------------------------| - |
| `single-key-dictionary-key-is-string` | `SingleKeyDictionary` keys must be strings. |
| `dictionary-key-is-string`            | `Dictionary` keys must be strings. |
| `no-native-types`                     | TypeScript native utility types (`Record`, `Partial`, etc.) and collection types (`Map`, `Set`, etc.) are not allowed. Use spec-defined aliases like `Dictionary` instead. |
| `invalid-node-types`                  | The spec uses a subset of TypeScript, so some types, clauses and expressions are not allowed. |
| `no-generic-number`                   | Generic `number` type is not allowed outside of `_types/Numeric.ts`. Use concrete numeric types like `integer`, `long`, `float`, `double`, etc. |
| `request-must-have-urls`              | All Request interfaces extending `RequestBase` must have a `urls` property defining their endpoint paths and HTTP methods. |
| `no-duplicate-type-names`             | All types must be unique across class and enum definitions.                                                                                                                                |

## Usage

Prerequisites: [Node.js](https://nodejs.org) and [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) must be installed locally.

1. Enter the `specification/` directory: `cd specification/`
1. Install dependencies (first time only): `npm install`
1. Run the linter on the specification project: `npm run lint`

Or, from the repository's root directory, run `make setup && make validate`.
This will run the linter, along with several other validations.

If the linter finds problems in the spec code, it will print them out.
If all is well, the output will be minimal, and the process will exit cleanly.

ESLint also maintains [integrations](https://eslint.org/docs/latest/use/integrations#editors) for most common code editors to provide instant inline feedback as you modify files.

## Writing custom rules

Each rule should be written in a separate JavaScript file (e.g. `single-key-dictionary-key-is-string.js`) following the format of a custom rule [as defined by the typescript-eslint docs](https://typescript-eslint.io/developers/custom-rules).
Within a rule's `create` function, return an object whose keys are the names of [AST node types](https://typescript-eslint.io/packages/typescript-estree/ast-spec), or an [esquery string](https://github.com/estools/esquery), and whose values are functions that validate that node type.
To report a problem in a validation function, it should call `context.report()` with the appropriate arguments.

To get a familiar the different node types possible within a TypeScript AST, paste some code into [an AST viewer](https://ts-ast-viewer.com/) and explore the resulting visual tree.

To add your rule to the spec validator ESLint plugin, import it into [the plugin file](./eslint-plugin-es-spec.js) and add it to the `rules` object with an appropriate key.
To enable your rule so that it runs against the spec, add it to [the spec's ESLint config](../specification/eslint.config.js).

### Unit testing rules

Add a file `<your rule name>.test.js` to the `test/` directory, and construct your test using the [typescript-eslint `RuleTester`](https://typescript-eslint.io/packages/rule-tester/) format.

To run the entire test suite, run `npm test`.
To run just one test file, run `npm test -- test/your-file.js`

### ESM format

The validator project is written in standard JavaScript rather than TypeScript, and uses the new [ESM](https://nodejs.org/api/esm.html) module format for managing module imports and exports.
Files should use the normal `.js` file extension, and the `import` format is almost identical to TypeScript's, except that ESM requires you to include the file extension in the import statement. Example:

```js
import myRule from './rules/my-rule.js' // not ./rules/my-rule
```
