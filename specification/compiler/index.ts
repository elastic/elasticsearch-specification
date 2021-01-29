import assert from 'assert'
import fs from 'fs'
import { join, dirname } from 'path'
import * as ts from 'byots'
import Debug from 'debug'
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
  getNameSpace
} from './utils'

const debug = Debug('compiler')

const specsFolder = join(__dirname, '..', 'specs')
const tsconfigPath = join(specsFolder, 'tsconfig.json')
const { config } = ts.readConfigFile(tsconfigPath, file => ts.sys.readFile(file))
const commandLine = ts.parseJsonConfigFileContent(config, ts.sys, specsFolder)
const jsonSpec = buildJsonSpec()

type MappingsType = Map<string, {
  request: model.TypeName,
  response: model.TypeName
}>

export default function compileSpecification (): void {
  const program = ts.createProgram(commandLine.fileNames, commandLine.options)
  const checker = program.getTypeChecker()

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
  for (const file of program.getSourceFiles()) {
    if (!file.path.includes('specs')) continue
    debug(`Compiling file ${file.fileName}`)
    for (const statement of file.statements) {
      model.types.push(...compileNode(statement, checker, mappings))
    }
  }

  // Create endpoints and merge them with
  // the recorded mappings if present.
  for (const [api, spec] of jsonSpec.entries()) {
    const endpoint: model.Endpoint = {
      name: api,
      description: spec.documentation.description,
      docUrl: spec.documentation.url,
      stability: spec.stability as model.Stability,
      request: null,
      requestBodyRequired: Boolean(spec.body?.required),
      response: null,
      urls: spec.url.paths.map(path => {
        return {
          path: path.path,
          methods: path.method,
          ...(path.deprecated && { deprecation: path.deprecated })
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

  fs.writeFileSync(join(__dirname, 'dump.json'), JSON.stringify(model, null, 2), 'utf8')
}

function compileNode (node: ts.Node,  checker: ts.TypeChecker, mappings: MappingsType): model.TypeDefinition[] {
  const declarations: model.TypeDefinition[] = []

  switch (node.kind) {
    case ts.SyntaxKind.ClassDeclaration:
      assert(ts.isClassDeclaration(node))
      declarations.push(compileClassOrInterfaceDeclaration(node, checker, mappings))
      break

    case ts.SyntaxKind.InterfaceDeclaration:
      assert(ts.isInterfaceDeclaration(node))
      declarations.push(compileClassOrInterfaceDeclaration(node, checker, mappings))
      break

    case ts.SyntaxKind.EnumDeclaration:
      assert(ts.isEnumDeclaration(node))
      declarations.push(modelEnumDeclaration(node, checker))
      break

    case ts.SyntaxKind.TypeAliasDeclaration:
      assert(ts.isTypeAliasDeclaration(node))
      declarations.push(modelTypeAlias(node, checker))
      break

    // nothing to do here
    case ts.SyntaxKind.FunctionDeclaration:
      break

    default:
      throw new Error(`Unhandled kind ${node.kind}`)
  }

  return declarations
}

function compileClassOrInterfaceDeclaration (declaration: ts.ClassDeclaration | ts.InterfaceDeclaration,  checker: ts.TypeChecker, mappings: MappingsType): model.Request | model.Interface {
  assert(declaration.name, 'Anonymous classes should not exists')
  const name = declaration.name.escapedText as string

  // Request defintions neeeds to be handled
  // differently from normal classes
  if (isApi(declaration) && name.endsWith('Request')) {
    // Store the mappings for the current endpoint
    mappings.set(getApiName(declaration), {
      request: { name, namespace: getNameSpace(declaration, checker) },
      response: { name: `${name.slice(0, -7)}Response`, namespace: getNameSpace(declaration, checker) }
    })

    const type: model.Request = {
      kind: 'request',
      name: { name, namespace: getNameSpace(declaration, checker) },
      path: new Array<model.Property>(),
      query: new Array<model.Property>()
    }

    ts.forEachChild(declaration, child => {
      switch (child.kind) {
        // we are visiting `path_parts, `query_parameters` or `body`
        case ts.SyntaxKind.PropertySignature:
        case ts.SyntaxKind.PropertyDeclaration: {
          assert(ts.isPropertySignature(child) || ts.isPropertyDeclaration(child))
          const property = visitRequestProperty(child, checker)
          if (property.name === 'path_parts') {
            type.path = property.properties
          } else if (property.name === 'query_parameters') {
            type.query = property.properties
          } else {
            // the body can either by a value (eg Array<string> or an object with properties)
            type.body = property.valueOf != null
              ? { kind: 'value', value: property.valueOf }
              : { kind: 'properties', properties: property.properties }
          }
          break
        }

        // The class is extended, an extended class
        // could accept generics as well
        case ts.SyntaxKind.HeritageClause:
          assert(ts.isHeritageClause(child))
          type.inherits = (type.inherits ?? []).concat(modelInherits(child, checker))
          break

        // The class accepts one or more generics
        case ts.SyntaxKind.TypeParameter:
          assert(ts.isTypeParameterDeclaration(child))
          type.generics = (type.generics ?? []).concat(modelGenerics(child))
          break

        // Nothing to do
        case ts.SyntaxKind.Decorator:
        case ts.SyntaxKind.Identifier:
          break

        default:
          throw new Error(`Unhandled kind ${child.kind} in class ${name}`)
      }
    })

    return type

  // Every other class or interface will be handled here
  } else {
    const type: model.Interface = {
      kind: 'interface',
      name: { name, namespace: getNameSpace(declaration, checker) },
      properties: new Array<model.Property>()
    }

    ts.forEachChild(declaration, child => {
      switch (child.kind) {
        // Any property definition
        case ts.SyntaxKind.PropertySignature:
        case ts.SyntaxKind.PropertyDeclaration:
          assert(ts.isPropertySignature(child) || ts.isPropertyDeclaration(child))
          type.properties.push(modelProperty(child, checker))
          break

        // The class is extended, an extended class could accept generics as well,
        // Implements will be catched here as well, they can be differentiated
        // by looking as `node.token`, which can either be
        // `ts.SyntaxKind.ExtendsKeyword` or `ts.SyntaxKind.ImplementsKeyword`
        case ts.SyntaxKind.HeritageClause:
          assert(ts.isHeritageClause(child))
          if (child.token === ts.SyntaxKind.ExtendsKeyword) {
            type.inherits = (type.inherits ?? []).concat(modelInherits(child, checker))
          } else if (child.token === ts.SyntaxKind.ImplementsKeyword) {
            if (isKnownBehavior(child)) {
              type.behaviors = (type.behaviors ?? []).concat(modelImplements(child, checker))
              // attachedBehaviors must contain unique values
              type.attachedBehaviors = Array.from(
                new Set((type.attachedBehaviors ?? []).concat(type.behaviors.map(b => b.type.name)))
              )
            } else {
              type.implements = (type.implements ?? []).concat(modelImplements(child, checker))
            }
          } else {
            throw new Error(`Unhandled heritage token ${child.token} in class ${name}`)
          }
          break

        // The class accepts one or more generics
        case ts.SyntaxKind.TypeParameter:
          assert(ts.isTypeParameterDeclaration(child))
          type.generics = (type.generics ?? []).concat(modelGenerics(child))
          break

        // Nothing to do
        case ts.SyntaxKind.Decorator:
        case ts.SyntaxKind.Identifier:
          break

        default:
          throw new Error(`Unhandled kind ${child.kind} in class ${name}`)
      }
    })

    return type
  }
}

/**
 * Utility wrapper around `modelProperty`, as Request classes needs to be handled
 * differently as are described as nested objects, and the body could have two
 * different types, `model.Property[]` (a normal object) or `model.ValueOf` (eg: an array or generic)
 */
function visitRequestProperty (node: ts.PropertySignature | ts.PropertyDeclaration,  checker: ts.TypeChecker): { name: string, properties: model.Property[], valueOf: model.ValueOf | null } {
  assert(node.type)
  const name = node.symbol.escapedName as string
  const properties: model.Property[] = []
  let valueOf: model.ValueOf | null = null

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
  if (node.type.kind === ts.SyntaxKind.TypeReference) {
    valueOf = modelType(node.type, checker)
  } else {
    ts.forEachChild(node.type, child => {
      assert(
        ts.isPropertySignature(child) || ts.isPropertyDeclaration(child),
        `Children should be ${ts.SyntaxKind.PropertySignature} or ${ts.SyntaxKind.PropertyDeclaration}, instead got ${child.kind}`
      )
      properties.push(modelProperty(child, checker))
    })
  }

  return { name, properties, valueOf }
}

compileSpecification()
