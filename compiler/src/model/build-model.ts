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

import { mkdirSync, writeFileSync } from 'fs'
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
  modelInherits,
  modelProperty,
  modelType,
  modelTypeAlias,
  parseVariantNameTag,
  parseVariantsTag,
  verifyUniqueness,
  parseJsDocTags,
  deepEqual,
  sourceLocation, sortTypeDefinitions, parseDeprecation,
  mediaTypeToStringArray
} from './utils'

export function compileSpecification (specsFolder: string, outputFolder: string): model.Model {
  const tsConfigFilePath = join(specsFolder, 'tsconfig.json')
  const project = new Project({ tsConfigFilePath })
  const endpointMappings: Record<string, model.Endpoint> = {}

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

  mkdirSync(join(outputFolder, 'dangling-types'), { recursive: true })
  writeFileSync(
    join(outputFolder, 'dangling-types', 'dangling.csv'),
    definedButNeverUsed.join('\n'),
    { encoding: 'utf8', flag: 'w' }
  )

  // Visit all class, interface, enum and type alias definitions
  for (const declaration of declarations.interfaces) {
    const name = declaration.getName()
    assert(declaration, name != null, 'Anonymous definitions should not exists')

    if (name === 'Response') {
      assert(
        declaration,
        Node.isClassDeclaration(declaration),
        `Response definitions must be declared as classes: ${name}`
      )
    }

    if (name === 'Request') {
      model.types.push(compileRequest(declaration, endpointMappings, declarations.enums))
    } else {
      model.types.push(compileType(declaration))
    }
  }

  for (const declaration of declarations.classes) {
    const name = declaration.getName()
    assert(declaration, name != null, 'Anonymous definitions should not exists')

    if (name === 'Request') {
      assert(
        declaration,
        Node.isInterfaceDeclaration(declaration),
        `Request definitions must be declared as interfaces: ${name}`
      )
    }

    if (name === 'Request' || name === 'Response') {
      model.types.push(compileResponse(declaration))
    } else {
      model.types.push(compileType(declaration))
    }
  }

  for (const declaration of declarations.enums) {
    model.types.push(modelEnumDeclaration(declaration))
  }

  for (const declaration of declarations.typeAliases) {
    model.types.push(modelTypeAlias(declaration))
  }

  // Sort the types in alphabetical order
  sortTypeDefinitions(model.types)

  const sortedEndpointKeys = Object.keys(endpointMappings).sort()
  for (const key of sortedEndpointKeys) {
    model.endpoints.push(endpointMappings[key])
  }

  return model
}

function compileRequest(declaration: InterfaceDeclaration, mappings: Record<string, model.Endpoint>, allEnums: EnumDeclaration[]): model.Request {
  const name = declaration.getName()

  let type: model.Request | model.Response
  const namespace = getNameSpace(declaration)
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

  if (type.description !== '' && type.description !== null && type.description !== undefined) {
    mapping.description = type.description
  }

  let pathMember: Node | null = null
  let bodyProperties: model.Property[] = []
  let bodyValue: model.ValueOf | null = null
  let bodyMember: Node | null = null

  // collect path/query/body properties
  for (const member of declaration.getMembers()) {
    // we are visiting `urls`, `path_parts, `query_parameters` or `body`
    assert(
      member,
      Node.isPropertyDeclaration(member) || Node.isPropertySignature(member),
      'Class and interfaces can only have property declarations or signatures'
    )
    const name = member.getName()
    if (name === 'urls') {
      // Overwrite the endpoint urls read from the json-rest-spec
      // TODO: once all spec files are using it, make it mandatory.
      mapping.urls = visitUrls(member)
    } else if (name === 'path_parts') {
      const property = visitRequestOrResponseProperty(member)
      assert(member, property.properties.length > 0, 'There is no need to declare an empty object path_parts, just remove the path_parts declaration.')
      pathMember = member
      type.path = property.properties
    } else if (name === 'request_media_type' || name === 'response_media_type') {
      // add those property to requestMediaType and responseMediaType of the endpoint
      const mediaType = (member as PropertySignature).getStructure().type as string
      if (name === 'request_media_type') {
        mapping.requestMediaType = mediaTypeToStringArray(mediaType, allEnums)
      } else if (name === 'response_media_type') {
        mapping.responseMediaType = mediaTypeToStringArray(mediaType, allEnums)
      }
    } else if (name === 'query_parameters') {
      const property = visitRequestOrResponseProperty(member)
      assert(member, property.properties.length > 0, 'There is no need to declare an empty object query_parameters, just remove the query_parameters declaration.')
      type.query = property.properties
    } else if (name === 'body') {
      const property = visitRequestOrResponseProperty(member)
      bodyMember = member
      if (property.valueOf != null) {
        bodyValue = property.valueOf
      } else {
        assert(member, property.properties.length > 0, 'There is no need to declare an empty object body, just remove the body declaration.')
        bodyProperties = property.properties
      }
    } else {
      assert(member, false, `Unknown request property: ${name}`)
    }
  }

  // validate path properties
  // list of unique dynamic parameters
  const urlTemplateParams = [...new Set(
    mapping.urls.flatMap(url => url.path.split('/')
      .filter(part => part.includes('{'))
      .map(part => part.slice(1, -1))
    )
  )]
  const methods = [...new Set(mapping.urls.flatMap(url => url.methods))]

  for (const part of type.path) {
    assert(
      pathMember as Node,
      urlTemplateParams.includes(part.name),
      `The property '${part.name}' does not exist in the url template`
    )
    if (type.query.map(p => p.name).includes(part.name)) {
      const queryType = type.query.find(property => property != null && property.name === part.name) as model.Property
      if (!deepEqual(queryType.type, part.type)) {
        assert(pathMember as Node, part.codegenName != null, `'${part.name}' already exist in the query_parameters with a different type, you should define an @codegen_name.`)
        assert(pathMember as Node, !type.query.map(p => p.codegenName ?? p.name).includes(part.codegenName), `The codegen_name '${part.codegenName}' already exists as parameter in query_parameters.`)
      }
    }
    if (bodyProperties.map(p => p.name).includes(part.name)) {
      const bodyType = bodyProperties.find(property => property != null && property.name === part.name) as model.Property
      if (!deepEqual(bodyType.type, part.type)) {
        assert(pathMember as Node, part.codegenName != null, `'${part.name}' already exist in the body with a different type, you should define an @codegen_name.`)
        assert(pathMember as Node, !bodyProperties.map(p => p.codegenName ?? p.name).includes(part.codegenName), `The codegen_name '${part.codegenName}' already exists as parameter in body.`)
      }
    }
  }

  // validate body
  if (bodyMember != null) {
    mapping.requestBodyRequired = !(bodyMember as PropertySignature).hasQuestionToken()
    assert(
      bodyMember,
      methods.some(method => ['POST', 'PUT', 'DELETE'].includes(method)),
        `${namespace}.${name} can't have a body, allowed methods: ${methods.join(', ')}`
    )
  }
  // the body can either be a value (eg Array<string> or an object with properties)
  if (bodyValue != null) {
    // Propagate required body value nature based on TS question token being present.
    // Overrides the value set by spec files.
    mapping.requestBodyRequired = !(bodyMember as PropertySignature).hasQuestionToken()

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
        !type.path.map(p => p.codegenName ?? p.name).concat(type.query.map(p => p.codegenName ?? p.name)).includes(tags.codegen_name),
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

  // If the body wasn't set and we have a parent class, then it's a property body with no additional properties
  if (type.body.kind === 'no_body' && type.inherits != null) {
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

  for (const typeParameter of declaration.getTypeParameters()) {
    type.generics = (type.generics ?? []).concat({
      name: modelGenerics(typeParameter),
      namespace: type.name.namespace + '.' + type.name.name
    })
  }

  return type
}


function compileResponse(declaration: ClassDeclaration): model.Response {
  const name = declaration.getName()
  assert(declaration, name != null, 'Anonymous definitions should not exists')

  let type: model.Request | model.Response
  type = {
    specLocation: sourceLocation(declaration),
    kind: 'response',
    name: { name, namespace: getNameSpace(declaration) },
    body: { kind: 'no_body' }
  }

  for (const member of declaration.getMembers()) {
    // we are visiting `path_parts, `query_parameters` or `body`
    assert(
      member,
      Node.isPropertyDeclaration(member) || Node.isPropertySignature(member),
      'Class and interfaces can only have property declarations or signatures'
    )
    if (member.getName() === 'body') {
      const property = visitRequestOrResponseProperty(member)
      // the body can either by a value (eg Array<string> or an object with properties)
      if (property.valueOf != null) {
        if (property.valueOf.kind === 'instance_of' && property.valueOf.type.name === 'Void') {
          type.body = { kind: 'no_body' }
        } else {
          const tags = parseJsDocTags((member as PropertySignature).getJsDocs())
          assert(
            member as Node,
            tags.codegen_name != null,
            'You should configure a body @codegen_name'
          )
          type.body = {
            kind: 'value',
            value: property.valueOf,
            codegenName: tags.codegen_name
          }
        }
      } else {
        type.body = { kind: 'properties', properties: property.properties }
      }
    } else if (member.getName() === 'exceptions') {
      const exceptions: model.ResponseException[] = []
      const property = member.getTypeNode()
      assert(
        property,
        Node.isTupleTypeNode(property),
        'Exceptionlures should be an array.'
      )
      for (const element of property.getElements()) {
        const exception: model.ResponseException = {
          statusCodes: [],
          body: { kind: 'no_body' }
        }
        element.forEachChild(child => {
          assert(
            child,
            Node.isPropertySignature(child) || Node.isPropertyDeclaration(child),
            `Children should be ${ts.SyntaxKind[ts.SyntaxKind.PropertySignature]} or ${ts.SyntaxKind[ts.SyntaxKind.PropertyDeclaration]} but is ${ts.SyntaxKind[child.getKind()]} instead`
          )
          const jsDocs = child.getJsDocs()
          if (jsDocs.length > 0) {
            exception.description = jsDocs[0].getDescription().replace(/\r/g, '')
          }
          if (child.getName() === 'statusCodes') {
            const value = child.getTypeNode()
            assert(value, Node.isTupleTypeNode(value), 'statusCodes should be an array.')
            for (const code of value.getElements()) {
              assert(code, Node.isLiteralTypeNode(code) && Number.isInteger(Number(code.getText())), 'Status code values should a valid integer')
              assert(code, STATUS_CODES[code.getText()] != null, `${code.getText()} is not a valid status code`)
              exception.statusCodes.push(Number(code.getText()))
            }
          } else if (child.getName() === 'body') {
            const property = visitRequestOrResponseProperty(child)
            // the body can either by a value (eg Array<string> or an object with properties)
            if (property.valueOf != null) {
              if (property.valueOf.kind === 'instance_of' && property.valueOf.type.name === 'Void') {
                exception.body = { kind: 'no_body' }
              } else {
                exception.body = { kind: 'value', value: property.valueOf }
              }
            } else {
              exception.body = { kind: 'properties', properties: property.properties }
            }
          } else {
            assert(child, false, 'Exception.body and Exception.statusCode are the only Exception properties supported')
          }
        })
        exceptions.push(exception)
      }
      type.exceptions = exceptions
    } else {
      assert(member, false, 'Response.body and Response.exceptions are the only Response properties supported')
    }
  }

  assert(
    declaration,
    declaration.getHeritageClauses().length === 0,
    'Responses cannot be extended'
  )


  for (const typeParameter of declaration.getTypeParameters()) {
    type.generics = (type.generics ?? []).concat({
      name: modelGenerics(typeParameter),
      namespace: type.name.namespace + '.' + type.name.name
    })
  }

  return type
}


function compileType (declaration: ClassDeclaration | InterfaceDeclaration): model.Interface | model.Enum {
  const name = declaration.getName()
  assert(declaration, name != null, 'Anonymous definitions should not exists')

  const type: model.Interface = {
    specLocation: sourceLocation(declaration),
    kind: 'interface',
    name: { name, namespace: getNameSpace(declaration) },
    properties: new Array<model.Property>()
  }

  const jsDocs = declaration.getJsDocs()
  hoistTypeAnnotations(type, jsDocs)

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
    try {
      const property = modelProperty(member)
      if (type.variants?.kind === 'container' && property.containerProperty == null) {
        assert(
          member,
          !property.required,
          'All @variants container properties must be optional'
        )
      }
      type.properties.push(property)
    } catch (e) {
      const name = declaration.getName()
      if (name !== undefined) {
        console.log(`failed to parse ${name}, reason:`, e.message)
      } else {
        console.log('failed to parse field, reason:', e.message)
      }
      process.exit(1)
    }
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
        type.behaviors = (type.behaviors ?? []).concat(modelBehaviors(implement, jsDocs))
      }
    }
  }

  for (const typeParameter of declaration.getTypeParameters()) {
    type.generics = (type.generics ?? []).concat({
      name: modelGenerics(typeParameter),
      namespace: type.name.namespace + '.' + type.name.name
    })
  }

  return type
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
  if (Node.isTypeReference(value) || Node.isUnionTypeNode(value)) {
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

/**
 * Parse the 'urls' property of a request definition. Format is:
 * ```
 * urls: [
 *   {
 *     /** \@deprecated 1.2.3 Use something else
 *     path: '/some/path',
 *     methods: ["GET", "POST"]
 *   }
 * ]
 * ```
 */
function visitUrls (member: PropertyDeclaration | PropertySignature): model.UrlTemplate[] {
  const value = member.getTypeNode()

  // Literal arrays are exposed as tuples by ts-morph
  assert(value, Node.isTupleTypeNode(value), '"urls" should be an array')

  const result: model.UrlTemplate[] = []

  value.forEachChild(urlNode => {
    assert(urlNode, Node.isTypeLiteral(urlNode), '"urls" members should be objects')

    const urlTemplate: any = {}

    urlNode.forEachChild(node => {
      assert(node, Node.isPropertySignature(node), "Expecting 'path' and 'methods' properties")

      const name = node.getName()
      const propValue = node.getTypeNode()

      if (name === 'path') {
        assert(propValue, Node.isLiteralTypeNode(propValue), '"path" should be a string')

        const pathLit = propValue.getLiteral()
        assert(pathLit, Node.isStringLiteral(pathLit), '"path" should be a string')

        urlTemplate.path = pathLit.getLiteralValue()

        // Deprecation
        const jsDoc = node.getJsDocs()
        const tags = parseJsDocTags(jsDoc)
        const deprecation = parseDeprecation(tags, jsDoc)
        if (deprecation != null) {
          urlTemplate.deprecation = deprecation
        }
        if (Object.keys(tags).length > 0) {
          assert(jsDoc, false, `Unknown annotations: ${Object.keys(tags).join(', ')}`)
        }
      } else if (name === 'methods') {
        assert(propValue, Node.isTupleTypeNode(propValue), '"methods" should be an array')

        const methods: string[] = []
        propValue.forEachChild(node => {
          assert(node, Node.isLiteralTypeNode(node), '"methods" should contain strings')

          const nodeLit = node.getLiteral()
          assert(nodeLit, Node.isStringLiteral(nodeLit), '"methods" should contain strings')

          methods.push(nodeLit.getLiteralValue())
        })
        assert(node, methods.length > 0, "'methods' should not be empty")
        urlTemplate.methods = methods
      } else {
        assert(node, false, "Expecting 'path' or 'methods'")
      }
    })

    assert(urlTemplate, urlTemplate.path, "Missing required property 'path'")
    assert(urlTemplate, urlTemplate.methods, "Missing required property 'methods'")

    result.push(urlTemplate)
  })

  return result
}
