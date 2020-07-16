/* tslint:disable:no-console */
import { Specification } from '../specification/src/api-specification'
import Domain, { ArrayOf, Dictionary, Type, UnionOf } from 'elasticsearch-client-specification/src/domain'
import fs from 'fs'

const specification = Specification.load()

if (specification.domain_errors.length + specification.endpoint_errors.length !== 0) {
  if (specification.endpoint_errors.length > 0) console.error('The specification contains the following endpoint mapping errors:')
  for (const e of specification.endpoint_errors) console.error('  - ' + e)
// tslint:disable-next-line:max-line-length
} else console.log('The specification contains no errors in any of the ' + specification.endpoints.length + ' endpoints yielding ' + specification.types.length + ' types')

const $instanceOf = (instance: Domain.InstanceOf) => {
  // Type|ArrayOf|Dictionary|UnionOf;
  if (instance instanceof Type) return `${instance.name}`
  else if (instance instanceof ArrayOf) return `${$instanceOf(instance.of)}[]`
  else if (instance instanceof Dictionary) return `Record<${$instanceOf(instance.key)}, ${$instanceOf(instance.value)}>`
  else if (instance instanceof UnionOf) return `${instance.items.map($instanceOf).join(' | ')}`
}
const $propertyName = (prop: string) =>
  prop.includes('.') || prop.includes('-') || prop.match(/^(\d|\W)/)
    ? `"${prop}"`
    : prop

const $property = (prop: Domain.InterfaceProperty, indentation = 2) => {
  let nullable = '?'
  if (prop.type instanceof Domain.Type) {
    nullable = prop.nullable === false ? '' : '?'
  }
  return `${' '.repeat(indentation)}${$propertyName(prop.name)}${nullable}: ${$instanceOf(prop.type)}`
}
const $typeExtends = (type: Domain.Interface | Domain.RequestInterface) => {
  return type.inherits.length === 0
    ? ''
    : `extends ${type.inherits.map(t => t.type.name).join(', ')}`
}

const $generateRecordResponse = (type: Domain.Interface, record: Domain.ImplementsReference) => `
type ${type.name}RecordIndexer = Record<${record.closedGenerics.map($instanceOf)}>
// noinspection JSUnusedLocalSymbols
export type ${type.name} =  ${type.name}RecordIndexer & ResponseBase
`

const $typeGenerics = (type: Domain.Interface| Domain.RequestInterface) => {
  return type.openGenerics.length === 0
    ? ''
    : `<${type.openGenerics.map(g => `${g}`).join(', ')}>`
}
const $type = (type: Domain.Interface | Domain.RequestInterface) => {
  if (type.name === 'IndexResponse') {
    console.log(type)
  }
  if (type instanceof Domain.RequestInterface) {
    const path = type.path.map(p => $property(p)).join('\n')
    const query = type.queryParameters.map(p => $property(p)).join('\n')
    let body = ''
    if (Array.isArray(type.body) && type.body.length > 0) {
      body += '  body?: {\n'
      body += type.body.map(p => $property(p, 4)).join('\n')
      body += '\n  }'
    }
    let code = `\nexport interface ${type.name}${$typeGenerics(type)} ${$typeExtends(type)} {`
    if (path.length > 0) code += '\n' + path
    if (query.length > 0) code += '\n' + query
    if (body.length > 0) code += '\n' + body
    code += '\n}\n'
    return code
  } else {
    let code = `\nexport interface ${type.name}${$typeGenerics(type)} ${$typeExtends(type)} {`
    if (type.properties.length > 0) code += '\n' + type.properties.map(p => $property(p)).join('\n')
    code += '\n}\n'
    return code
  }
}

const $createUnionType = (type: Domain.Interface | Domain.RequestInterface) => `
export type ${type.name} = ${type.inherits[0].closedGenerics.map($instanceOf).join(' | ')};
`

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
const stringOrNumberTypes = [
  'Id',
  'Ids',
  'Routing'
]
const numberTypes = ['short', 'byte', 'integer', 'long', 'float', 'double']
const objectTypes = ['SourceDocument']
const $createType = (type: Domain.Interface | Domain.RequestInterface) => {
  if (stringTypes.includes(type.name)) {
    return `export type ${type.name} = string;
`
  }
  if (stringOrNumberTypes.includes(type.name)) {
    return `export type ${type.name} = string | number;
`
  }
  if (numberTypes.includes(type.name)) {
    return `export type ${type.name} = number;
`
  }
  if (objectTypes.includes(type.name)) {
    return `export type ${type.name} = Record<string, any>;
`
  }
  const record = type.inherits.find(i => i.type.name === 'DictionaryResponseBase')
  if (record && type instanceof Domain.Interface) return $generateRecordResponse(type, record)
  if (type.implementsUnion()) return $createUnionType(type)
  return $type(type)
}

const $enumFlag = (e: Domain.EnumMember, flag: boolean, n: number) => !flag ? `"${e.name}"` : `1 << ${n + 1}`
const $enumValue = (e: Domain.EnumMember, flag: boolean, n: number) => `  ${$propertyName(e.name)} = ${$enumFlag(e, flag, n)}`
const $enumValues = (e: Domain.Enum) => e.members.map((m, i) => $enumValue(m, e.flags, i)).join(',\n')
const $enum = (e: Domain.Enum) => {
  if (process.env.ENUM_AS_UNION) {
    const types = e.members.map(m => {
      if (typeof m.name === 'string') {
        if (m.name === 'true' || m.name === 'false') {
          return m.name
        }
        return  "'" + m.name + "'"
      }
      return m.name
    })
    return `\nexport type ${e.name } = ${types.join(' | ')}\n`
  }
  return `
export enum ${e.name} {
${$enumValues(e)}
}
`
}
const $renderType = (type: Domain.TypeDeclaration) => {
  if (type instanceof Domain.Interface || type instanceof Domain.RequestInterface) return $createType(type)
  else if (type instanceof Domain.Enum) return $enum(type)
}

fs.writeFileSync('../output/typescript/types.ts', specification.types.map($renderType).join(''))
