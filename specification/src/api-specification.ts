import * as path from 'path'
import { SpecValidator } from './specification/validator'
import { TypeReader } from './specification/type-reader'
import { RestSpecMapping } from './specification/rest-spec-mapping'
import _ from 'lodash'
import * as glob from 'glob'
import * as ts from 'byots'
import Domain = require('./domain');

export type TypeDictionary = { [p: string]: Domain.TypeDeclaration };
export class Specification {
  private specsFolder = path.join(__dirname, '..', 'specs');
  private configPath = path.join(this.specsFolder, 'tsconfig.json');
  private readonly program: ts.Program;

  types: Domain.TypeDeclaration[] = [];
  typeLookup: TypeDictionary = {};
  domain_errors: string[] = [];
  endpoints: Domain.Endpoint[] = [];
  endpoint_errors: string[] = [];

  private constructor (validate: boolean) {
    const config = ts.readConfigFile(this.configPath, file => ts.sys.readFile(file))
    const commandLine = ts.parseJsonConfigFileContent(config.config, ts.sys, this.specsFolder)
    this.program = ts.createProgram(commandLine.fileNames, commandLine.options)

    if (validate) {
      this.domain_errors = SpecValidator.validate(this.program)
      if (this.domain_errors.length > 0) {
        const errorString = ['The specification contains the following type mapping errors:']
          .concat(this.domain_errors).map(e => '  - ' + e)
          .join('\n')
        throw Error(errorString)
      }
    }

    const supportedTraits = ["IDictionary"]
    const specVisitor = new TypeReader(this.program)
    const types = [].concat(specVisitor.interfaces).concat(specVisitor.enums)
    // resolve inherits by creating the proper pointers to instances, pretty hairy but it works
    const dictTypes = types.reduce((o, p) => ({ ...o, [p.name]: p }), {}) as TypeDictionary
    const stringType = new Domain.Interface('string', 'internal')
    const lookup = (key: string) => key === 'string' ? stringType : (dictTypes[key] as Domain.Interface)
    types.forEach(t => {
      if (!(t instanceof Domain.Interface)) return
      t.inherits = []
      t.implements = []
      t.traits = []
      for (const key of Object.keys(t.inheritsFromUnresolved)) {
        const refType = lookup(key)
        const ref = new Domain.InheritsReference(refType)
        ref.closedGenerics = t.inheritsFromUnresolved[key]
        t.inherits.push(ref)
      }
      for (const key of Object.keys(t.implementsFromUnresolved)) {
        const refType = lookup(key)
        const unresolved = t.implementsFromUnresolved[key]
        const ref = new Domain.ImplementsReference(refType, unresolved.depth)
        ref.closedGenerics = unresolved.instanceOf;
        if (ref.depth === 0) t.implements.push(ref)
        if (ref.type.generatorHints.trait) {
          if (!supportedTraits.includes(ref.type.name)) {
            throw new Error(`${ref.type.name} is not a known trait, please include it here`)
          }
          else t.traits.push(ref.type.name)
        }
      }
    })
    this.types = types
    this.typeLookup = dictTypes

    const endpointReader = new EndpointReader(specVisitor.interfaces, specVisitor.restSpecMapping)
    this.endpoints = endpointReader.endpoints
  }

  static load = () => new Specification(false);
  static loadWithValidation = () => new Specification(true);
}

export class EndpointReader {
  endpoints: Domain.Endpoint[];

  constructor (types: Domain.TypeDeclaration[], restSpecMapping: { [p: string]: RestSpecMapping }) {
    this.endpoints = _(glob.sync(path.join(__dirname, '..', 'specs', '_json_spec', '*.json')))
      .filter(f => !f.match(/tsconfig/))
      .filter(f => !f.match(/tslint/))
      .map(f => new Domain.Endpoint(f, restSpecMapping))
      // @ts-ignore
      .value()
  }
}
