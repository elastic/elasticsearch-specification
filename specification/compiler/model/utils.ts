/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import assert from 'assert'
import { dirname } from 'path'
import {
  ts,
  ClassDeclaration,
  InterfaceDeclaration,
  HeritageClause,
  TypeParameterDeclaration,
  EnumDeclaration,
  TypeAliasDeclaration,
  PropertySignature,
  PropertyDeclaration,
  ExpressionWithTypeArguments,
  JSDoc,
  Node
} from 'ts-morph'
import semver from 'semver'
import * as model from './metamodel'

/**
 * Behaviors that the compiler recognized
 * and can act on. If a behavior is not defined
 * here, it will be handled as normal `implements`.
 */
export const knownBehaviors = [
  'AdditionalProperties',
  'ArrayResponse',
  'EmptyResponseBase'
]

/**
 * Custom types that we use in the compiler
 * to help contributors shape the specification.
 * This types should not go in the final output.
 */
export const customTypes = [
  'SingleKeyDictionary',
  'Dictionary',
  'Union',
  'UserDefinedValue'
]

/**
 * Given a ts-morph Node element, it models it according to
 * our metamodel. It automatically models nested types as well.
 */
export function modelType (node: Node): model.ValueOf {
  switch (node.getKind()) {
    case ts.SyntaxKind.BooleanKeyword: {
      const type: model.InstanceOf = {
        kind: 'instance_of',
        type: {
          name: 'boolean',
          namespace: 'internal'
        }
      }
      return type
    }

    case ts.SyntaxKind.StringKeyword: {
      const type: model.InstanceOf = {
        kind: 'instance_of',
        type: {
          name: 'string',
          namespace: 'internal'
        }
      }
      return type
    }

    case ts.SyntaxKind.NumberKeyword: {
      const type: model.InstanceOf = {
        kind: 'instance_of',
        type: {
          name: 'number',
          namespace: 'internal'
        }
      }
      return type
    }

    case ts.SyntaxKind.NullKeyword: {
      const type: model.InstanceOf = {
        kind: 'instance_of',
        type: {
          name: 'null',
          namespace: 'internal'
        }
      }
      return type
    }

    // TODO: this should not be used in the specification
    //       we should throw an error
    case ts.SyntaxKind.AnyKeyword: {
      const type: model.InstanceOf = {
        kind: 'instance_of',
        type: {
          name: 'object',
          namespace: 'internal'
        }
      }
      return type
    }

    case ts.SyntaxKind.ArrayType: {
      const kinds: ts.SyntaxKind[] = [
        ts.SyntaxKind.StringKeyword,
        ts.SyntaxKind.BooleanKeyword,
        ts.SyntaxKind.AnyKeyword,
        ts.SyntaxKind.ArrayType,
        ts.SyntaxKind.TypeReference
      ]
      let children: Node[] = []
      node.forEachChild(child => children.push(child))
      children = children.filter(child => kinds.some(kind => kind === child.getKind()))
      assert(children.length === 1, `Expected array to have 1 usable child but saw ${children.length}`)

      const type: model.ArrayOf = {
        kind: 'array_of',
        value: modelType(children[0])
      }
      return type
    }

    case ts.SyntaxKind.UnionType: {
      assert(Node.isUnionTypeNode(node), `The node is not of type ${ts.SyntaxKind.UnionType} but ${node.getKind()} instead`)
      const type: model.UnionOf = {
        kind: 'union_of',
        items: node.getTypeNodes().map(node => modelType(node))
      }
      return type
    }

    case ts.SyntaxKind.LiteralType: {
      assert(Node.isLiteralTypeNode(node), `The node is not of type ${ts.SyntaxKind.LiteralType} but ${node.getKind()} instead`)
      return modelType(node.getLiteral())
    }

    case ts.SyntaxKind.TypeReference: {
      // TypeReferences are fun types, it's basically how TypeScript defines
      // everything that is not a basic type, an interface or a class will
      // appear here when used for instance.
      // For some reason also the `Array` type (the one defined with `Array<T>` and not `T[]`)
      // is interpreted as TypeReference as well.
      // The two most important fields of a TypeReference are `typeName` and `typeArguments`,
      // the first one is the name of the type (eg: `Foo`), while the second is the
      // possible generics (eg: Foo<T> => T will be in typeArguments).
      assert(Node.isTypeReferenceNode(node), `The node is not of type ${ts.SyntaxKind.TypeReference} but ${node.getKind()} instead`)

      const identifier = node.getTypeName()
      assert(Node.isIdentifier(identifier))

      const name = identifier.compilerNode.escapedText as string
      switch (name) {
        case 'Dictionary':
        case 'AdditionalProperties': {
          assert(node.getTypeArguments().length === 2, 'A Dictionary must have two arguments')
          const [key, value] = node.getTypeArguments().map(node => modelType(node))
          const type: model.DictionaryOf = {
            kind: 'dictionary_of',
            key,
            value
          }
          return type
        }

        case 'SingleKeyDictionary': {
          assert(node.getTypeArguments().length === 1, 'A SingleKeyDictionary must have one argument')
          const [value] = node.getTypeArguments().map(node => modelType(node))
          const type: model.NamedValueOf = {
            kind: 'named_value_of',
            value
          }
          return type
        }

        // TODO: the Union class should be removed from the spec
        //       in favor of TypeScript unions
        case 'Union': {
          assert(
            node.getTypeArguments().length >= 2,
            'A Union must have at least two arguments'
          )
          const items = node.getTypeArguments().map(node => modelType(node))
          const type: model.UnionOf = {
            kind: 'union_of',
            items
          }
          return type
        }

        case 'UserDefinedValue': {
          const type: model.UserDefinedValue = {
            kind: 'user_defined_value'
          }
          return type
        }

        default: {
          const generics = node.getTypeArguments().map(node => modelType(node))
          const type: model.InstanceOf = {
            kind: 'instance_of',
            ...(generics.length > 0 && { generics }),
            type: {
              name,
              namespace: getNameSpace(node)
            }
          }
          return type
        }
      }
    }

    default:
      throw new Error(`Unhandled node kind ${node.getKind()}`)
  }
}

/**
 * Given a ClassDeclaration, returns `true` if the Node
 * represents a rest spec name by looking at the decorators.
 */
export function isApi (declaration: ClassDeclaration): boolean {
  return Boolean(declaration.getDecorator('rest_spec_name'))
}

/**
 * Given a ClassDeclaration, returns the api name
 * stored in the rest_spec_name decorator.
 */
export function getApiName (declaration: ClassDeclaration): string {
  const decorator = declaration.getDecorator('rest_spec_name')
  assert(decorator, 'The rest_spec_name decorator does not exists')
  return decorator.getArguments()[0].getText().split("'")[1]
}

/**
 * Given a ClassDeclaration, returns the since value
 * stored in the since decorator and verifies if the value
 * is a valid semver string.
 */
export function getSinceValue (declaration: ClassDeclaration): string {
  const decorator = declaration.getDecorator('since')
  assert(decorator, 'The since decorator does not exists')
  const value = decorator.getArguments()[0].getText().split("'")[1]
  assert(semver.valid(value), `The semver value is not valid: ${value}`)
  return value
}

/**
 * Given a HeritageClause node returns an Inherits structure.
 * A class could extend from multiple classes, which are
 * defined inside the node typeArguments.
 */
export function modelInherits (node: HeritageClause): model.Inherits[] {
  return node.getTypeNodes().map(node => {
    assert(Node.isExpressionWithTypeArguments(node))
    const generics = node.getTypeArguments().map(node => modelType(node))
    return {
      type: {
        name: node.getExpression().getText(),
        namespace: getNameSpace(node)
      },
      ...(generics.length > 0 && { generics })
    }
  })
}

/**
 * Given a HeritageClause node returns an Implements structure.
 * A class could implement from multiple classes, which are
 * defined inside the node typeArguments.
 */
export function modelImplements (node: ExpressionWithTypeArguments): model.Implements {
  const generics = node.getTypeArguments().map(node => modelType(node))
  return {
    type: {
      name: node.getExpression().getText(),
      namespace: getNameSpace(node)
    },
    ...(generics.length > 0 && { generics })
  }
}

/**
 * Given a HeritageClause node returns an Implements structure.
 * A class could have multiple behaviors from multiple classes,
 * which are defined inside the node typeArguments.
 */
export function modelBehaviors (node: ExpressionWithTypeArguments): model.Implements {
  const generics = node.getTypeArguments().map(node => modelType(node))
  return {
    type: {
      name: node.getExpression().getText(),
      namespace: getNameSpace(node)
    },
    ...(generics.length > 0 && { generics })
  }
}

/**
 *  Generics are compiles as TypeParameterDeclarations by TypeScript,
 *  but all we really need is the name of the parameter, that we will
 *  use as generic. This method given a TypeParameterDeclaration node
 *  will return its name as a string.
 */
export function modelGenerics (node: TypeParameterDeclaration): string {
  return node.getName()
}

/**
 * Given a EnumDeclaration node, returns an Enum strcture.
 * An enum can be visited with `forEachChild`, but it will
 * become more complex to handle, as one of the children is the enum
 * name as well. An EnumDeclaration node has a getMembers method
 * which returns an array that only contains the member of the Enum.
 */
export function modelEnumDeclaration (declaration: EnumDeclaration): model.Enum {
  return {
    name: {
      name: declaration.getName(),
      namespace: getNameSpace(declaration)
    },
    kind: 'enum',
    members: declaration.getMembers()
      .map(member => {
        const alternateName = parseJsDocTags(member.getJsDocs())
          .find(tag => tag.name === 'alternate_name')
        return {
          // names that contains `.` or `-` will be wrapped inside single quotes
          name: member.getName().replace(/'/g, ''),
          ...(alternateName != null && { stringValue: alternateName.value })
        }
      })
  }
}

/**
 * Given a TypeAliasDeclaration node, returns a TypeAlias structure.
 * A TypeAliasDeclaration has two main properties, `name` and `type`.
 * The first one is the alias name, the second one is the type that
 * still needs to be modeled.
 */
export function modelTypeAlias (declaration: TypeAliasDeclaration): model.TypeAlias {
  const type = declaration.getTypeNode()
  assert(type, 'Type alias without a referenced type')
  const annotations = parseJsDocTags(declaration.getJsDocs())
    .reduce((acc, val) => {
      acc[val.name] = val.value
      return acc
    }, {})

  return {
    name: {
      name: declaration.getName(),
      namespace: getNameSpace(declaration)
    },
    kind: 'type_alias',
    type: modelType(type),
    ...(Object.keys(annotations).length > 0 && { annotations })
  }
}

/**
 * Given a PropertySignature or PropertyDeclaration node, returns a Property strcture.
 * A property signature/declaration has two main properties, `symbol` and `type`.
 * The first one is the property name, the second one is the type that
 * still needs to be modeled.
 */
export function modelProperty (declaration: PropertySignature | PropertyDeclaration): model.Property {
  const type = declaration.getTypeNode()
  assert(type, 'Type alias without a referenced type')

  // names that contains `.` or `-` will be wrapped inside single quotes
  const name = declaration.getName().replace(/'/g, '')
  return {
    name,
    required: !declaration.hasQuestionToken(),
    type: modelType(type)
  }
}

/**
 * Returns true if the passed HeritageClause node contains
 * a single type that is a known behavior.
 */
export function isKnownBehavior (node: HeritageClause | ExpressionWithTypeArguments): boolean {
  if (Node.isHeritageClause(node)) {
    if (node.getTypeNodes().length !== 1) return false

    for (const knownBehavior of knownBehaviors) {
      if (node.getTypeNodes()[0].getExpression().getText() === knownBehavior) {
        return true
      }
    }
  } else {
    for (const knownBehavior of knownBehaviors) {
      if (node.getExpression().getText() === knownBehavior) {
        return true
      }
    }
  }
  return false
}

/**
 * Given a Node, it returns its namespace computed from the symbol declarations.
 * If it can't compute it, defaults to `internal`.
 */
export function getNameSpace (node: Node): string {
  // if the node we are checking is a TypeReferenceNode,
  // then we can get the identifier and find where
  // it has been defined and compute the namespace from that.
  if (Node.isTypeReferenceNode(node)) {
    const identifier = node.getTypeName()
    if (Node.isIdentifier(identifier)) {
      const name = identifier.compilerNode.escapedText as string
      // the Array object is defined by TypeScript
      if (name === 'Array') return 'internal'
      const definition = identifier.getDefinitions()[0]
      return cleanPath(definition.getSourceFile().getFilePath())
    }
  }

  // if the node we are checking is a TypeAliasDeclaration
  // then we can directly get the source file as we are visiting
  // its definition, and from it compute the namespace.
  if (Node.isTypeAliasDeclaration(node)) {
    return cleanPath(node.getSourceFile().getFilePath())
  }

  const declaration = node.getType().getSymbol()?.getDeclarations()[0]
  if (declaration == null) {
    return 'internal'
  }

  return cleanPath(declaration.getSourceFile().getFilePath())

  function cleanPath (path: string): string {
    path = dirname(path)
      .replace(/.*[/\\]specs[/\\]?/, '')
      .replace(/[/\\]/g, '.')
    if (path === '') path = 'internal'
    return path
  }
}

/**
 * Given a node, it searches the node and its ancestors for behavior definitons.
 * It then collects the behavior names and returns an unique array of behaviors.
 * A behavior can be found in the current node or in one of the ancestors.
 */
export function getAllBehaviors (node: ClassDeclaration | InterfaceDeclaration): string[] {
  const behaviors = getBehaviors(node.getHeritageClauses())
  const extended = getExtended(node.getHeritageClauses()).flatMap(clause => clause.getTypeNodes())
    .map(t => t.getExpression())

  for (const extend of extended) {
    assert(Node.isReferenceFindableNode(extend))
    const declaration = extend.findReferences()[0].getDefinition().getDeclarationNode()
    if (Node.isClassDeclaration(declaration) || Node.isInterfaceDeclaration(declaration)) {
      if (declaration.getHeritageClauses().length > 0) {
        behaviors.push(...getAllBehaviors(declaration))
      }
    } else {
      throw new Error(`Unhandled extended declaration ${declaration?.getText() ?? ''}`)
    }
  }

  return Array.from(new Set(behaviors))

  function getExtended (clauses: HeritageClause[]): HeritageClause[] {
    return clauses.filter(clause => clause.getToken() === ts.SyntaxKind.ExtendsKeyword)
  }

  function getBehaviors (clauses: HeritageClause[]): string[] {
    return clauses
      .filter(isKnownBehavior)
      .map(clause => clause.getTypeNodes()[0].getExpression().getText())
  }
}

/**
 * Given a JSDoc definition, returns a programmable array of JSTags
 */
export function parseJsDocTags (jsDoc: JSDoc[]): Array<Record<string, string>> {
  return jsDoc.flatMap(d => d.getTags())
    .map(tag => {
      return {
        name: tag.getTagName(),
        value: tag.getComment() ?? ''
      }
    })
}

/**
 * Given a declaration, returns true if the declaration
 * if defined but never used, false otherwise.
 * If it's checking a request or response defintion,
 * to false, as request/response definitons are never used
 * but can't be discarded.
 */
export function isDefinedButNeverUsed (declaration: ClassDeclaration | InterfaceDeclaration | EnumDeclaration | TypeAliasDeclaration): boolean {
  if (Node.isClassDeclaration(declaration)) {
    const name = declaration.getName()
    assert(name, 'Anonymous classes should not exists')
    if (name.endsWith('Request') || name.endsWith('Response')) {
      return false
    }
  }

  let count = 0
  for (const referencedSymbol of declaration.findReferences()) {
    count += referencedSymbol.getReferences().length
  }
  return count === 1
}
