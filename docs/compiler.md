# Compiler

The TypeScript specification is compiled to a JSON representation, that can
currently be found in [`output/schema/schema.json`](../output/schema/schema.json).

The code that compiles the TypeScript specification can be found in [`specification/compiler`](../specification/compiler).
The compiler is a TypeScript program that compiles the content of the [`specification/specs`](../specification/specs)
folder, given that we only need a subset of the TypeScript types, it's designed
to handle only those. (classes, interfaces, Enums and type aliases).

## Structure

The compiler divides the specification into four categories:

- class declarations
- interface declarations
- enum declarations
- type alias declarations

Then each category gets modeled according to the [metamodel](../specification/compiler/metamodel.ts)
that defines the structure of the JSON output.
Inside [`specification/compiler/utils.ts`](../specification/compiler/utils.ts) there is a set of
utilities that are used to model the different strctures, the most important one is `modelType`,
which recursively traverse the types until everything is modeles accorduing to the metamodel.

Other two important components are the `getNameSpace` and `getAllBehaviors` methods.
The first one tries to figure out the namespace of a declaration, which is not always
trivial, in partricular when visitin extended classes.
`getAllBehaviors` traverses all the ancestors of the current class trying to find
all the defined behaviors, so those can be passed down to the current class.

## Traversing the AST

For parsing the specification instead of using the TypeScript compiler API, which is poorly documented,
we are using [`ts-morph`](https://ts-morph.com/), a powerful library that wraps the TypeScript compiler API
and provides an easy and documented API for navgating the AST.

Another useful tool that you can use for understanding how a declaration gets visited is [ts-ast-viewer.com](https://ts-ast-viewer.com/).

## Behaviors

Certain APIs needs to be handled differently based on the language, to express this in the specification
we use behaviors. All the currently supported behaviors are living in [`specification/specs/behaviors.ts`](../specification/specs/behaviors.ts)
and must be defined in the compiler (in [`specification/compiler/utils.ts`](../specification/compiler/utils.ts)) as well.
If a behaviors is defined in [`specification/specs/behaviors.ts`](../specification/specs/behaviors.ts) and
it's not added in [`specification/compiler/utils.ts`](../specification/compiler/utils.ts) as well, the compiler will throw and error.

## Custom Types

You can find the full definition of this types in the [modeling guide](./modeling-guide.md).
Those types are also tracked in [`specification/compiler/utils.ts`](../specification/compiler/utils.ts),
because they can't be added in the output JSON, as we only need them to let the compiler
know how those structures should be represented in the output JSON.