import assert from 'assert'
import fs from 'fs'
import { join, dirname } from 'path'
import * as ts from 'byots'
import Debug from 'debug'
import * as model from './metamodel'
import {
  modelType,
  isApi,
  modelInherits,
  modelGenerics,
  modelEnumDeclaration,
  modelTypeAlias,
  modelProperty
} from './utils'

const debug = Debug('compiler')

const specsFolder = join(__dirname, '..', 'specs')
const tsconfigPath = join(specsFolder, 'tsconfig.json')
const { config } = ts.readConfigFile(tsconfigPath, file => ts.sys.readFile(file))
const commandLine = ts.parseJsonConfigFileContent(config, ts.sys, specsFolder)

export default function compileSpecification (): void {
  const program = ts.createProgram(commandLine.fileNames, commandLine.options)

  // This needs to be executed, otherwise the TypeScript
  // compiler will throw an error ¯\_(ツ)_/¯
  program.getTypeChecker()

  const dump: any[] = []
  for (const file of program.getSourceFiles()) {
    if (!file.path.includes('specs')) continue

    debug(`Compiling file ${file.fileName}`)
    let nameSpace = dirname(file.path)
      .replace(/.*[/\\]specs[/\\]?/, '')
      .replace(/[/\\]/g, '.')
    if (nameSpace === '') nameSpace = 'internal'

    for (const statement of file.statements) {
      dump.push(...compileNode(statement, nameSpace))
    }
  }

  fs.writeFileSync(join(__dirname, 'dump.json'), JSON.stringify(dump, null, 2), 'utf8')

  function compileNode (node: ts.Node, nameSpace: string): model.TypeDefinition[] {
    const declarations: any[] = []
    switch (node.kind) {
      case ts.SyntaxKind.ClassDeclaration:
        assert(ts.isClassDeclaration(node))
        declarations.push(compileClassOrInterfaceDeclaration(node, nameSpace))
        break

      case ts.SyntaxKind.InterfaceDeclaration:
        assert(ts.isInterfaceDeclaration(node))
        declarations.push(compileClassOrInterfaceDeclaration(node, nameSpace))
        break

      case ts.SyntaxKind.EnumDeclaration:
        assert(ts.isEnumDeclaration(node))
        declarations.push(modelEnumDeclaration(node, nameSpace))
        break

      case ts.SyntaxKind.TypeAliasDeclaration:
        assert(ts.isTypeAliasDeclaration(node))
        declarations.push(modelTypeAlias(node, nameSpace))
        break

      // nothing to do here
      case ts.SyntaxKind.FunctionDeclaration:
        break

      default:
        throw new Error(`Unhandled kind ${node.kind}`)
    }
    return declarations
  }
}

function compileClassOrInterfaceDeclaration (declaration: ts.ClassDeclaration | ts.InterfaceDeclaration, nameSpace: string): model.Request | model.Interface {
  assert(declaration.name, 'Anonymous classes should not exists')
  const name = declaration.name.escapedText as string

  // Request defintions neeeds to be handled
  // differently from normal classes
  if (isApi(declaration) && name.endsWith('Request')) {
    const type: model.Request = {
      kind: 'request',
      name: { name, namespace: nameSpace },
      path: new Array<model.Property>(),
      query: new Array<model.Property>()
    }

    ts.forEachChild(declaration, child => {
      switch (child.kind) {
        // we are visiting `path_parts, `query_parameters` or `body`
        case ts.SyntaxKind.PropertySignature:
        case ts.SyntaxKind.PropertyDeclaration: {
          assert(ts.isPropertySignature(child) || ts.isPropertyDeclaration(child))
          const property = visitRequestProperty(child, nameSpace)
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
          type.inherits = (type.inherits ?? []).concat(modelInherits(child, nameSpace))
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
      name: { name, namespace: nameSpace },
      properties: new Array<model.Property>()
    }

    ts.forEachChild(declaration, child => {
      switch (child.kind) {
        // Any property definition
        case ts.SyntaxKind.PropertySignature:
        case ts.SyntaxKind.PropertyDeclaration:
          assert(ts.isPropertySignature(child) || ts.isPropertyDeclaration(child))
          type.properties.push(modelProperty(child, nameSpace))
          break

        // The class is extended, an extended class
        // could accept generics as well
        case ts.SyntaxKind.HeritageClause:
          assert(ts.isHeritageClause(child))
          type.inherits = (type.inherits ?? []).concat(modelInherits(child, nameSpace))
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
function visitRequestProperty (node: ts.PropertySignature | ts.PropertyDeclaration, nameSpace: string): { name: string, properties: model.Property[], valueOf: model.ValueOf | null } {
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
    valueOf = modelType(node.type, nameSpace)
  } else {
    ts.forEachChild(node.type, child => {
      assert(
        ts.isPropertySignature(child) || ts.isPropertyDeclaration(child),
        `Children should be ${ts.SyntaxKind.PropertySignature} or ${ts.SyntaxKind.PropertyDeclaration}, instead got ${child.kind}`
      )
      properties.push(modelProperty(child, nameSpace))
    })
  }

  return { name, properties, valueOf }
}

compileSpecification()
