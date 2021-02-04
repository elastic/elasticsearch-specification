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

import * as path from 'path'
import { SpecValidator } from './specification/validator'
import { TypeReader } from './specification/type-reader'
import { RestSpecMapping } from './specification/rest-spec-mapping'
import _ from 'lodash'
import * as glob from 'glob'
import * as ts from 'byots'
import Domain = require('./domain')

export interface TypeDictionary { [p: string]: Domain.TypeDeclaration }
export class Specification {
  private readonly specsFolder = path.join(__dirname, '..', 'specs')
  private readonly configPath = path.join(this.specsFolder, 'tsconfig.json')
  private readonly program: ts.Program

  types: Domain.TypeDeclaration[] = []
  typeLookup: TypeDictionary = {}
  domain_errors: string[] = []
  endpoints: Domain.Endpoint[] = []
  endpoint_errors: string[] = []

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

    const knownBehaviors = ['AdditionalProperties', 'ArrayResponse', 'EmptyResponseBase']
    const specVisitor = new TypeReader(this.program)
    const types = specVisitor.interfaces.concat(specVisitor.enums)
    // resolve inherits by creating the proper pointers to instances, pretty hairy but it works
    const dictTypes = types.reduce((o, p) => ({ ...o, [p.name]: p }), {}) as TypeDictionary
    const stringType = new Domain.Interface('string', 'internal')
    const lookup = (key: string): Domain.Interface => key === 'string' ? stringType : (dictTypes[key] as Domain.Interface)
    types.forEach(t => {
      if (!(t instanceof Domain.Interface)) return
      t.inherits = []
      t.implements = []
      t.attachedBehaviors = []
      t.behaviors = []
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
        ref.closedGenerics = unresolved.instanceOf
        const isBehavior = Boolean(ref.type.generatorHints.behavior)
        if (ref.depth === 0 && !isBehavior) t.implements.push(ref)
        else if (ref.depth === 0 && isBehavior) t.behaviors.push(ref)
        if (isBehavior) {
          if (!knownBehaviors.includes(ref.type.name)) {
            throw new Error(`${ref.type.name} is not a known behavior, please include it here`)
          } else t.attachedBehaviors.push(ref.type.name)
        }
      }
    })

    this.types = types
    this.typeLookup = dictTypes

    const endpointReader = new EndpointReader(specVisitor.interfaces, specVisitor.restSpecMapping)
    this.endpoints = endpointReader.endpoints
  }

  static load = (): Specification => new Specification(false)
  static loadWithValidation = (): Specification => new Specification(true)
}

export class EndpointReader {
  endpoints: Domain.Endpoint[]

  constructor (types: Domain.TypeDeclaration[], restSpecMapping: { [p: string]: RestSpecMapping }) {
    this.endpoints = _(glob.sync(path.join(__dirname, '..', 'specs', '_json_spec', '*.json')))
      .filter(f => f.match(/tsconfig/) == null)
      .filter(f => f.match(/tslint/) == null)
      .map(f => new Domain.Endpoint(f, restSpecMapping))
      .value()
  }
}
