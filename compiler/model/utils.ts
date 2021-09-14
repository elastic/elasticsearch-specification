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
  Node,
  Project
} from 'ts-morph'
import semver from 'semver'
import chalk from 'chalk'
import * as model from './metamodel'
import { EOL } from 'os'
import { dirname, sep } from 'path'

/**
 * Behaviors that the compiler recognized
 * and can act on. If a behavior is not defined
 * here, it will be handled as normal `implements`.
 */
export const knownBehaviors = [
  'AdditionalProperties',
  'AdditionalProperty',
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

    case ts.SyntaxKind.VoidKeyword: {
      const type: model.InstanceOf = {
        kind: 'instance_of',
        type: {
          name: 'void',
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
      assert(node, children.length === 1, `Expected array to have 1 usable child but saw ${children.length}`)

      const type: model.ArrayOf = {
        kind: 'array_of',
        value: modelType(children[0])
      }
      return type
    }

    case ts.SyntaxKind.UnionType: {
      assert(node, Node.isUnionTypeNode(node), `The node is not of type ${ts.SyntaxKind[ts.SyntaxKind.UnionType]} but ${ts.SyntaxKind[node.getKind()]} instead`)
      const type: model.UnionOf = {
        kind: 'union_of',
        items: node.getTypeNodes().map(node => modelType(node))
      }
      return type
    }

    case ts.SyntaxKind.LiteralType: {
      assert(node, Node.isLiteralTypeNode(node), `The node is not of type ${ts.SyntaxKind[ts.SyntaxKind.LiteralType]} but ${ts.SyntaxKind[node.getKind()]} instead`)
      return modelType(node.getLiteral())
    }

    case ts.SyntaxKind.StringLiteral: {
      assert(node, Node.isStringLiteral(node), `The node is not of type ${ts.SyntaxKind[ts.SyntaxKind.StringLiteral]} but ${ts.SyntaxKind[node.getKind()]} instead`)
      const type: model.LiteralValue = {
        kind: 'literal_value',
        value: node.getText().replace(/'/g, '')
      }
      return type
    }

    case ts.SyntaxKind.TypeParameter: {
      assert(node, Node.isTypeParameterDeclaration(node), `The node is not of type ${ts.SyntaxKind[ts.SyntaxKind.TypeReference]} but ${ts.SyntaxKind[node.getKind()]} instead`)
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
      assert(node, Node.isTypeReferenceNode(node), `The node is not of type ${ts.SyntaxKind[ts.SyntaxKind.TypeReference]} but ${ts.SyntaxKind[node.getKind()]} instead`)

      const identifier = node.getTypeName()
      assert(node, Node.isIdentifier(identifier), 'Should be an identifier')

      const name = identifier.compilerNode.escapedText as string
      switch (name) {
        case 'Array': {
          assert(node, node.getTypeArguments().length === 1, 'An array must have one argument')
          const [value] = node.getTypeArguments().map(node => modelType(node))
          const type: model.ArrayOf = {
            kind: 'array_of',
            value
          }
          return type
        }

        case 'ArrayBuffer': {
          const type: model.InstanceOf = {
            kind: 'instance_of',
            type: {
              name: 'binary',
              namespace: 'internal'
            }
          }
          return type
        }

        case 'Dictionary':
        case 'AdditionalProperties': {
          assert(node, node.getTypeArguments().length === 2, 'A Dictionary must have two arguments')
          const [key, value] = node.getTypeArguments().map(node => modelType(node))
          const type: model.DictionaryOf = {
            kind: 'dictionary_of',
            key,
            value,
            singleKey: false
          }
          return type
        }

        case 'SingleKeyDictionary':
        case 'AdditionalProperty': {
          assert(node, node.getTypeArguments().length === 2, 'A SingleKeyDictionary must have two arguments')
          const [key, value] = node.getTypeArguments().map(node => modelType(node))
          const type: model.DictionaryOf = {
            kind: 'dictionary_of',
            key,
            value,
            singleKey: true
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
          const identifier = node.getTypeName()
          assert(node, Node.isIdentifier(identifier), 'Not an identifier')

          const declaration = identifier.getDefinitions()[0].getDeclarationNode()
          // We are looking at a generic parameter
          if (declaration == null) {
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

          assert(
            node,
            Node.isClassDeclaration(declaration) ||
            Node.isInterfaceDeclaration(declaration) ||
            Node.isEnumDeclaration(declaration) ||
            Node.isTypeAliasDeclaration(declaration) ||
            Node.isTypeParameterDeclaration(declaration),
            'It should be a class, interface, enum, type alias, or type parameter declaration'
          )
          const type: model.InstanceOf = {
            kind: 'instance_of',
            ...(generics.length > 0 && { generics }),
            type: {
              name: declaration.getName() as string,
              namespace: getNameSpace(node)
            }
          }
          return type
        }
      }
    }

    default:
      assert(node, false, `Unhandled node kind: ${ts.SyntaxKind[node.getKind()]}`)
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
 * Given the extended class or interface definition and the HeritageClause node
 * returns an Inherits structure.
 */
export function modelInherits (node: InterfaceDeclaration | ClassDeclaration, inherit: HeritageClause): model.Inherits {
  const generics = inherit.getTypeNodes()
    .flatMap(node => node.getTypeArguments())
    .map(node => modelType(node))
  return {
    type: {
      name: node.getName() as string,
      namespace: getNameSpace(node)
    },
    ...(generics.length > 0 && { generics })
  }
}

/**
 * Given a HeritageClause node returns an Implements structure.
 * A class could implement from multiple classes, which are
 * defined inside the node typeArguments.
 */
export function modelImplements (node: ExpressionWithTypeArguments): model.Inherits {
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
export function modelBehaviors (node: ExpressionWithTypeArguments): model.Inherits {
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
  assert(declaration, type != null, 'Type alias without a referenced type')
  const generics = declaration.getTypeParameters().map(typeParameter => ({
    name: modelGenerics(typeParameter),
    namespace: getNameSpace(typeParameter)
  }))

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
      assert(
        declaration.getJsDocs(),
        variants.kind === 'internal_tag' || variants.kind === 'external_tag',
        'Type Aliases can only have internal or external variants'
      )
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
  assert(declaration, type != null, 'Type alias without a referenced type')

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
  jsDocs: JSDoc[],
  type: TType,
  tags: Record<string, string>,
  validTags: string[],
  setter: ((tags: Record<string, string>, tag: string, value: string) => void)
): void {
  if (Object.keys(tags).length === 0) return

  setObsolete(type, tags)
  const badTags = Object.keys(tags).filter(tag => !validTags.includes(tag))
  assert(
    jsDocs,
    badTags.length === 0,
    `'${getName(type)}' has the following unknown annotations: ${badTags.join(', ')}`
  )

  for (const tag of validTags) {
    if (tag === 'behavior') continue
    if (tags[tag] !== undefined) {
      setter(tags, tag, tags[tag])
    }
  }

  function getName (type: TType): string {
    if (typeof type.name === 'string') {
      return type.name
    } else {
      return type.name.name
    }
  }
}

/** Lifts jsDoc type annotations to request properties */
export function hoistRequestAnnotations (
  request: model.Request, jsDocs: JSDoc[], mappings: Record<string, model.Endpoint>, response: model.TypeName | null
): void {
  const knownRequestAnnotations = [
    'since', 'rest_spec_name', 'stability', 'visibility', 'behavior', 'class_serializer'
  ]
  // in most of the cases the jsDocs comes in a single block,
  // but it can happen that the user defines multiple single line jsDoc.
  // We want to enforce a single jsDoc block.
  assert(jsDocs, jsDocs.length < 2, 'Use a single multiline jsDoc block instead of multiple single line blocks')

  if (jsDocs.length === 1) {
    const description = jsDocs[0].getDescription()
    if (description.length > 0) request.description = description.trim()
  }
  const tags = parseJsDocTags(jsDocs)
  const apiName = tags.rest_spec_name
  // TODO (@typescript-eslint/strict-boolean-expressions) is no fun
  assert(jsDocs, apiName !== '' && apiName !== null && apiName !== undefined,
    `Request ${request.name.name} does not declare the @rest_spec_name to link back to`)

  const endpoint = mappings[apiName]
  assert(jsDocs, endpoint != null, `${apiName} is not represented in the spec as a json file`)

  endpoint.request = request.name
  endpoint.response = response

  // This ensures the tags from request end up on the endpoint
  setTags(jsDocs, request, tags, knownRequestAnnotations, (tags, tag, value) => {
    if (tag.endsWith('_serializer')) {
    } else if (tag === 'rest_spec_name') {
    } else if (tag === 'visibility') {
      if (endpoint.visibility !== null && endpoint.visibility !== undefined) {
        assert(jsDocs, endpoint.visibility === value,
          `Request ${request.name.name} visibility on annotation ${value} does not match spec: ${endpoint.visibility ?? ''}`)
      }
      endpoint.visibility = model.Visibility[value]
    } else if (tag === 'stability') {
      assert(jsDocs, endpoint.stability === value,
        `Request ${request.name.name} stability on annotation ${value} does not match spec: ${endpoint.stability ?? ''}`)
      endpoint.stability = model.Stability[value]
    } else if (tag === 'since') {
      assert(jsDocs, semver.valid(value), `Request ${request.name.name}'s @since is not valid semver: ${value}`)
      endpoint.since = value
    } else {
      assert(jsDocs, false, `Unhandled tag: '${tag}' with value: '${value}' on request ${request.name.name}`)
    }
  })
}

/** Lifts jsDoc type annotations to fixed properties on Type */
export function hoistTypeAnnotations (type: model.TypeDefinition, jsDocs: JSDoc[]): void {
  // in most of the cases the jsDocs comes in a single block,
  // but it can happen that the user defines multiple single line jsDoc.
  // We want to enforce a single jsDoc block.
  assert(jsDocs, jsDocs.length < 2, 'Use a single multiline jsDoc block instead of multiple single line blocks')

  const validTags = ['class_serializer', 'doc_url', 'behavior', 'variants', 'variant', 'shortcut_property']
  const tags = parseJsDocTags(jsDocs)
  if (jsDocs.length === 1) {
    const description = jsDocs[0].getDescription()
    if (description.length > 0) type.description = description.trim()
  }

  setTags(jsDocs, type, tags, validTags, (tags, tag, value) => {
    if (tag === 'stability') {
    } else if (tag.endsWith('_serializer')) {
    } else if (tag === 'shortcut_property') {
      if (type.kind === 'interface') {
        type.shortcutProperty = value
      } else {
        assert(jsDocs, false, 'Request and Responses cannot have @shortcut_property')
      }
    } else if (tag === 'variants') {
    } else if (tag === 'variant') {
    } else if (tag === 'doc_url') {
      assert(jsDocs, isValidUrl(value), '@doc_url is not a valid url')
      type.docUrl = value
    } else {
      assert(jsDocs, false, `Unhandled tag: '${tag}' with value: '${value}' on type ${type.name.name}`)
    }
  })
}

/** Lifts jsDoc type annotations to fixed properties on Property */
function hoistPropertyAnnotations (property: model.Property, jsDocs: JSDoc[]): void {
  // in most of the cases the jsDocs comes in a single block,
  // but it can happen that the user defines multiple single line jsDoc.
  // We want to enforce a single jsDoc block.
  assert(jsDocs, jsDocs.length < 2, 'Use a single multiline jsDoc block instead of multiple single line blocks')

  const validTags = ['stability', 'prop_serializer', 'doc_url', 'aliases', 'identifier', 'since', 'server_default', 'variant']
  const tags = parseJsDocTags(jsDocs)
  if (jsDocs.length === 1) {
    const description = jsDocs[0].getDescription()
    if (description.length > 0) property.description = description.trim()
  }

  setTags(jsDocs, property, tags, validTags, (tags, tag, value) => {
    if (tag.endsWith('_serializer')) {
    } else if (tag === 'aliases') {
      property.aliases = value.split(',').map(v => v.trim())
    } else if (tag === 'identifier') {
      property.identifier = value
    } else if (tag === 'doc_url') {
      assert(jsDocs, isValidUrl(value), '@doc_url is not a valid url')
      property.docUrl = value
    } else if (tag === 'since') {
      assert(jsDocs, semver.valid(value), `${property.name}'s @since is not valid semver: ${value}`)
      property.since = value
    } else if (tag === 'server_default') {
      assert(jsDocs, property.type.kind === 'instance_of' || property.type.kind === 'union_of', `Default values can only be configured for instance_of or union_of types, you are using ${property.type.kind}`)
      assert(jsDocs, !property.required, 'Default values can only be specified on optional properties')
      if (property.type.kind === 'union_of') {
        let valueType = ''
        if (value === 'true' || value === 'false') {
          valueType = 'boolean'
        } else if (!isNaN(Number(value))) {
          valueType = 'number'
        } else {
          valueType = 'string'
        }
        const unionTypes = property.type.items.map(item => {
          assert(jsDocs, item.kind === 'instance_of', `Default values in unions can only be configured for instance_of types, you are using ${property.type.kind}`)
          if (['short', 'byte', 'integer', 'uint', 'long', 'ulong', 'float', 'double', 'Percentage'].includes(item.type.name)) {
            return 'number'
          }
          return item.type.name
        })
        assert(jsDocs, unionTypes.includes(valueType), `The configured server_default value is not present in the union value: ${unionTypes.join(' | ')}`)
        property.serverDefault = value
      } else {
        switch (property.type.type.name) {
          case 'boolean':
            assert(jsDocs, value === 'true' || value === 'false', `The default value for ${property.name} should be a boolean`)
            property.serverDefault = value === 'true'
            break
          case 'number':
          case 'short':
          case 'byte':
          case 'integer':
          case 'uint':
          case 'long':
          case 'ulong':
          case 'float':
          case 'double':
          case 'Percentage':
            assert(jsDocs, !isNaN(Number(value)), `The default value for ${property.name} should be a number`)
            property.serverDefault = Number(value)
            break
          default:
            property.serverDefault = value
        }
      }
    } else if (tag === 'variant') {
      assert(jsDocs, value === 'container_property', `Unknown 'variant' value '${value}' on property ${property.name}`)
      property.containerProperty = true
    } else {
      assert(jsDocs, false, `Unhandled tag: '${tag}' with value: '${value}' on property ${property.name}`)
    }
  })
}
/** Lifts jsDoc type annotations to fixed properties on Property */
function hoistEnumMemberAnnotations (member: model.EnumMember, jsDocs: JSDoc[]): void {
  // in most of the cases the jsDocs comes in a single block,
  // but it can happen that the user defines multiple single line jsDoc.
  // We want to enforce a single jsDoc block.
  assert(jsDocs, jsDocs.length < 2, 'Use a single multiline jsDoc block instead of multiple single line blocks')

  const validTags = ['obsolete', 'obsolete_description', 'identifier', 'since']
  const tags = parseJsDocTags(jsDocs)
  if (jsDocs.length === 1) {
    const description = jsDocs[0].getDescription()
    if (description.length > 0) member.description = description.trim()
  }

  setTags(jsDocs, member, tags, validTags, (tags, tag, value) => {
    if (tag === 'identifier') {
      member.identifier = value
    } else if (tag === 'since') {
      assert(jsDocs, semver.valid(value), `${member.name}'s @since is not valid semver: ${value}`)
      member.since = value
    } else {
      assert(jsDocs, false, `Unhandled tag: '${tag}' with value: '${value}' on enum member ${member.name}`)
    }
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
      assert(identifier, definition != null, 'Cannot find identifier')
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
      .replace(/.*[/\\]specification[/\\]?/, '')
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
    assert(extend, Node.isReferenceFindableNode(extend), 'Should be a reference node')
    const declaration = extend.getType().getSymbol()?.getDeclarations()[0]
    assert(extend, declaration != null, `Cannot find declaration for ${extend.getText()}`)
    if (Node.isClassDeclaration(declaration) || Node.isInterfaceDeclaration(declaration)) {
      if (declaration.getHeritageClauses().length > 0) {
        behaviors.push(...getAllBehaviors(declaration))
      }
    } else if (Node.isImportSpecifier(declaration)) {
      const sourceFile = declaration.getImportDeclaration().getModuleSpecifierSourceFile()
      assert(declaration, sourceFile != null, 'Cannot find source file')
      const name = declaration.getName()
      for (const declaration of [...sourceFile.getClasses(), ...sourceFile.getInterfaces()]) {
        if (declaration.getName() === name && declaration.getHeritageClauses().length > 0) {
          behaviors.push(...getAllBehaviors(declaration))
        }
      }
    } else {
      assert(declaration, false, `Unhandled extended declaration ${declaration?.getText() ?? ''}`)
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

  if (type === 'container') {
    return { kind: 'container' }
  }

  assert(jsDoc, type === 'internal', `Bad variant type: ${type}`)
  assert(jsDoc, typeof value === 'string', 'Internal variant requires a tag definition')
  const [tag, property] = value.split('=')
  assert(jsDoc, tag === 'tag', 'The tag name should be "tag"')
  assert(jsDoc, typeof property === 'string', 'The tag property is not defined')

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
  assert(jsDoc, key === 'name', 'The key value should be "name"')
  assert(jsDoc, typeof name === 'string', 'The key value should be "name"')

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
    assert(declaration, name != null, 'Anonymous classes should not exists')
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

/**
 * Verifies if the condition is true, if it's not, it logs the given error message
 * and prints which part of the spec caused the error is the node has been configured.
 * This function works as type assertion as well!
 */
export function assert (node: Node | Node[] | undefined, condition: boolean, message: string): asserts condition {
  if (!condition) {
    let file: string = ''
    const code: string[] = []
    if (node != null) {
      node = Array.isArray(node) ? node : [node]

      const sourceFile = node[0].getSourceFile()
      const lines = sourceFile.getEndLineNumber()
      const firstPos = sourceFile.getLineAndColumnAtPos(node[0].getPos())
      // where to find the offending line (and column)
      file = `${node[0].getSourceFile().getFilePath()}:${firstPos.line}:${firstPos.column}`

      for (const n of node) {
        // adds line numbers
        const text = sourceFile.getFullText().split(EOL).map((line, index) => `${index + 1}  ${line}`)
        const start = n.getStartLineNumber()
        const end = n.getEndLineNumber()
        for (let i = start; i <= end; i++) {
          // colors the offending lines in red
          text[i - 1] = chalk.red(text[i - 1])
        }
        // show two lines before and two lines after
        // the offending line(s)
        const startShow = start - 3 > 0 ? (start - 3) : 0
        const endShow = end + 2 <= lines ? (end + 2) : lines
        code.push(text.slice(startShow, endShow).join(EOL))
      }
    }

    console.log('Error:', message)
    if (file.length > 0) console.log('At:', file)
    if (code.length > 0) console.log(`\`\`\`\n${code.join('\n```\n')}\n\`\`\``)
    process.exit(1)
  }
}

/**
 * Verifies if every type is unique within a folder.
 * It also verifies that every type defined inside `/_types` and its subfolders
 * is unique specification wide.
 * Eg: If both `/foo/bar.ts` and `/foo/baz.ts` are exporting a type names `Hello`
 *     this function will throw an error.
 *     If `/foo/bar.ts` and `/foo/nested/baz.ts` are exporting a type names `Hello`
 *     no error will be thrown.
 */
export function verifyUniqueness (project: Project): void {
  const types: Map<string, string[]> = new Map()
  const common: string[] = []

  // get global `_types`
  for (const sourceFile of project.getSourceFiles()) {
    const path = dirname(sourceFile.getFilePath().replace(/.*[/\\]specification[/\\]?/, ''))
    if (!path.startsWith('_types')) continue

    for (const declaration of sourceFile.getClasses()) {
      const name = declaration.getName()
      assert(declaration, name != null, 'Anonymous classes cannot exists')
      assert(declaration, !name.endsWith('Request') && !name.endsWith('Response'), 'A type cannot end with "Request" or "Response"')
      assert(declaration, !common.includes(name), `${name} is already defined in the global types`)
      common.push(name)
    }

    for (const declaration of sourceFile.getInterfaces()) {
      assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"')
      assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`)
      common.push(declaration.getName())
    }

    for (const declaration of sourceFile.getEnums()) {
      assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"')
      assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`)
      common.push(declaration.getName())
    }

    for (const declaration of sourceFile.getTypeAliases()) {
      assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"')
      assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`)
      common.push(declaration.getName())
    }
  }

  // nested `_types`
  for (const sourceFile of project.getSourceFiles()) {
    const path = dirname(sourceFile.getFilePath().replace(/.*[/\\]specification[/\\]?/, ''))
    if (path.startsWith('_types')) continue
    if (!path.includes('_types')) continue

    const namespace = path.startsWith('_global') ? `_global${sep}${path.split(sep)[1]}` : path.split(sep)[0]
    const names = types.get(namespace) ?? []

    for (const declaration of sourceFile.getClasses()) {
      const name = declaration.getName()
      assert(declaration, name != null, 'Anonymous classes cannot exists')
      assert(declaration, !name.endsWith('Request') && !name.endsWith('Response'), 'A type cannot end with "Request" or "Response"')
      assert(declaration, !common.includes(name), `${name} is already defined in ${namespace} is already defined in the global types`)
      assert(declaration, !names.includes(name), `${name} is already defined in ${namespace} local types`)
      names.push(name)
    }

    for (const declaration of sourceFile.getInterfaces()) {
      assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"')
      assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`)
      assert(declaration, !names.includes(declaration.getName()), `${declaration.getName()} is already defined in ${namespace} local types`)
      names.push(declaration.getName())
    }

    for (const declaration of sourceFile.getEnums()) {
      assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"')
      assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`)
      assert(declaration, !names.includes(declaration.getName()), `${declaration.getName()} is already defined in ${namespace} local types`)
      names.push(declaration.getName())
    }

    for (const declaration of sourceFile.getTypeAliases()) {
      assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"')
      assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`)
      assert(declaration, !names.includes(declaration.getName()), `${declaration.getName()} is already defined in ${namespace} local types`)
      names.push(declaration.getName())
    }

    types.set(namespace, names)
  }

  // every other namespaced type
  for (const sourceFile of project.getSourceFiles()) {
    const path = dirname(sourceFile.getFilePath().replace(/.*[/\\]specification[/\\]?/, ''))
    if (path.includes('_types')) continue

    const namespace = path.startsWith('_global') ? `_global${sep}${path.split(sep)[1]}` : path.split(sep)[0]
    const names = types.get(path) ?? []
    const localTypes = types.get(namespace) ?? []

    for (const declaration of sourceFile.getClasses()) {
      const name = declaration.getName()
      assert(declaration, name != null, 'Anonymous classes cannot exists')
      if (name !== 'Request' && name !== 'Response') {
        assert(declaration, !name.endsWith('Request') && !name.endsWith('Response'), 'A type cannot end with "Request" or "Response"')
      }
      assert(declaration, !names.includes(name), `${name} is already defined`)
      assert(declaration, !common.includes(name), `${name} is already defined in the global types`)
      assert(declaration, !localTypes.includes(name), `${name} is already defined in ${namespace} local types`)
      names.push(name)
    }

    for (const declaration of sourceFile.getInterfaces()) {
      if (declaration.getName() !== 'Request' && declaration.getName() !== 'Response') {
        assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"')
      }
      assert(declaration, !names.includes(declaration.getName()), `${declaration.getName()} is already defined`)
      assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`)
      assert(declaration, !localTypes.includes(declaration.getName()), `${declaration.getName()} is already defined in ${namespace} local types`)
      names.push(declaration.getName())
    }

    for (const declaration of sourceFile.getEnums()) {
      if (declaration.getName() !== 'Request' && declaration.getName() !== 'Response') {
        assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"')
      }
      assert(declaration, !names.includes(declaration.getName()), `${declaration.getName()} is already defined`)
      assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`)
      assert(declaration, !localTypes.includes(declaration.getName()), `${declaration.getName()} is already defined in ${namespace} local types`)
      names.push(declaration.getName())
    }

    for (const declaration of sourceFile.getTypeAliases()) {
      if (declaration.getName() !== 'Request' && declaration.getName() !== 'Response') {
        assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"')
      }
      assert(declaration, !names.includes(declaration.getName()), `${declaration.getName()} is already defined`)
      assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`)
      assert(declaration, !localTypes.includes(declaration.getName()), `${declaration.getName()} is already defined in ${namespace} local types`)
      names.push(declaration.getName())
    }

    types.set(path, names)
  }
}

export function isValidUrl (str: string): boolean {
  try {
    new URL(str) // eslint-disable-line
    return true
  } catch (err) {
    return false
  }
}
