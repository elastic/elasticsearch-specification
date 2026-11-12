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
import { ESLintUtils } from '@typescript-eslint/utils'
import ts from 'typescript'
import { parseCommaSeparated } from './jsdoc.js'

// The parser of the linted project can load a different TypeScript version than this package, and
// the numbers of the syntax kinds change between versions. These helpers therefore never look at
// the kind of a node. They ask the type checker of the program, and they use symbol flags, which
// keep their values between versions.
const { SymbolFlags } = ts

export function typeServices (context) {
  const services = ESLintUtils.getParserServices(context)
  const checker = services.program.getTypeChecker()
  const tsNode = (node) => services.esTreeNodeToTSNodeMap.get(node)

  return {
    checker,

    /** The type that a type annotation of the linted file stands for. */
    typeOf (typeNode) {
      return checker.getTypeFromTypeNode(tsNode(typeNode))
    },

    /** The instance type of a class or interface declaration of the linted file. */
    declaredType (declaration) {
      return checker.getDeclaredTypeOfSymbol(checker.getSymbolAtLocation(tsNode(declaration.id)))
    },

    /**
     * True when a type annotation uses the type alias `name`, directly or through other type aliases.
     * Classes are not followed.
     */
    referencesAlias (typeNode, name) {
      const seen = new Set()
      const visit = (node) => {
        // Only a type reference has a `typeName`.
        if (node.typeName != null) {
          if (node.typeName.escapedText === name) return true

          let symbol = checker.getSymbolAtLocation(node.typeName)
          if (symbol != null && symbol.flags & SymbolFlags.Alias) symbol = checker.getAliasedSymbol(symbol)
          if (symbol != null && symbol.flags & SymbolFlags.TypeAlias && !seen.has(symbol)) {
            seen.add(symbol)
            if (symbol.declarations.some((declaration) => visit(declaration.type))) return true
          }
        }
        return node.forEachChild(visit) === true
      }
      return visit(tsNode(typeNode))
    },

    /**
     * The member types of a union in source order. A member that is an alias of a union gives its
     * own members, which is how the compiler flattens a tagged union.
     */
    unionMembers (typeNode) {
      const written = typeNode.type === 'TSUnionType' ? typeNode.types : [typeNode]
      return written.flatMap((member) => {
        const type = checker.getTypeFromTypeNode(tsNode(member))
        // Only a reference can be an alias. TypeScript also sees `boolean` and an enum as unions.
        const isAliasOfUnion = member.type === 'TSTypeReference' && type.isUnion() && enumOfSymbol(type.symbol) == null
        return isAliasOfUnion ? type.types : [type]
      })
    }
  }
}

export function isClassType (type) {
  return ((type.symbol?.flags ?? 0) & (SymbolFlags.Class | SymbolFlags.Interface)) !== 0
}

export function isInlineObjectType (type) {
  return ((type.symbol?.flags ?? 0) & SymbolFlags.TypeLiteral) !== 0
}

export function isOptional (property) {
  return (property.flags & SymbolFlags.Optional) !== 0
}

function enumOfSymbol (symbol) {
  if (symbol == null) return undefined
  if (symbol.flags & SymbolFlags.Enum) return symbol
  // The type of an enum with one member is the type of that member.
  if (symbol.flags & SymbolFlags.EnumMember) return symbol.parent
  return undefined
}

/** The enum that a type stands for: the enum, a list of it, or a union of those such as `T | T[]`. */
export function enumSymbol (checker, type) {
  const direct = enumOfSymbol(type.symbol)
  if (direct != null) return direct
  if (checker.isArrayType(type)) return enumSymbol(checker, checker.getTypeArguments(type)[0])
  if (!type.isUnion()) return undefined

  // A union with a second type accepts values that are not members, so it is not an enum.
  const found = type.types.map((member) => enumSymbol(checker, member))
  return found.every((symbol) => symbol === found[0]) ? found[0] : undefined
}

/** The values that Elasticsearch accepts for an enum: the value of each member and its `@aliases`. */
export function enumAcceptedValues (checker, symbol) {
  const values = new Set()
  symbol.exports.forEach((member) => {
    const constant = checker.getConstantValue(member.valueDeclaration)
    values.add(typeof constant === 'string' ? constant : member.getName())

    const aliases = jsDocTagText(checker, member, 'aliases')
    if (aliases != null) parseCommaSeparated(aliases).forEach((alias) => values.add(alias))
  })
  return values
}

/** The value of a string or boolean literal type, or undefined for any other type. */
export function literalValue (checker, type) {
  if (type.isStringLiteral()) return type.value
  const text = checker.typeToString(type)
  return text === 'true' || text === 'false' ? text : undefined
}

/** The text of a JSDoc tag on the declaration of a symbol, which can be in another file. */
export function jsDocTagText (checker, symbol, name) {
  const tag = symbol.getJsDocTags(checker).find((t) => t.name === name)
  return tag == null ? undefined : (tag.text ?? []).map((part) => part.text).join('').trim()
}
