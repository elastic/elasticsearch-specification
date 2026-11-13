# es-spec-validator

An [ESLint](https://eslint.org/) plugin that uses [typescript-eslint](https://typescript-eslint.io/) to validate the Elasticsearch specification against a set of custom rules.
It is configured [in the specification directory](../specification/eslint.config.js).

## Rules

| Name                                  | Description                                                                                                                                                                                |
|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `single-key-dictionary-key-is-string` | `SingleKeyDictionary` keys must be strings.                                                                                                                                                |
| `dictionary-key-is-string`            | `Dictionary` keys must be strings.                                                                                                                                                         |
| `no-native-types`                     | TypeScript native utility types (`Record`, `Partial`, etc.) and collection types (`Map`, `Set`, etc.) are not allowed. Use spec-defined aliases like `Dictionary` instead.                 |
| `no-same-name-as-enclosing-type`      | Classes having fields with the same name as the class is breaking for some client libraries.                                                                                               |
| `invalid-node-types`                  | The spec uses a subset of TypeScript, so some types, clauses and expressions are not allowed.                                                                                              |
| `no-generic-number`                   | Generic `number` type is not allowed outside of `_types/Numeric.ts`. Use concrete numeric types like `integer`, `long`, `float`, `double`, etc.                                            |
| `request-must-have-urls`              | All Request interfaces extending `RequestBase` must have a `urls` property defining their endpoint paths and HTTP methods.                                                                 |
| `no-variants-on-responses`            | `@variants` is only supported on Interface types, not on Request or Response classes. Use value_body pattern with `@codegen_name` instead. Includes additional checks on variant tag use.  |
| `no-inline-unions`                    | Inline union types (e.g., `field: A \| B`) are not allowed in properties/fields. Define a named type alias instead to improve code generation for statically-typed languages.              |
| `prefer-tagged-variants`              | Union of class types should use tagged variants (`@variants internal` or `@variants container`) instead of inline unions for better deserialization support in statically-typed languages. |
| `no-duplicate-type-names`             | All types must be unique across class and enum definitions.                                                                                                                                |
| `no-all-string-literal-unions         | Unions consisting entirely of string literals (e.g., `"green" \| "yellow" \| "red"`) are not allowed, use enums instead.                                                                   | 
| `jsdoc-endpoint-check`                | Validates JSDoc on endpoints in the specification. Ensuring consistent formatting. Some errors can be fixed with `--fix`.                                                                  |
| `codegen-exclude-on-request-only`     | Ensures `@codegen_exclude` is only used on request definitions located in namespaced `specification/` files (i.e. files.                                                                   |
| `valid-request-urls`                  | The `urls` of a request must not repeat a path or a method, and each method must be `DELETE`, `GET`, `HEAD`, `POST` or `PUT`.                                                              |
| `binary-requires-alias`               | `ArrayBuffer` is only allowed as the type of a type alias. Give binary data an alias with a name and use that alias.                                                                       |
| `doc-id-exists`                       | A `@doc_id` or `@ext_doc_id` on a property must exist in `specification/_doc_ids/table.csv`.                                                                                               |
| `no-container-property-outside-container` | `@variant container_property` is only allowed in a class with `@variants container`.                                                                                                   |
| `no-duplicate-jsdoc-tags`             | A JSDoc block must not repeat a tag, because the compiler keeps the last value only. `@availability` and `@UpdateForV10` are exempt.                                                       |
| `no-duplicate-variant-names`          | The members of a union with `@variants typed_keys_quirk` must have different `@variant name` values.                                                                                       |
| `no-object-url-parameters`            | Path parts and query parameters must not have an object type.                                                                                                                              |
| `no-similar-property-names`           | Two properties of one type must not differ only by case or by leading and trailing underscores, unless a `@codegen_name` sets them apart.                                                  |
| `no-stringified-in-requests`          | `Stringified<T>` is for values in responses and is not allowed in a request definition. Path parts and query parameters are also checked through their type aliases.                       |
| `prefer-generic-array-for-unions`     | A list of a union is written as `Array<A \| B>` and not as `(A \| B)[]`. Can be fixed with `--fix`.                                                                                        |
| `prefer-internal-variants`            | A union of classes that all have the same property with a literal type must use `@variants internal`.                                                                                      |
| `request-path-parts-match-urls`       | A path part that all URLs of a request contain must be required. A path part that one of the URLs does not contain must be optional.                                                       |
| `rest-spec-name-matches-location`     | The `@rest_spec_name` of a request must match the namespace and API folders of its file.                                                                                                   |
| `shortcut-property-exists`            | `@shortcut_property` must name a property of the class or of one of its parents.                                                                                                           |

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

### Shared helpers

The `utils/` directory has helpers for the tasks that most rules share. `jsdoc.js` reads the description and the tags
of the JSDoc block of a node. `spec.js` reads the layout of the specification: the properties of a class, the sections
and URLs of a request, the members of an enum. `types.js` resolves types through the type checker, for rules that
follow a type into another file.

A rule that needs type information must use `types.js` or the methods of the type checker. It must not use the
`ts.is*` functions or `ts.SyntaxKind` of its own `typescript` import. `specification/` and `validator/` each install
their own TypeScript, and the numbers of the syntax kinds change between versions. A check of a node kind then passes
in the unit tests and gives wrong results on the specification.

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
