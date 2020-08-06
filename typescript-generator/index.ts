import fs from 'fs'
import path from 'path'
import { Specification } from '../specification/src/api-specification'
import Domain, {
  ArrayOf,
  Dictionary,
  Type,
  UnionOf,
  ImplementsReference,
  SingleKeyDictionary
} from 'elasticsearch-client-specification/src/domain'

const specification = Specification.load()
let typeDefinitions = ''

const stringTypes = [
  'ActionIds',
  'CategoryId',
  'Date',
  'Field',
  'Fields',
  'IndexMetrics',
  'IndexName',
  'Indices',
  'LongId',
  'Metrics',
  'Name',
  'Names',
  'Node',
  'NodeIds',
  'PropertyName',
  'RelationName',
  'ScrollId',
  'ScrollIds',
  'TaskId',
  'TimeSpan',
  'Timestamp',
  'TypeName',
  'Types',
  'Uri',
]

const numberTypes = [
  'short',
  'byte',
  'integer',
  'long',
  'float',
  'double'
]

const stringOrNumberTypes = [
  'Id',
  'Ids',
  'Routing'
]

const stringOrArrayOfStrings = [
  'StopWords'
]

const interfaceToSkip = [
  'KeyValue'
]

for (const type of specification.types) {
  if (type instanceof Domain.RequestInterface) {
    typeDefinitions += buildRequestInterface(type) + '\n\n'
  } else if (type instanceof Domain.Interface) {
    if (interfaceToSkip.includes(type.name)) continue
    typeDefinitions += buildInterface(type) + '\n\n'
  } else if (type instanceof Domain.Enum) {
    typeDefinitions += buildEnum(type) + '\n\n'
  }
}

fs.writeFileSync(
  path.join(__dirname, '..', 'output', 'typescript', 'types.ts'),
  typeDefinitions.slice(0, -2) // removes last two '\n\n\'
)

function buildInterface (type: Domain.Interface): string {
  if (stringTypes.includes(type.name)) {
    return `export type ${type.name} = string`
  }

  if (numberTypes.includes(type.name)) {
    return `export type ${type.name} = number`
  }

  if (stringOrNumberTypes.includes(type.name)) {
    return `export type ${type.name} = string | number`
  }

  if (stringOrArrayOfStrings.includes(type.name)) {
    return `export type ${type.name} = string | string[]`
  }

  let code = `export interface ${type.name}${buildGeneric(type)}${buildInherits(type)} {\n`
  for (const property of type.properties) {
    if (property.type === undefined) continue
    code += `  ${cleanPropertyName(property.name)}${property.nullable ? '?' : ''}: ${unwrapType(property.type)}\n`
  }
  code += '}'
  return code
}

function buildRequestInterface (type: Domain.RequestInterface): string {
  let code = `export interface ${type.name}${buildGeneric(type)} {\n`
  if (type.path !== undefined) {
    for (const property of type.path) {
      if (property.type === undefined) continue
      code += `  ${cleanPropertyName(property.name)}${property.nullable ? '?' : ''}: ${unwrapType(property.type)}\n`
    }
  }

  if (type.queryParameters !== undefined) {
    for (const property of type.queryParameters) {
      if (property.type === undefined) continue
      code += `  ${cleanPropertyName(property.name)}${property.nullable ? '?' : ''}: ${unwrapType(property.type)}\n`
    }
  }

  if (type.body !== undefined) {
    if (Array.isArray(type.body)) {
      code += '  body: {\n'
      for (const property of type.body) {
        if (property.type === undefined) continue
        code += `    ${cleanPropertyName(property.name)}${property.nullable ? '?' : ''}: ${unwrapType(property.type)}\n`
      }
      code += '  }\n'
    } else {
      code += `  body: ${unwrapType(type.body)}\n`
    }
  }

  code += '}'
  return code
}

function buildEnum (type: Domain.Enum): string {
  if (process.env.ENUM_AS_UNION) {
    const types = type.members.map(member => {
      if (member.stringRepresentation === 'true' || member.stringRepresentation === 'false') {
        return member.stringRepresentation
      }
      return `"${member.stringRepresentation}"`
    })
    return `export type ${type.name} = ${types.join(' | ')}`
  }
  let code = `export enum ${type.name} {\n`
  for (const member of type.members) {
    code += `  ${cleanPropertyName(member.name)} = "${member.stringRepresentation}",\n`
  }
  code += '}'
  return code
}

function unwrapType (type: ArrayOf | Dictionary | Type | UnionOf | ImplementsReference | SingleKeyDictionary): string {
  if (type instanceof ArrayOf) {
    return `${unwrapType(type.of)}[]`
  } else if (type instanceof Dictionary) {
    return `Record<${unwrapType(type.key)}, ${unwrapType(type.value)}>`
  } else if (type instanceof SingleKeyDictionary) {
    return `Record<string, ${unwrapType(type.value)}>`
  } else if (type instanceof UnionOf) {
    return type.items.map(unwrapType).join(' | ')
  } else if (type instanceof ImplementsReference) {
    // TODO: if the closedGenerics is 2 more than there is a generic,
    //       otherwise is just a repetition of the type?
    if (Array.isArray(type.closedGenerics) && type.closedGenerics.length > 1) {
      return `${type.type.name}<${type.closedGenerics.map(unwrapType).join(', ')}>`
    }
    return type.type.name
  } else {
    if (Array.isArray(type.closedGenerics) && type.closedGenerics.length > 0) {
      return `${type.name}<${type.closedGenerics.map(unwrapType).join(', ')}>`
    }
    return type.name
  }
}

function buildGeneric (type: Domain.Interface | Domain.RequestInterface): string {
  if (Array.isArray(type.openGenerics) && type.openGenerics.length > 0) {
    return `<${type.openGenerics.join(', ')}>`
  }
  return ''
}

function buildInherits (type: Domain.Interface | Domain.RequestInterface): string {
  if (Array.isArray(type.inherits) && type.inherits.length > 0) {
    let code = ' extends '
    for (const inherit of type.inherits) {
      code += unwrapType(inherit) + ', '
    }
    return code.slice(0, -2)
  }
  return ''
}

function cleanPropertyName (name: string): string {
  return name.includes('.') || name.includes('-') || name.match(/^(\d|\W)/)
    ? `"${name}"`
    : name
}
