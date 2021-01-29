import assert from 'assert'
import * as ts from 'byots'
import * as model from './metamodel'

/**
 * Given a TypeScript Node element, it models it according to
 * our metamodel. It automatically models nested types as well.
 */
export function modelType (node: ts.Node, nameSpace: string): model.ValueOf {
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
        value: modelType(children[0], nameSpace)
      }
      return type
    }

    case ts.SyntaxKind.UnionType: {
      assert(ts.isUnionTypeNode(node), `The node is not of type ${ts.SyntaxKind.UnionType} but ${node.kind} instead`)
      const type: model.UnionOf = {
        kind: 'union_of',
        items: node.types.map(node => modelType(node, nameSpace))
      }
      return type
    }

    case ts.SyntaxKind.LiteralType: {
      assert(ts.isLiteralTypeNode(node), `The node is not of type ${ts.SyntaxKind.LiteralType} but ${node.kind} instead`)
      return modelType(node.literal, nameSpace)
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
          const [key, value] = node.typeArguments.map(node => modelType(node, nameSpace))
          const type: model.DictionaryOf = {
            kind: 'dictionary_of',
            key,
            value
          }
          return type
        }

        case 'SingleKeyDictionary': {
          assert(node.typeArguments?.length === 1, 'A SingleKeyDictionary must have one argument')
          const [value] = node.typeArguments.map(node => modelType(node, nameSpace))
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
          const items = node.typeArguments.map(node => modelType(node, nameSpace))
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
          const generics = node.typeArguments?.map(node => modelType(node, nameSpace))
          const type: model.InstanceOf = {
            kind: 'instance_of',
            ...(generics != null && { generics }),
            type: {
              name,
              namespace: nameSpace
            }
          }
          return type
        }
      }
    }

    default:
      throw new Error(`Unhandled node kind ${node.kind}`)
  }
}

/**
 * Given a TypeScript node, returns `true` if the Node
 * represents a rest spec name by looking at the decorators.
 */
export function isApi (node: ts.Node): boolean {
  const decorators = node.decorators
  if (decorators == null) {
    return false
  }

  const decorator = decorators
    .map(decorator => decorator.expression.getText())
    .find(text => text.startsWith('rest_spec_name'))

  return decorator != null
}

/**
 * Given a HeritageClause node returns an Inherits structure.
 * A class could extend from multiple classes, which are
 * defined inside the node typeArguments.
 */
export function modelInherits (node: ts.HeritageClause, nameSpace: string): model.Inherits[] {
  return node.types.map(node => {
    assert(ts.isExpressionWithTypeArguments(node))
    const generics = node.typeArguments?.map(node => modelType(node, nameSpace))
    return {
      type: {
        name: node.getText(),
        namespace: nameSpace
      },
      ...(generics != null && { generics })
    }
  })
}

/**
 *  Generics are compiles as TypeParameterDeclarations by TypeScript,
 *  but all we really need is the name of the parameter, that we will
 *  use as generic. This method given a TypeParameterDeclaration node
 *  will return its name as a string.
 */
export function modelGenerics (node: ts.TypeParameterDeclaration): string {
  return node.symbol.escapedName as string
}

/**
 * Given a EnumDeclaration node, returns an Enum strcture.
 * An enum can be visited with `ts.forEachChild`, but it will
 * become more complex to handle, as one of the children is the enum
 * name as well. An EnumDeclaration node has a members array which
 * only contains the member of the Enum.
 */
export function modelEnumDeclaration (declaration: ts.EnumDeclaration, nameSpace: string): model.Enum {
  const name = declaration.name.escapedText as string
  const members: model.EnumMember[] = []

  for (const member of declaration.members) {
    assert(ts.isEnumMember(member))
    // if the name is not enclosed in single quotes (eg: foo = 1)
    if (ts.isIdentifier(member.name)) {
      members.push({ name: member.name.escapedText as string })
    // if the name is enclosed in single quotes (eg: 'foo-bar' = 1)
    } else if (ts.isStringLiteral(member.name)) {
      members.push({ name: member.name.getText() })
    } else {
      throw new Error(`Unhandled enum member: ${name}`)
    }
  }

  return {
    name: {
      name,
      namespace: nameSpace
    },
    kind: 'enum',
    members
  }
}

/**
 * Given a TypeAliasDeclaration node, returns a TypeAlias structure.
 * A TypeAliasDeclaration has two main properties, `name` and `type`.
 * The first one is the alias name, the second one is the type that
 * still needs to be modeled.
 */
export function modelTypeAlias (declaration: ts.TypeAliasDeclaration, nameSpace: string): model.TypeAlias {
  return {
    name: {
      name: declaration.name.escapedText as string,
      namespace: nameSpace
    },
    kind: 'type_alias',
    type: modelType(declaration.type, nameSpace)
  }
}

/**
 * Given a PropertySignature or PropertyDeclaration node, returns a Property strcture.
 * A property signature/declaration has two main properties, `symbol` and `type`.
 * The first one is the property name, the second one is the type that
 * still needs to be modeled.
 */
export function modelProperty (node: ts.PropertySignature | ts.PropertyDeclaration, nameSpace: string): model.Property {
  assert(node.type, 'Missing node type')
  const name = node.symbol.escapedName as string
  return {
    name,
    required: node.questionToken == null,
    type: modelType(node.type, nameSpace)
  }
}
