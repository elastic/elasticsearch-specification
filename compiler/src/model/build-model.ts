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

import { writeFileSync } from 'fs'
import { join } from 'path'
import { STATUS_CODES } from 'http'
import {
  ClassDeclaration,
  EnumDeclaration,
  InterfaceDeclaration,
  Node,
  Project,
  PropertyDeclaration,
  PropertySignature,
  ts,
  TypeAliasDeclaration
} from 'ts-morph'
import * as model from './metamodel'
import buildJsonSpec from './json-spec'
import {
  assert,
  customTypes,
  getAllBehaviors,
  getNameSpace,
  hoistRequestAnnotations,
  hoistTypeAnnotations,
  isKnownBehavior,
  modelBehaviors,
  modelEnumDeclaration,
  modelGenerics,
  modelImplements,
  modelInherits,
  modelProperty,
  modelType,
  modelTypeAlias,
  parseVariantNameTag,
  parseVariantsTag,
  verifyUniqueness,
  parseJsDocTags,
  deepEqual,
  sourceLocation
} from './utils'

const specsFolder = join(__dirname, '..', '..', '..', 'specification')
const tsConfigFilePath = join(specsFolder, 'tsconfig.json')
const jsonSpec = buildJsonSpec()

export function compileEndpoints (): Record<string, model.Endpoint> {
  // Create endpoints and merge them with
  // the recorded mappings if present.
  const map = {}
  for (const [api, spec] of jsonSpec.entries()) {
    map[api] = {
      name: api,
      description: spec.documentation.description,
      docUrl: spec.documentation.url,
      stability: spec.stability,
      visibility: spec.visibility,
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
  }
  return map
}

export function compileSpecification (endpointMappings: Record<string, model.Endpoint>): model.Model {
  const project = new Project({ tsConfigFilePath })

  verifyUniqueness(project)

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
      declarations.classes.push(declaration)
    }
    for (const declaration of sourceFile.getInterfaces()) {
      declarations.interfaces.push(declaration)
    }
    for (const declaration of sourceFile.getEnums()) {
      declarations.enums.push(declaration)
    }
    for (const declaration of sourceFile.getTypeAliases()) {
      declarations.typeAliases.push(declaration)
    }
  }

  writeFileSync(
    join(__dirname, '..', '..', '..', 'output', 'dangling-types', 'dangling.csv'),
    definedButNeverUsed.join('\n'),
    'utf8'
  )
  for (const api of jsonSpec.keys()) {
    model.endpoints.push(endpointMappings[api])
  }

  // Visit all class, interface, enum and type alias definitions
  for (const declaration of declarations.classes) {
    model.types.push(compileClassOrInterfaceDeclaration(declaration, endpointMappings, declarations.classes))
  }

  for (const declaration of declarations.interfaces) {
    model.types.push(compileClassOrInterfaceDeclaration(declaration, endpointMappings, declarations.classes))
  }

  for (const declaration of declarations.enums) {
    model.types.push(modelEnumDeclaration(declaration))
  }

  for (const declaration of declarations.typeAliases) {
    model.types.push(modelTypeAlias(declaration))
  }

  // Sort the types in alphabetical order
  model.types.sort((a, b) => {
    if (a.name.namespace === b.name.namespace) {
      if (a.name.name > b.name.name) return 1
      if (a.name.name < b.name.name) return -1
      return 0
    }

    if (a.name.namespace > b.name.namespace) return 1
    if (a.name.namespace < b.name.namespace) return -1
    return 0
  })

  return model
}

function compileClassOrInterfaceDeclaration (declaration: ClassDeclaration | InterfaceDeclaration, mappings: Record<string, model.Endpoint>, allClasses: ClassDeclaration[]): model.Request | model.Response | model.Interface {
  const name = declaration.getName()
  assert(declaration, name != null, 'Anonymous definitions should not exists')

  if (name === 'Request') {
    assert(
      declaration,
      Node.isInterfaceDeclaration(declaration),
      `Request definitions must be declared as interfaces: ${name}`
    )
  }

  if (name === 'Response') {
    assert(
      declaration,
      Node.isClassDeclaration(declaration),
      `Response definitions must be declared as classes: ${name}`
    )
  }

  // Request and Response definitions needs to be handled
  // differently from normal classes
  if (name === 'Request' || name === 'Response') {
    let type: model.Request | model.Response
    const namespace = getNameSpace(declaration)
    if (name === 'Request') {
      type = {
        specLocation: sourceLocation(declaration),
        kind: 'request',
        name: { name, namespace },
        path: new Array<model.Property>(),
        query: new Array<model.Property>(),
        body: { kind: 'no_body' }
      }

      const response: model.TypeName = {
        name: 'Response',
        namespace: getNameSpace(declaration)
      }

      hoistRequestAnnotations(type, declaration.getJsDocs(), mappings, response)

      const mapping = mappings[namespace.includes('_global') ? namespace.slice(8) : namespace]
      if (mapping == null) {
        throw new Error(`Cannot find url template for ${namespace}, very likely the specification folder does not follow the rest-api-spec`)
      }
      // list of unique dynamic parameters
      const urlTemplateParams = [...new Set(
        mapping.urls.flatMap(url => url.path.split('/')
          .filter(part => part.includes('{'))
          .map(part => part.slice(1, -1))
        )
      )]
      const methods = [...new Set(mapping.urls.flatMap(url => url.methods))]

      let pathMember: Node | null = null
      let bodyProperties: model.Property[] = []
      let bodyValue: model.ValueOf | null = null
      let bodyMember: Node | null = null

      // collect path/query/body properties
      for (const member of declaration.getMembers()) {
        // we are visiting `path_parts, `query_parameters` or `body`
        assert(
          member,
          Node.isPropertyDeclaration(member) || Node.isPropertySignature(member),
          'Class and interfaces can only have property declarations or signatures'
        )
        const property = visitRequestOrResponseProperty(member)
        if (property.name === 'path_parts') {
          assert(member, property.properties.length > 0, 'There is no need to declare an empty object path_parts, just remove the path_parts declaration.')
          pathMember = member
          type.path = property.properties
        } else if (property.name === 'query_parameters') {
          assert(member, property.properties.length > 0, 'There is no need to declare an empty object query_parameters, just remove the query_parameters declaration.')
          type.query = property.properties
        } else if (property.name === 'body') {
          bodyMember = member
          assert(
            member,
            methods.some(method => ['POST', 'PUT', 'DELETE'].includes(method)),
            `${namespace}.${name} can't have a body, allowed methods: ${methods.join(', ')}`
          )
          if (property.valueOf != null) {
            bodyValue = property.valueOf
          } else {
            assert(member, property.properties.length > 0, 'There is no need to declare an empty object body, just remove the body declaration.')
            bodyProperties = property.properties
          }
        } else {
          assert(member, false, `Unknown request property: ${property.name}`)
        }
      }

      // validate path properties
      for (const part of type.path) {
        assert(
          pathMember as Node,
          urlTemplateParams.includes(part.name),
          `The property '${part.name}' does not exist in the rest-api-spec ${namespace} url template`
        )
        if (type.query.map(p => p.name).includes(part.name)) {
          const queryType = type.query.find(property => property != null && property.name === part.name) as model.Property
          if (!deepEqual(queryType.type, part.type)) {
            assert(pathMember as Node, part.codegenName != null, `'${part.name}' already exist in the query_parameters with a different type, you should define an @codegen_name.`)
            assert(pathMember as Node, !type.query.map(p => p.name).includes(part.codegenName), `The codegen_name '${part.codegenName}' already exists as parameter in query_parameters.`)
          }
        }
        if (bodyProperties.map(p => p.name).includes(part.name)) {
          const bodyType = bodyProperties.find(property => property != null && property.name === part.name) as model.Property
          if (!deepEqual(bodyType.type, part.type)) {
            assert(pathMember as Node, part.codegenName != null, `'${part.name}' already exist in the body with a different type, you should define an @codegen_name.`)
            assert(pathMember as Node, !bodyProperties.map(p => p.name).includes(part.codegenName), `The codegen_name '${part.codegenName}' already exists as parameter in body.`)
          }
        }
      }

      // validate body
      // the body can either be a value (eg Array<string> or an object with properties)
      if (bodyValue != null) {
        if (bodyValue.kind === 'instance_of' && bodyValue.type.name === 'Void') {
          assert(bodyMember as Node, false, 'There is no need to use Void in requets definitions, just remove the body declaration.')
        } else {
          const tags = parseJsDocTags((bodyMember as PropertySignature).getJsDocs())
          assert(
            bodyMember as Node,
            tags.codegen_name != null,
            'You should configure a body @codegen_name'
          )
          assert(
            (bodyMember as PropertySignature).getJsDocs(),
            !type.path.map(p => p.name).concat(type.query.map(p => p.name)).includes(tags.codegen_name),
            `The codegen_name '${tags.codegen_name}' already exists as a property in the path or query.`
          )
          type.body = {
            kind: 'value',
            value: bodyValue,
            codegenName: tags.codegen_name
          }
        }
      } else if (bodyProperties.length > 0) {
        type.body = { kind: 'properties', properties: bodyProperties }
      }
    } else {
      type = {
        specLocation: sourceLocation(declaration),
        kind: 'response',
        name: { name, namespace: getNameSpace(declaration) },
        responses: []
      }

      for (const status of declaration.getMembers()) {
        assert(
          status,
          Node.isPropertyDeclaration(status) || Node.isPropertySignature(status),
          'Class and interfaces can only have property declarations or signatures'
        )
        const statusCodes = status.getName().slice(1, -1).split(',').map(s => s.trim())
        for (const statusCode of statusCodes) {
          assert(status, STATUS_CODES[statusCode] != null, `${statusCode} is not a valid status code`)
        }
        const responseItem: model.ResponseItem = { statusCodes, body: { kind: 'no_body' } }
        status.getTypeNode()?.forEachChild(child => {
          assert(
            child,
            Node.isPropertySignature(child) || Node.isPropertyDeclaration(child),
            `Children should be ${ts.SyntaxKind[ts.SyntaxKind.PropertySignature]} or ${ts.SyntaxKind[ts.SyntaxKind.PropertyDeclaration]} but is ${ts.SyntaxKind[child.getKind()]} instead`
          )
          const property = visitRequestOrResponseProperty(child)
          if (property.name === 'body') {
            // the body can either by a value (eg Array<string> or an object with properties)
            if (property.valueOf != null) {
              if (property.valueOf.kind === 'instance_of' && property.valueOf.type.name === 'Void') {
                responseItem.body = { kind: 'no_body' }
              } else {
                responseItem.body = { kind: 'value', value: property.valueOf }
              }
            } else {
              responseItem.body = { kind: 'properties', properties: property.properties }
            }
          } else {
            assert(child, false, 'Response.body is the only Response property supported')
          }
        })
        type.responses.push(responseItem)
      }
    }

    // The  interface is extended, an extended interface could accept generics as well,
    // Implements will be caught here as well, they can be differentiated by looking as `node.token`
    // which can either be `ts.SyntaxKind.ExtendsKeyword` or `ts.SyntaxKind.ImplementsKeyword`
    // In case of `ts.SyntaxKind.ImplementsKeyword`, we need to check
    // if it's a normal implements or a behavior, in such case, the behaviors
    // need to be collected and added to the type.
    if (declaration.getHeritageClauses().length > 0) {
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
      const extended = inherit.getTypeNodes()
        .map(t => t.getExpression())
        .map(t => t.getType().getSymbol()?.getDeclarations()[0])[0]
      assert(inherit, Node.isClassDeclaration(extended) || Node.isInterfaceDeclaration(extended), 'Should extend from a class or interface')
      type.inherits = modelInherits(extended, inherit)
    }

    for (const typeParameter of declaration.getTypeParameters()) {
      type.generics = (type.generics ?? []).concat({
        name: modelGenerics(typeParameter),
        namespace: type.name.namespace
      })
    }

    // If the body wasn't set and we have a parent class, then it's a property body with no additional properties
    if (type.kind === 'request' && type.body.kind === 'no_body' && type.inherits != null) {
      const parent = type.inherits.type
      // RequestBase is special as it's a "marker" base class that doesn't imply a property body type. We should get rid of it.
      if (parent.name === 'RequestBase' && parent.namespace === '_types') {
        // nothing to do
      // CatRequestBase is special as it's a "marker" base class that doesn't imply a property body type. We should get rid of it.
      } else if (parent.name === 'CatRequestBase' && parent.namespace === 'cat._types') {
        // nothing to do
      } else {
        type.body = { kind: 'properties', properties: new Array<model.Property>() }
      }
    }

    return type

  // Every other class or interface will be handled here
  } else {
    const type: model.Interface = {
      specLocation: sourceLocation(declaration),
      kind: 'interface',
      name: { name, namespace: getNameSpace(declaration) },
      properties: new Array<model.Property>()
    }

    hoistTypeAnnotations(type, declaration.getJsDocs())

    const variant = parseVariantNameTag(declaration.getJsDocs())
    if (typeof variant === 'string') {
      type.variantName = variant
    }

    const variants = parseVariantsTag(declaration.getJsDocs())
    if (variants != null) {
      assert(declaration.getJsDocs(), variants.kind === 'container', 'Interfaces can only use `container` variant kind')
      type.variants = variants
    }

    for (const member of declaration.getMembers()) {
      // Any property definition
      assert(
        member,
        Node.isPropertyDeclaration(member) || Node.isPropertySignature(member),
        'Class and interfaces can only have property declarations or signatures'
      )
      const property = modelProperty(member)
      if (type.variants?.kind === 'container' && property.containerProperty == null) {
        assert(
          member,
          !property.required,
          'All @variants container properties must be optional'
        )
      }
      type.properties.push(property)
    }

    // The class or interface is extended, an extended class or interface could
    // accept generics as well, Implements will be caught here as well,
    // they can be differentiated by looking as `node.token`, which can either be
    // `ts.SyntaxKind.ExtendsKeyword` or `ts.SyntaxKind.ImplementsKeyword`
    // In case of `ts.SyntaxKind.ImplementsKeyword`, we need to check
    // if it's a normal implements or a behavior, in such case, the behaviors
    // need to be collected and added to the type.
    if (declaration.getHeritageClauses().length > 0) {
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
        const extended = inherit.getTypeNodes()
          .map(t => t.getExpression())
          .map(t => t.getType().getSymbol()?.getDeclarations()[0])[0]
        assert(inherit, Node.isClassDeclaration(extended) || Node.isInterfaceDeclaration(extended), 'Should extend from a class or interface')
        type.inherits = modelInherits(extended, inherit)
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

    for (const typeParameter of declaration.getTypeParameters()) {
      type.generics = (type.generics ?? []).concat({
        name: modelGenerics(typeParameter),
        namespace: type.name.namespace
      })
    }

    return type
  }
}

/**
 * Utility wrapper around `modelProperty`, as Request classes needs to be handled
 * differently as are described as nested objects, and the body could have two
 * different types, `model.Property[]` (a normal object) or `model.ValueOf` (eg: an array or generic)
 */
function visitRequestOrResponseProperty (member: PropertyDeclaration | PropertySignature): { name: string, properties: model.Property[], valueOf: model.ValueOf | null } {
  const properties: model.Property[] = []
  let valueOf: model.ValueOf | null = null

  const name = member.getName()
  const value = member.getTypeNode()
  assert(member, value != null, `The property ${name} is not defined`)

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
  if (Node.isTypeReference(value)) {
    valueOf = modelType(value)
  } else {
    value.forEachChild(child => {
      assert(
        child,
        Node.isPropertySignature(child) || Node.isPropertyDeclaration(child),
        `Children should be ${ts.SyntaxKind[ts.SyntaxKind.PropertySignature]} or ${ts.SyntaxKind[ts.SyntaxKind.PropertyDeclaration]} but is ${ts.SyntaxKind[child.getKind()]} instead`
      )
      properties.push(modelProperty(child))
    })
  }

  return { name, properties, valueOf }
}
