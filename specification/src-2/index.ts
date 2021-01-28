import assert from 'assert'
import { join, dirname } from 'path'
import * as ts from 'byots'
import * as model from './metamodel'
import Debug from 'debug'

const debug = Debug('compiler')

const specsFolder = join(__dirname, '..', 'specs')
const tsconfigPath = join(specsFolder, 'tsconfig.json')
const { config } = ts.readConfigFile(tsconfigPath, file => ts.sys.readFile(file))
const commandLine = ts.parseJsonConfigFileContent(config, ts.sys, specsFolder)

export default function compileSpecification (): void {
  const program = ts.createProgram(commandLine.fileNames, commandLine.options)
  const checker = program.getTypeChecker()

  for (const file of program.getSourceFiles()) {
    if (!file.path.includes('specs')) continue

    debug(`Compiling file ${file.fileName}`)
    let nameSpace = dirname(file.path)
      .replace(/.*[/\\]specs[/\\]?/, '')
      .replace(/[/\\]/g, '.')
    if (nameSpace === '') nameSpace = 'internal'

    for (const statement of file.statements) {
      compileNode(statement, nameSpace)
    }
  }

  function compileNode (node: ts.Node, nameSpace: string): void {
    switch (node.kind) {
      case ts.SyntaxKind.ClassDeclaration:
        compileClassDeclaration(node as ts.ClassDeclaration, nameSpace)
        break
      case ts.SyntaxKind.InterfaceDeclaration:
        break
      case ts.SyntaxKind.EnumDeclaration:
        break
      case ts.SyntaxKind.TypeAliasDeclaration:
        break
      default:
        // throw new Error(`Unhandled kind ${node.kind}`)
    }
  }
}

function compileClassDeclaration (declaration: ts.ClassDeclaration, nameSpace: string): void {
  assert(declaration.name, 'Anonymous classes should not exists')
  const name = declaration.name.escapedText as string
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
          const property = visitRequestProperty(child)
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
        }

        // The class is extended
        case ts.SyntaxKind.HeritageClause: {
          console.log('heritage clause')
          break
        }

        // The class accepts one or more generics
        case ts.SyntaxKind.TypeParameter: {
          console.log('type parameter')
          break
        }

        // Nothing to do
        case ts.SyntaxKind.Decorator:
        case ts.SyntaxKind.Identifier:
          break

        default:
          throw new Error(`Unhandled kind ${child.kind} in class ${name}`)
      }
    })
  } else {
    // ts.forEachChild(declaration, visitProperty)
  }
}

function visitRequestProperty (node: ts.PropertySignature | ts.PropertyDeclaration): { name: string, properties: model.Property[], valueOf: model.ValueOf | null } {
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
  // directly by "unwrapped" with `visitType` because if you navigate the children of a TypeReference
  // you will lose the context and crafting the types becomes really hard.
  if (node.type.kind === ts.SyntaxKind.TypeReference) {
    valueOf = visitType(node.type)
  } else {
    ts.forEachChild(node.type, child => {
      assert(
        ts.isPropertySignature(child) || ts.isPropertyDeclaration(child),
        `Children should be ${ts.SyntaxKind.PropertySignature} or ${ts.SyntaxKind.PropertyDeclaration}, instead got ${child.kind}`
      )
      properties.push(visitProperty(child))
    })
  }

  return { name, properties, valueOf }
}

function visitProperty (node: ts.PropertySignature | ts.PropertyDeclaration): model.Property {
  assert(node.type, 'Missing node type')
  const name = node.symbol.escapedName as string
  return {
    name,
    required: node.questionToken == null,
    type: visitType(node.type)
  }
}

function visitType (node: ts.Node): model.ValueOf {
  switch (node.kind) {
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
      let children: ts.Node[] = []
      ts.forEachChild(node, child => children.push(child))
      children = children.filter(child => kinds.some(kind => kind === child.kind))
      assert(children.length === 1, `Expected array to have 1 usable child but saw ${children.length}`)

      const type: model.ArrayOf = {
        kind: 'array_of',
        value: visitType(children[0])
      }
      return type
    }

    case ts.SyntaxKind.UnionType: {
      assert(ts.isUnionTypeNode(node), `The node is not of type ${ts.SyntaxKind.UnionType} but ${node.kind} instead`)
      const type: model.UnionOf = {
        kind: 'union_of',
        items: node.types.map(node => visitType(node))
      }
      return type
    }

    case ts.SyntaxKind.LiteralType: {
      assert(ts.isLiteralTypeNode(node), `The node is not of type ${ts.SyntaxKind.LiteralType} but ${node.kind} instead`)
      return visitType(node.literal)
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
      assert(ts.isTypeReferenceNode(node), `The node is not of type ${ts.SyntaxKind.TypeReference} but ${node.kind} instead`)
      assert(ts.isIdentifier(node.typeName))

      const name = node.typeName.escapedText as string
      switch (name) {
        case 'Dictionary':
        case 'AdditionalProperties': {
          assert(node.typeArguments?.length === 2, 'A Dictionary must have two arguments')
          const [key, value] = node.typeArguments.map(node => visitType(node))
          const type: model.DictionaryOf = {
            kind: 'dictionary_of',
            key,
            value
          }
          return type
        }

        case 'SingleKeyDictionary': {
          assert(node.typeArguments?.length === 1, 'A SingleKeyDictionary must have one argument')
          const [value] = node.typeArguments.map(node => visitType(node))
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
            node.typeArguments != null && node.typeArguments.length >= 2,
            'A Union must have at least two arguments'
          )
          const items = node.typeArguments.map(node => visitType(node))
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
          const generics = node.typeArguments?.map(node => visitType(node))
          const type: model.InstanceOf = {
            kind: 'instance_of',
            ...(generics != null && { generics }),
            type: {
              name,
              namespace: 'internal'
            }
          }
          return type
        }
      }
    }

    default:
      // @ts-expect-error
      return node.kind
  }
}

function isApi (node: ts.Node): boolean {
  const decorators = node.decorators
  if (decorators == null) {
    return false
  }

  const decorator = decorators
    .map(decorator => decorator.expression.getText())
    .find(text => text.startsWith('rest_spec_name'))

  return decorator != null
}

compileSpecification()
