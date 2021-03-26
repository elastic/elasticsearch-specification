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
  'ArrayResponseBase',
  'EmptyResponseBase',
  'CommonQueryParameters',
  'CommonCatQueryParameters'
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

    case ts.SyntaxKind.StringLiteral: {
      assert(Node.isStringLiteral(node), `The node is not of type ${ts.SyntaxKind.StringLiteral} but ${node.getKind()} instead`)
      const type: model.LiteralValue = {
        kind: 'literal_value',
        value: node.getText().replace(/'/g, '')
      }
      return type
    }

    case ts.SyntaxKind.TypeParameter: {
      assert(Node.isTypeParameterDeclaration(node), `The node is not of type ${ts.SyntaxKind.TypeReference} but ${node.getKind()} instead`)
      const name = node.compilerNode.getText()
      const type: model.InstanceOf = {
        kind: 'instance_of',
        type: {
          name,
          namespace: getNameSpace(node)
        }
      }
      return type
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
 * Given an InterfaceDeclaration, returns `true` if the Node
 * represents a rest spec name by looking at the js doc tag.
 */
export function isApi (declaration: InterfaceDeclaration): boolean {
  const tags = parseJsDocTags(declaration.getJsDocs())
  return tags.rest_spec_name !== undefined
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
      .map(m => {
        // names that contains `.` or `-` will be wrapped inside single quotes
        const name = m.getName().replace(/'/g, '')
        const member = {
          name: name
        }
        hoistEnumMemberAnnotations(member, m.getJsDocs())

        return member
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
  const generics = declaration.getTypeParameters().map(node => modelType(node))

  const alias = modelType(type)
  const typeAlias: model.TypeAlias = {
    name: {
      name: declaration.getName(),
      namespace: getNameSpace(declaration)
    },
    kind: 'type_alias',
    type: alias,
    ...(generics.length > 0 && { generics })
  }
  if (alias.kind === 'union_of') {
    const variants = parseVariantsTag(declaration.getJsDocs())
    if (variants != null) {
      typeAlias.variants = variants
    }
  }
  hoistTypeAnnotations(typeAlias, declaration.getJsDocs())
  return typeAlias
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
  const property = {
    name,
    required: !declaration.hasQuestionToken(),
    type: modelType(type)
  }
  hoistPropertyAnnotations(property, declaration.getJsDocs())
  return property
}

/**
 * Pulls @obsolete and @obsolete_description from types and properties
 */
function setObsolete (type: model.BaseType | model.Property | model.EnumMember, tags: Record<string, string>): void {
  const obsolete = tags.obsolete
  const description = tags.obsolete_description
  if (obsolete !== undefined) {
    type.deprecation = { version: obsolete, description: description }
  }
  delete tags.obsolete
  delete tags.obsolete_description
}

/**
 * Validates ands sets jsDocs tags used throughout the input specification
 */
function setTags<TType extends model.BaseType | model.Property | model.EnumMember> (
  type: TType,
  tags: Record<string, string>,
  validTags: string[],
  setter: ((tags: Record<string, string>, tag: string, value: string) => void)
): void {
  if (Object.keys(tags).length === 0) return

  setObsolete(type, tags)
  const badTags = Object.keys(tags).filter(tag => !validTags.includes(tag))
  assert(
    badTags.length === 0,
    `'${getName(type)}' has the following unknown annotations: ${badTags.join(', ')}`
  )

  for (const tag of validTags) {
    if (tag === 'behavior') continue
    if (tags[tag] !== undefined) {
      setter(tags, tag, tags[tag])
    }
  }

  function getName (type): string {
    if (type instanceof model.BaseType) return type.name.name
    if (type instanceof model.Property) return type.name
    if (type instanceof model.EnumMember) return type.name
    return 'unknown'
  }
}

/** Lifts jsDoc type annotations to request properties */
export function hoistRequestAnnotations (
  request: model.Request, jsDocs: JSDoc[], mappings: Record<string, model.Endpoint>, response: model.TypeName | null
): void {
  const knownRequestAnnotations = [
    'since', 'rest_spec_name', 'stability', 'visibility', 'behavior', 'class_serializer'
  ]
  const tags = parseJsDocTags(jsDocs)
  const apiName = tags.rest_spec_name
  // TODO (@typescript-eslint/strict-boolean-expressions) is no fun
  assert(apiName !== '' && apiName !== null && apiName !== undefined,
    `Request ${request.name.name} does not declare the @rest_spec_name to link back to`)

  const endpoint = mappings[apiName]
  assert(endpoint != null, `${apiName} is not represented in the spec as a json file`)

  endpoint.request = request.name
  endpoint.response = response

  // This ensures the tags from request end up on the endpoint
  setTags(request, tags, knownRequestAnnotations, (tags, tag, value) => {
    if (tag.endsWith('_serializer')) {
    } else if (tag === 'rest_spec_name') {
    } else if (tag === 'visibility') {
      if (endpoint.visibility !== null && endpoint.visibility !== undefined) {
        assert(endpoint.visibility === value,
          `Request ${request.name.name} visibility on annotation ${value} does not match spec: ${endpoint.visibility ?? ''}`)
      }
      endpoint.visibility = model.Visibility[value]
    } else if (tag === 'stability') {
      // still need to follow up on this in a new PR
      if (value === 'TODO') return
      if (endpoint.stability !== null && endpoint.stability !== undefined) {
        assert(endpoint.stability === value,
          `Request ${request.name.name} stability on annotation ${value} does not match spec: ${endpoint.stability ?? ''}`)
      }
      endpoint.stability = model.Stability[value]
    } else if (tag === 'since') {
      assert(semver.valid(value), `Request ${request.name.name}'s @since is not valid semver: ${value}`)
      endpoint.since = value
    } else throw new Error(`Unhandled tag: '${tag}' with value: '${value}' on request ${request.name.name}`)
  })
}

/** Lifts jsDoc type annotations to fixed properties on Type */
export function hoistTypeAnnotations (type: model.TypeDefinition, jsDocs: JSDoc[]): void {
  const validTags = ['class_serializer', 'url', 'behavior', 'variants', 'variant']
  const tags = parseJsDocTags(jsDocs)
  setTags(type, tags, validTags, (tags, tag, value) => {
    if (tag === 'stability') {
    } else if (tag.endsWith('_serializer')) {
    } else if (tag === 'variants') {
    } else if (tag === 'variant') {
    } else if (tag === 'url') {
      type.url = value
    } else throw new Error(`Unhandled tag: '${tag}' with value: '${value}' on type ${type.name.name}`)
  })
}

/** Lifts jsDoc type annotations to fixed properties on Property */
function hoistPropertyAnnotations (property: model.Property, jsDocs: JSDoc[]): void {
  const validTags = ['stability', 'prop_serializer', 'url', 'aliases', 'identifier']
  const tags = parseJsDocTags(jsDocs)
  setTags(property, tags, validTags, (tags, tag, value) => {
    if (tag.endsWith('_serializer')) {
    } else if (tag === 'aliases') {
      property.aliases = value.split(',').map(v => v.trim())
    } else if (tag === 'identifier') {
      property.identifier = value
    } else throw new Error(`Unhandled tag: '${tag}' with value: '${value}' on property ${property.name}`)
  })
}
/** Lifts jsDoc type annotations to fixed properties on Property */
function hoistEnumMemberAnnotations (member: model.EnumMember, jsDocs: JSDoc[]): void {
  const validTags = ['obsolete', 'obsolete_description', 'identifier']
  const tags = parseJsDocTags(jsDocs)
  setTags(member, tags, validTags, (tags, tag, value) => {
    if (tag === 'identifier') {
      member.identifier = value
    } else throw new Error(`Unhandled tag: '${tag}' with value: '${value}' on enum member ${member.name}`)
  })
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
export function parseJsDocTags (jsDoc: JSDoc[]): Record<string, string> {
  const tags = jsDoc.flatMap(d => d.getTags())
    .map(tag => {
      return {
        name: tag.getTagName(),
        value: tag.getComment() ?? ''
      }
    })
  const mapped = tags.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.value }), {})
  return mapped
}

/**
 * Given a JSDoc definition, it returns the Variants is present.
 * It also validates the variants syntax.
 */
export function parseVariantsTag (jsDoc: JSDoc[]): model.Variants | undefined {
  const tags = parseJsDocTags(jsDoc)
  if (tags.variants == null) {
    return undefined
  }

  const [type, value] = tags.variants.split(' ')
  if (type === 'external') {
    return { kind: 'external_tag' }
  }

  assert(type === 'internal', `Bad variant type: ${type}`)
  assert(typeof value === 'string', 'Internal variant requires a tag definition')
  const [tag, property] = value.split('=')
  assert(tag === 'tag')
  assert(typeof property === 'string')

  return {
    kind: 'internal_tag',
    tag: property.replace(/'/g, '')
  }
}

/**
 * Given a JSDoc definition, it returns the variant name if present.
 * It also validates the variant name syntax.
 */
export function parseVariantNameTag (jsDoc: JSDoc[]): string | undefined {
  const tags = parseJsDocTags(jsDoc)
  if (tags.variant == null) {
    return undefined
  }

  const [key, name] = tags.variant.split('=')
  assert(key === 'name')
  assert(typeof name === 'string')

  return name.replace(/'/g, '')
}

/**
 * Given a declaration, returns true if the declaration
 * if defined but never used, false otherwise.
 * If it's checking a request or response defintion,
 * to false, as request/response definitons are never used
 * but can't be discarded.
 */
export function isDefinedButNeverUsed (declaration: ClassDeclaration | InterfaceDeclaration | EnumDeclaration | TypeAliasDeclaration): boolean {
  if (Node.isClassDeclaration(declaration) || Node.isInterfaceDeclaration(declaration)) {
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
