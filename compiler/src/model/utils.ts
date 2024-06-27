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

/* eslint-disable no-empty */

import { deepStrictEqual } from 'assert'
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
import { closest } from 'fastest-levenshtein'
import semver from 'semver'
import chalk from 'chalk'
import * as model from './metamodel'
import { EOL } from 'os'
import { dirname, join, sep } from 'path'
import { readFileSync } from 'fs'

const docIds: string[][] = readFileSync(join(__dirname, '..', '..', '..', 'specification', '_doc_ids', 'table.csv'), 'utf8')
  .split('\n')
  .map(line => line.split(','))

/**
 * Behaviors that the compiler recognized
 * and can act on. If a behavior is not defined
 * here, it will be handled as normal `implements`.
 */
export const knownBehaviors = [
  'AdditionalProperties',
  'AdditionalProperty',
  'CommonQueryParameters',
  'CommonCatQueryParameters',
  'OverloadOf'
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
          namespace: '_builtins'
        }
      }
      return type
    }

    case ts.SyntaxKind.StringKeyword: {
      const type: model.InstanceOf = {
        kind: 'instance_of',
        type: {
          name: 'string',
          namespace: '_builtins'
        }
      }
      return type
    }

    case ts.SyntaxKind.NumberKeyword: {
      const type: model.InstanceOf = {
        kind: 'instance_of',
        type: {
          name: 'number',
          namespace: '_builtins'
        }
      }
      return type
    }

    case ts.SyntaxKind.NullKeyword: {
      const type: model.InstanceOf = {
        kind: 'instance_of',
        type: {
          name: 'null',
          namespace: '_builtins'
        }
      }
      return type
    }

    case ts.SyntaxKind.VoidKeyword: {
      const type: model.InstanceOf = {
        kind: 'instance_of',
        type: {
          name: 'void',
          namespace: '_builtins'
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
          namespace: '_builtins'
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

    case ts.SyntaxKind.TrueKeyword: {
      assert(node, Node.isTrueLiteral(node), `The node is not of type ${ts.SyntaxKind[ts.SyntaxKind.TrueKeyword]} but ${ts.SyntaxKind[node.getKind()]} instead`)
      const type: model.LiteralValue = {
        kind: 'literal_value',
        value: true
      }
      return type
    }

    case ts.SyntaxKind.FalseKeyword: {
      assert(node, Node.isFalseLiteral(node), `The node is not of type ${ts.SyntaxKind[ts.SyntaxKind.FalseKeyword]} but ${ts.SyntaxKind[node.getKind()]} instead`)
      const type: model.LiteralValue = {
        kind: 'literal_value',
        value: false
      }
      return type
    }

    case ts.SyntaxKind.NumericLiteral: {
      assert(node, Node.isNumericLiteral(node), `The node is not of type ${ts.SyntaxKind[ts.SyntaxKind.NumericLiteral]} but ${ts.SyntaxKind[node.getKind()]} instead`)
      const type: model.LiteralValue = {
        kind: 'literal_value',
        value: Number(node.getText())
      }
      return type
    }

    case ts.SyntaxKind.PrefixUnaryExpression: {
      // Negative number
      const type: model.LiteralValue = {
        kind: 'literal_value',
        value: Number(node.getText())
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
      assert(node, Node.isTypeReference(node), `The node is not of type ${ts.SyntaxKind[ts.SyntaxKind.TypeReference]} but ${ts.SyntaxKind[node.getKind()]} instead`)

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
              namespace: '_builtins'
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
          assert(node, identifier.getDefinitions().length > 0, 'Unknown definition (missing import?)')

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

          if (Node.isTypeParameterDeclaration(declaration)) {
            const parent = declaration.getParent()
            assert(
              parent,
              Node.isClassDeclaration(parent) ||
              Node.isInterfaceDeclaration(parent) ||
              Node.isTypeAliasDeclaration(parent),
              'It should be a class, interface, or type alias declaration'
            )

            type.type.namespace = `${type.type.namespace}.${parent.getName() as string}`
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
  const type: model.Enum = {
    specLocation: sourceLocation(declaration),
    name: {
      name: declaration.getName(),
      namespace: getNameSpace(declaration)
    },
    kind: 'enum',
    members: declaration.getMembers()
      .map(m => {
        // names that contains `.` or `-` will be wrapped inside single quotes
        const name = m.getName().replace(/'/g, '')
        const member: model.EnumMember = {
          name: name
        }
        const value = m.getValue()
        if (value != null && (typeof value === 'string')) {
          member.name = value
          member.codegenName = name
        }
        hoistEnumMemberAnnotations(member, m.getJsDocs())

        return member
      })
  }

  const tags = parseJsDocTags(declaration.getJsDocs())
  if (typeof tags.non_exhaustive === 'string') {
    type.isOpen = true
  }

  if (typeof tags.es_quirk === 'string') {
    type.esQuirk = tags.es_quirk
  }

  return type
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
    namespace: getNameSpace(typeParameter) + '.' + declaration.getName()
  }))

  const alias = modelType(type)
  const typeAlias: model.TypeAlias = {
    specLocation: sourceLocation(declaration),
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
  let property: model.Property
  try {
    property = {
      name,
      required: !declaration.hasQuestionToken(),
      type: modelType(type)
    }
  } catch (e) {
    throw new Error(`cannot determine type of ${name}, got:${type.getFullText()}`)
  }
  hoistPropertyAnnotations(property, declaration.getJsDocs())
  return property
}

/**
 * Pulls @deprecated from types and properties
 */
function setDeprecated (type: model.BaseType | model.Property | model.EnumMember, tags: Record<string, string>, jsDocs: JSDoc[]): void {
  if (tags.deprecated !== undefined) {
    const [version, ...description] = tags.deprecated.split(' ')
    assert(jsDocs, semver.valid(version), 'Invalid semver value')
    type.deprecation = { version, description: description.join(' ') }
  }
  delete tags.deprecated
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

  setDeprecated(type, tags, jsDocs)
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
    'rest_spec_name', 'behavior', 'class_serializer', 'index_privileges', 'cluster_privileges', 'doc_id', 'availability'
  ]
  // in most of the cases the jsDocs comes in a single block,
  // but it can happen that the user defines multiple single line jsDoc.
  // We want to enforce a single jsDoc block.
  assert(jsDocs, jsDocs.length < 2, 'Use a single multiline jsDoc block instead of multiple single line blocks')

  if (jsDocs.length === 1) {
    const description = jsDocs[0].getDescription()
    if (description.length > 0) request.description = description.trim().replace(/\r/g, '')
  }
  const tags = parseJsDocTags(jsDocs)
  const apiName = tags.rest_spec_name
  // TODO (@typescript-eslint/strict-boolean-expressions) is no fun
  assert(jsDocs, apiName !== '' && apiName !== null && apiName !== undefined,
    `Request ${request.name.name} does not declare the @rest_spec_name to link back to`)

  const endpoint = mappings[apiName]
  assert(jsDocs, endpoint != null, `The api '${apiName}' does not exists, did you mean '${closest(apiName, Object.keys(mappings))}'?`)

  endpoint.request = request.name
  endpoint.response = response

  // This ensures the tags from request end up on the endpoint
  setTags(jsDocs, request, tags, knownRequestAnnotations, (tags, tag, value) => {
    if (tag.endsWith('_serializer')) {
    } else if (tag === 'rest_spec_name') {
    } else if (tag === 'index_privileges') {
      const privileges = [
        'all', 'auto_configure', 'create', 'create_doc', 'create_index', 'delete', 'delete_index', 'index',
        'maintenance', 'manage', 'manage_follow_index', 'manage_ilm', 'manage_leader_index', 'monitor',
        'read', 'read_cross_cluster', 'view_index_metadata', 'write'
      ]
      const values = parseCommaSeparated(value)
      for (const v of values) {
        assert(jsDocs, privileges.includes(v), `The index privilege '${v}' does not exists.`)
      }
      endpoint.privileges = endpoint.privileges ?? {}
      endpoint.privileges.index = values
    } else if (tag === 'cluster_privileges') {
      const privileges = [
        'all', 'cancel_task', 'create_snapshot', 'grant_api_key', 'manage', 'manage_api_key', 'manage_ccr',
        'manage_enrich', 'manage_ilm', 'manage_index_templates', 'manage_ingest_pipelines', 'manage_logstash_pipelines',
        'manage_ml', 'manage_oidc', 'manage_own_api_key', 'manage_pipeline', 'manage_rollup', 'manage_saml',
        'manage_security', 'manage_service_account', 'manage_slm', 'manage_token', 'manage_transform', 'manage_user_profile',
        'manage_watcher', 'monitor', 'monitor_ml', 'monitor_rollup', 'monitor_snapshot', 'monitor_text_structure',
        'monitor_transform', 'monitor_watcher', 'read_ccr', 'read_ilm', 'read_pipeline', 'read_security', 'read_slm', 'transport_client'
      ]
      const values = parseCommaSeparated(value)
      for (const v of values) {
        assert(jsDocs, privileges.includes(v), `The cluster privilege '${v}' does not exists.`)
      }
      endpoint.privileges = endpoint.privileges ?? {}
      endpoint.privileges.cluster = values
    } else if (tag === 'doc_id') {
      assert(jsDocs, value.trim() !== '', `Request ${request.name.name}'s @doc_id is cannot be empty`)
      endpoint.docId = value.trim()
      const docUrl = docIds.find(entry => entry[0] === value.trim())
      assert(jsDocs, docUrl != null, `The @doc_id '${value.trim()}' is not present in _doc_ids/table.csv`)
      endpoint.docUrl = docUrl[1].replace(/\r/g, '')
    } else if (tag === 'availability') {
      // The @availability jsTag is different than most because it allows
      // multiple values within the same docstring, hence needing to parse
      // the values again in order to preserve multiple values.
      const jsDocsMulti = parseJsDocTagsAllowDuplicates(jsDocs)
      const availabilities = parseAvailabilityTags(jsDocs, jsDocsMulti.availability)

      // Apply the availabilities to the Endpoint.
      for (const [availabilityName, availabilityValue] of Object.entries(availabilities)) {
        endpoint.availability[availabilityName] = availabilityValue
      }
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

  const validTags = ['class_serializer', 'doc_url', 'doc_id', 'behavior', 'variants', 'variant', 'shortcut_property',
    'codegen_names', 'non_exhaustive', 'es_quirk']
  const tags = parseJsDocTags(jsDocs)
  if (jsDocs.length === 1) {
    const description = jsDocs[0].getDescription()
    if (description.length > 0) type.description = description.trim().replace(/\r/g, '')
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
    } else if (tag === 'non_exhaustive') {
      assert(jsDocs, typeof tags.variants === 'string', '@non_exhaustive only applies to enums and @variants')
    } else if (tag === 'doc_url') {
      assert(jsDocs, isValidUrl(value), '@doc_url is not a valid url')
      type.docUrl = value.replace(/\r/g, '')
    } else if (tag === 'doc_id') {
      assert(jsDocs, value.trim() !== '', `Type ${type.name.namespace}.${type.name.name}'s @doc_id cannot be empty`)
      type.docId = value.trim()
      const docUrl = docIds.find(entry => entry[0] === value.trim())
      assert(jsDocs, docUrl != null, `The @doc_id '${value.trim()}' is not present in _doc_ids/table.csv`)
      type.docUrl = docUrl[1].replace(/\r/g, '')
    } else if (tag === 'codegen_names') {
      type.codegenNames = parseCommaSeparated(value)
      assert(jsDocs,
        type.kind === 'type_alias' && type.type.kind === 'union_of' && type.type.items.length === type.codegenNames.length,
        '@codegen_names must have the number of items as the union definition'
      )
    } else if (tag === 'es_quirk') {
      type.esQuirk = value.replace(/\r/g, '')
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

  const validTags = ['prop_serializer', 'doc_url', 'aliases', 'codegen_name', 'server_default',
    'variant', 'doc_id', 'es_quirk', 'availability']
  const tags = parseJsDocTags(jsDocs)
  if (jsDocs.length === 1) {
    const description = jsDocs[0].getDescription()
    if (description.length > 0) property.description = description.trim().replace(/\r/g, '')
  }

  if (tags.doc_id != null) {
    assert(
      jsDocs,
      tags.doc_url == null,
      'You can\'t define @doc_id and @doc_url at the same time'
    )
  }

  setTags(jsDocs, property, tags, validTags, (tags, tag, value) => {
    if (tag.endsWith('_serializer')) {
    } else if (tag === 'aliases') {
      property.aliases = parseCommaSeparated(value)
    } else if (tag === 'codegen_name') {
      property.codegenName = value
    } else if (tag === 'doc_url') {
      assert(jsDocs, isValidUrl(value), '@doc_url is not a valid url')
      property.docUrl = value.replace(/\r/g, '')
    } else if (tag === 'availability') {
      // The @availability jsTag is different than most because it allows
      // multiple values within the same docstring, hence needing to parse
      // the values again in order to preserve multiple values.
      const jsDocsMulti = parseJsDocTagsAllowDuplicates(jsDocs)
      const availabilities = parseAvailabilityTags(jsDocs, jsDocsMulti.availability)

      // The absence of an 'availability' field on a property implies that
      // the property is available in all flavors.
      property.availability = {}
      for (const [availabilityName, availabilityValue] of Object.entries(availabilities)) {
        property.availability[availabilityName] = availabilityValue
      }
    } else if (tag === 'doc_id') {
      assert(jsDocs, value.trim() !== '', `Property ${property.name}'s @doc_id is cannot be empty`)
      property.docId = value
      const docUrl = docIds.find(entry => entry[0] === value)
      if (docUrl != null) {
        property.docUrl = docUrl[1].replace(/\r/g, '')
      }
    } else if (tag === 'server_default') {
      assert(jsDocs, property.type.kind === 'instance_of' || property.type.kind === 'union_of' || property.type.kind === 'array_of', `Default values can only be configured for instance_of or union_of types, you are using ${property.type.kind}`)
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
      } else if (property.type.kind === 'array_of') {
        try {
          value = eval(value) // eslint-disable-line
        } catch (err) {
          assert(jsDocs, false, 'The default value is not formatted properly')
        }
        assert(jsDocs, Array.isArray(value), 'The default value should be an array')
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
    } else if (tag === 'es_quirk') {
      property.esQuirk = value
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

  const validTags = ['obsolete', 'obsolete_description', 'codegen_name', 'availability', 'aliases']
  const tags = parseJsDocTags(jsDocs)
  if (jsDocs.length === 1) {
    const description = jsDocs[0].getDescription()
    if (description.length > 0) member.description = description.trim().replace(/\r/g, '')
  }

  setTags(jsDocs, member, tags, validTags, (tags, tag, value) => {
    if (tag === 'codegen_name') {
      member.codegenName = value
    } else if (tag === 'aliases') {
      member.aliases = parseCommaSeparated(value)
    } else if (tag === 'availability') {
      // The @availability jsTag is different than most because it allows
      // multiple values within the same docstring, hence needing to parse
      // the values again in order to preserve multiple values.
      const jsDocsMulti = parseJsDocTagsAllowDuplicates(jsDocs)
      const availabilities = parseAvailabilityTags(jsDocs, jsDocsMulti.availability)

      // The absence of an 'availability' field on a property implies that
      // the property is available in all flavors.
      member.availability = {}
      for (const [availabilityName, availabilityValue] of Object.entries(availabilities)) {
        member.availability[availabilityName] = availabilityValue
      }
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
 * If it can't compute it, defaults to `_builtins`.
 */
export function getNameSpace (node: Node): string {
  // if the node we are checking is a TypeReferenceNode,
  // then we can get the codegen_name and find where
  // it has been defined and compute the namespace from that.
  if (Node.isTypeReference(node)) {
    const identifier = node.getTypeName()
    if (Node.isIdentifier(identifier)) {
      const name = identifier.compilerNode.escapedText as string
      // the Array object is defined by TypeScript
      if (name === 'Array') return '_builtins'
      const definition = identifier.getDefinitions()[0]
      assert(identifier, definition != null, 'Cannot find codegen_name')
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
    return '_builtins'
  }

  return cleanPath(declaration.getSourceFile().getFilePath())

  function cleanPath (path: string): string {
    path = dirname(path)
      .replace(/.*[/\\]specification[^/\\]*[/\\]?/, '')
      .replace(/[/\\]/g, '.')
    if (path === '') path = '_builtins'
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
    assert(extend, Node.isReferenceFindable(extend), 'Should be a reference node')
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
 * Given a JSDoc definition, return a mapping from a tag name to all its values.
 * This function is similar to the above parseJsDocTags() function except
 * it allows for multiple annotations with the same name.
 */
export function parseJsDocTagsAllowDuplicates (jsDoc: JSDoc[]): Record<string, string[]> {
  const mapped = {}
  jsDoc.forEach((elem: JSDoc) => {
    elem.getTags().forEach((tag) => {
      const tagName = tag.getTagName()
      if (mapped[tagName] === undefined) {
        mapped[tagName] = []
      }
      mapped[tagName].push(tag.getComment() ?? '')
    })
  })
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

  const nonExhaustive = (typeof tags.non_exhaustive === 'string') ? true : undefined

  const [type, ...values] = tags.variants.split(' ')
  if (type === 'external') {
    return {
      kind: 'external_tag',
      nonExhaustive: nonExhaustive
    }
  }

  if (type === 'container') {
    return {
      kind: 'container',
      nonExhaustive: nonExhaustive
    }
  }

  assert(jsDoc, type === 'internal', `Bad variant type: ${type}`)

  const pairs = parseKeyValues(jsDoc, values, 'tag', 'default')
  assert(jsDoc, typeof pairs.tag === 'string', 'Internal variant requires a tag definition')

  return {
    kind: 'internal_tag',
    nonExhaustive: nonExhaustive,
    tag: pairs.tag,
    defaultTag: pairs.default
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
  assert(jsDoc, key === 'name', 'The @variant key should be "name"')
  assert(jsDoc, typeof name === 'string', 'The @variant key should be "name"')

  return name.replace(/'/g, '')
}

/**
 * Parses the '@availability' JS tags into known values.
 */
export function parseAvailabilityTags (node: Node | Node[], values: string[]): model.Availability {
  return values.reduce((result, value, index, array) => {
    // Ensure that there is actually a name for this availability definition.
    assert(node, value.split(' ').length >= 1, 'The @availability tag must include a name (either stack or serverless)')
    const [availabilityName, ...values] = value.split(' ')

    // Since we're using reduce() we need to check that there's no duplicates.
    assert(node, !(availabilityName in result), `Duplicate @availability tag: '${availabilityName}'`)

    // Enforce only known availability names.
    assert(node, availabilityName === 'stack' || availabilityName === 'serverless', 'The @availablility <name> value must either be stack or serverless')

    // Now we can parse all the key-values and load them into variables
    // for easier access below.
    const validKeys = ['stability', 'visibility', 'since', 'feature_flag']
    const parsedKeyValues = parseKeyValues(node, values, ...validKeys)
    const visibility = parsedKeyValues.visibility
    const stability = parsedKeyValues.stability
    const since = parsedKeyValues.since
    const featureFlag = parsedKeyValues.feature_flag

    // Remove the 'feature_flag' name used in the annotations
    // in favor of 'featureFlag' as used in the metamodel.
    delete parsedKeyValues.feature_flag

    // Lastly we go through all the fields and validate them.
    if (visibility !== undefined) {
      parsedKeyValues.visibility = model.Visibility[visibility]
      assert(node, parsedKeyValues.visibility !== undefined, `visibility is not valid: ${visibility}`)
      if (visibility === model.Visibility.feature_flag) {
        assert(node, featureFlag !== undefined, '\'feature_flag\' must be defined if visibility is \'feature_flag\'')
      }
    }
    if (stability !== undefined) {
      parsedKeyValues.stability = model.Stability[stability]
      assert(node, parsedKeyValues.stability !== undefined, `stability is not valid: ${stability}`)
    }
    if (since !== undefined) {
      assert(node, semver.valid(since), `'since' is not valid semver: ${since}`)
    }
    if (featureFlag !== undefined) {
      assert(node, visibility === 'feature_flag', '\'visibility\' must be \'feature_flag\' if a feature flag is defined')
      parsedKeyValues.featureFlag = featureFlag
    }

    // Add the computed set of fields to the result.
    result[availabilityName] = parsedKeyValues
    return result
  }, {})
}

/**
 * Parses a list of comma-separated values as an array. Values can optionally be enclosed with single
 * or double quotes.
 */
export function parseCommaSeparated (value: string): string[] {
  return value.split(',').map(v => v.trim().replace(/["']/g, ''))
}

/**
 * Parses an array of "key=value" pairs and validate key names. Values can optionally be enclosed with single
 * or double quotes. If there is only a key with no value (no '=') the value is set to 'true'
 */
export function parseKeyValues (node: Node | Node[], pairs: string[], ...validKeys: string[]): Record<string, string> {
  const result = {}
  pairs.forEach(item => {
    const kv = item.split('=')
    assert(node, kv.length <= 2, 'Malformed key/value list')
    if (kv.length === 1) {
      kv.push('true')
    }
    assert(node, validKeys.includes(kv[0]), `Unknown key '${kv[0]}'`)
    result[kv[0]] = kv[1].replace(/["']/g, '')
  })
  return result
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

    // needed to be able to run assertions during testing
    // the test framework expects the compiler to throw
    // an exception insteasd of directly exiting with 1
    if (process.env.TEST_COMPILER === 'true') {
      throw new Error(message)
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

    const namespace = path.startsWith('_global') ? `_global${'/'}${path.split('/')[1]}` : path.split('/')[0]
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

    const namespace = path.startsWith('_global') ? `_global${'/'}${path.split('/')[1]}` : path.split('/')[0]
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

export function deepEqual (a: any, b: any): boolean {
  try {
    deepStrictEqual(a, b)
    return true
  } catch (err) {
    return false
  }
}

const basePath = (join(__dirname, '..', '..', '..', 'specification') + sep).replace(/\\/g, '/')

export function sourceLocation (node: Node): string {
  const sourceFile = node.getSourceFile()
  return `${sourceFile.getFilePath().replace(basePath, '')}#L${node.getStartLineNumber(true)}-L${node.getEndLineNumber()}`
}

/**
 * Sort an array of type definitions by type name
 */
export function sortTypeDefinitions (types: model.TypeDefinition[]): void {
  types.sort((a, b) => {
    if (a.name.namespace === b.name.namespace) {
      if (a.name.name > b.name.name) return 1
      if (a.name.name < b.name.name) return -1
      return 0
    }

    if (a.name.namespace > b.name.namespace) return 1
    if (a.name.namespace < b.name.namespace) return -1
    return 0
  })
}
