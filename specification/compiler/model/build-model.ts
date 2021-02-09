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
import { writeFileSync } from 'fs'
import { join } from 'path'
import {
  Project,
  ts,
  Node,
  ClassDeclaration,
  InterfaceDeclaration,
  EnumDeclaration,
  TypeAliasDeclaration,
  PropertyDeclaration,
  PropertySignature
} from 'ts-morph'
import * as model from './metamodel'
import buildJsonSpec from './json-spec'
import {
  modelType,
  isApi,
  getApiName,
  modelInherits,
  modelGenerics,
  modelEnumDeclaration,
  modelTypeAlias,
  modelProperty,
  isKnownBehavior,
  modelImplements,
  getNameSpace,
  getAllBehaviors,
  modelBehaviors,
  parseJsDocTags,
  knownBehaviors,
  customTypes,
  isDefinedButNeverUsed
} from './utils'

const specsFolder = join(__dirname, '..', '..', 'specs')
const tsConfigFilePath = join(specsFolder, 'tsconfig.json')
const jsonSpec = buildJsonSpec()

type MappingsType = Map<string, {
  request: model.TypeName
  response: model.TypeName | null
}>

export default function compileSpecification (): model.Model {
  const project = new Project({ tsConfigFilePath })

  // Currently the only way to map endpoints and the
  // respective Request and Response classes is by
  // parsing all the specification and looking
  // at the rest_spec_name decorators.
  // Since endpoints are created after the specification
  // parsing we store all the mappings in a Map that
  // we'll use later to complete the endpoints.
  const mappings: MappingsType = new Map()

  const model: model.Model = {
    types: new Array<model.TypeDefinition>(),
    endpoints: new Array<model.Endpoint>()
  }

  // Read and compile source files
  const declarations = {
    classes: new Array<ClassDeclaration>(),
    interfaces: new Array<InterfaceDeclaration>(),
    enums: new Array<EnumDeclaration>(),
    typeAliases: new Array<TypeAliasDeclaration>()
  }
  const definedButNeverUsed: string[] = []
  for (const sourceFile of project.getSourceFiles()) {
    for (const declaration of sourceFile.getClasses()) {
      if (customTypes.includes(declaration.getName() ?? '')) continue
      if (isDefinedButNeverUsed(declaration)) {
        definedButNeverUsed.push(`${declaration.getName() ?? ''},${formatDanglingPath(declaration.getSourceFile().getFilePath())}`)
      }
      declarations.classes.push(declaration)
    }
    for (const declaration of sourceFile.getInterfaces()) {
      if (isDefinedButNeverUsed(declaration)) {
        definedButNeverUsed.push(`${declaration.getName() ?? ''},${formatDanglingPath(declaration.getSourceFile().getFilePath())}`)
      }
      declarations.interfaces.push(declaration)
    }
    for (const declaration of sourceFile.getEnums()) {
      if (isDefinedButNeverUsed(declaration)) {
        definedButNeverUsed.push(`${declaration.getName() ?? ''},${formatDanglingPath(declaration.getSourceFile().getFilePath())}`)
      }
      declarations.enums.push(declaration)
    }
    for (const declaration of sourceFile.getTypeAliases()) {
      if (isDefinedButNeverUsed(declaration)) {
        definedButNeverUsed.push(`${declaration.getName() ?? ''},${formatDanglingPath(declaration.getSourceFile().getFilePath())}`)
      }
      declarations.typeAliases.push(declaration)
    }
  }

  writeFileSync(
    join(__dirname, '..', '..', '..', 'output', 'dangling-types', 'dangling.csv'),
    definedButNeverUsed.join('\n'),
    'utf8'
  )

  // Visit all class, interface, enum and type alias definitions
  for (const declaration of declarations.classes) {
    model.types.push(compileClassOrInterfaceDeclaration(declaration, mappings, declarations.classes))
  }

  for (const declaration of declarations.interfaces) {
    model.types.push(compileClassOrInterfaceDeclaration(declaration, mappings, declarations.classes))
  }

  for (const declaration of declarations.enums) {
    model.types.push(modelEnumDeclaration(declaration))
  }

  for (const declaration of declarations.typeAliases) {
    model.types.push(modelTypeAlias(declaration))
  }

  // Create endpoints and merge them with
  // the recorded mappings if present.
  for (const [api, spec] of jsonSpec.entries()) {
    const endpoint: model.Endpoint = {
      name: api,
      description: spec.documentation.description,
      docUrl: spec.documentation.url,
      stability: spec.stability,
      request: null,
      requestBodyRequired: Boolean(spec.body?.required),
      response: null,
      urls: spec.url.paths.map(path => {
        return {
          path: path.path,
          methods: path.methods,
          ...(path.deprecated != null && { deprecation: path.deprecated })
        }
      })
    }

    const mapping = mappings.get(api)
    if (mapping != null) {
      endpoint.request = mapping.request
      endpoint.response = mapping.response
    }

    model.endpoints.push(endpoint)
  }

  // Sort the types in alphabetical order
  model.types.sort((a, b) => {
    if (a.name.name > b.name.name) return 1
    if (a.name.name < b.name.name) return -1
    return 0
  })

  return model
}

function compileClassOrInterfaceDeclaration (declaration: ClassDeclaration | InterfaceDeclaration, mappings: MappingsType, allClasses: ClassDeclaration[]): model.Request | model.Interface {
  const name = declaration.getName()
  assert(name, 'Anonymous classes should not exists')

  // Request defintions neeeds to be handled
  // differently from normal classes
  if (Node.isClassDeclaration(declaration) && isApi(declaration)) {
    // TODO: add support for implements and behaviors

    let hasResponseDeclaration = false
    for (const declaration of allClasses) {
      if (declaration.getName() === `${name.slice(0, -7)}Response`) {
        hasResponseDeclaration = true
        continue
      }
    }
    // Store the mappings for the current endpoint
    mappings.set(getApiName(declaration), {
      request: { name, namespace: getNameSpace(declaration) },
      response: hasResponseDeclaration
        ? { name: `${name.slice(0, -7)}Response`, namespace: getNameSpace(declaration) }
        : null
    })

    const type: model.Request = {
      kind: 'request',
      name: { name, namespace: getNameSpace(declaration) },
      path: new Array<model.Property>(),
      query: new Array<model.Property>()
    }

    if (declaration.getJsDocs().length > 0) {
      const tags = parseJsDocTags(declaration.getJsDocs())
        .filter(tag => tag.name !== 'behavior')
      if (tags.length > 0) {
        type.annotations = tags.reduce((acc, val) => {
          acc[val.name] = val.value
          return acc
        }, {})
      }
    }

    for (const member of declaration.getMembers()) {
      // we are visiting `path_parts, `query_parameters` or `body`
      assert(
        Node.isPropertyDeclaration(member) || Node.isPropertySignature(member),
        'Class and interfaces can only have property declarations or signatures'
      )
      const property = visitRequestProperty(member)
      if (property.name === 'path_parts') {
        type.path = property.properties
      } else if (property.name === 'query_parameters') {
        type.query = property.properties
      } else {
        // the body can either by a value (eg Array<string> or an object with properties)
        if (property.valueOf != null) {
          type.body = { kind: 'value', value: property.valueOf }
        } else if (property.properties.length > 0) {
          type.body = { kind: 'properties', properties: property.properties }
        }
      }
    }

    // The class is extended, an extended class
    // could accept generics as well
    for (const inherit of declaration.getHeritageClauses()) {
      type.inherits = (type.inherits ?? []).concat(modelInherits(inherit))
    }

    // The class accepts one or more generics
    for (const typeParameter of declaration.getTypeParameters()) {
      type.generics = (type.generics ?? []).concat(modelGenerics(typeParameter))
    }

    return type

  // Every other class or interface will be handled here
  } else {
    const type: model.Interface = {
      kind: 'interface',
      name: { name, namespace: getNameSpace(declaration) },
      properties: new Array<model.Property>()
    }

    if (declaration.getJsDocs().length > 0) {
      const tags = parseJsDocTags(declaration.getJsDocs())

      // Behaviors must be defined inside the compiler
      // before start using them in the spec.
      if (tags.some(tag => tag.name === 'behavior')) {
        assert(knownBehaviors.includes(name), `Detected unknown behavior: ${name}`)
      }

      // Any other jsdoc tag annotations should be added to the type annotations
      const otherTags = tags.filter(tag => tag.name !== 'behavior')
      if (otherTags.length > 0) {
        type.annotations = otherTags.reduce((acc, val) => {
          acc[val.name] = val.value
          return acc
        }, {})
      }
    }

    for (const member of declaration.getMembers()) {
      // Any property definition
      assert(
        Node.isPropertyDeclaration(member) || Node.isPropertySignature(member),
        'Class and interfaces can only have property declarations or signatures'
      )
      type.properties.push(modelProperty(member))
    }

    // The class is extended, an extended class could accept generics as well,
    // Implements will be catched here as well, they can be differentiated
    // by looking as `node.token`, which can either be
    // `ts.SyntaxKind.ExtendsKeyword` or `ts.SyntaxKind.ImplementsKeyword`
    // In case of `ts.SyntaxKind.ImplementsKeyword`, we need to check
    // if it's a normal implements or a behavior, in such case, the behaviors
    // need to be collected and added to the type.
    if (Node.isClassDeclaration(declaration) && declaration.getHeritageClauses().length > 0) {
      // check if the current node or one of the ancestor
      // has one or more behaviors attached
      const attachedBehaviors = getAllBehaviors(declaration)
      if (attachedBehaviors.length > 0) {
        type.attachedBehaviors = Array.from(
          new Set((type.attachedBehaviors ?? []).concat(attachedBehaviors))
        )
      }
    }

    for (const inherit of declaration.getHeritageClauses()) {
      if (inherit.getToken() === ts.SyntaxKind.ExtendsKeyword) {
        type.inherits = (type.inherits ?? []).concat(modelInherits(inherit))
      }
    }

    // Only classes can implement interfaces
    if (Node.isClassDeclaration(declaration)) {
      for (const implement of declaration.getImplements()) {
        if (isKnownBehavior(implement)) {
          type.behaviors = (type.behaviors ?? []).concat(modelBehaviors(implement))
        } else {
          type.implements = (type.implements ?? []).concat(modelImplements(implement))
        }
      }
    }

    // The class accepts one or more generics
    for (const typeParameter of declaration.getTypeParameters()) {
      type.generics = (type.generics ?? []).concat(modelGenerics(typeParameter))
    }

    return type
  }
}

/**
 * Utility wrapper around `modelProperty`, as Request classes needs to be handled
 * differently as are described as nested objects, and the body could have two
 * different types, `model.Property[]` (a normal object) or `model.ValueOf` (eg: an array or generic)
 */
function visitRequestProperty (member: PropertyDeclaration | PropertySignature): { name: string, properties: model.Property[], valueOf: model.ValueOf | null } {
  const properties: model.Property[] = []
  let valueOf: model.ValueOf | null = null

  const name = member.getName()
  const value = member.getTypeNode()
  assert(value, `The property ${name} is not defined`)

  // Request classes have three top level properties:
  // - path_parts
  // - query_parameters
  // - body
  //
  // In most of the cases all of those are PropertyDeclarations, eg (path_parts: { foo: string }),
  // but in some cases they can be a TypeReference eg (body: Array<string>)
  // PropertySignatures and PropertyDeclarations must be iterated via `ts.forEachChild`, as every
  // declaration is a child of the top level properties, while TypeReference should
  // directly by "unwrapped" with `modelType` because if you navigate the children of a TypeReference
  // you will lose the context and crafting the types becomes really hard.
  if (Node.isTypeReferenceNode(value)) {
    valueOf = modelType(value)
  } else {
    value.forEachChild(child => {
      assert(
        Node.isPropertySignature(child) || Node.isPropertyDeclaration(child),
        `Children should be ${ts.SyntaxKind.PropertySignature} or ${ts.SyntaxKind.PropertyDeclaration} but ${child.getKind()} instead`
      )
      properties.push(modelProperty(child))
    })
  }

  return { name, properties, valueOf }
}

function formatDanglingPath (path: string): string {
  return path.replace(/.*[/\\]specs[/\\]?/, '')
}
