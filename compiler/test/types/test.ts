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

import { join } from 'path'
import test from 'ava'
import Compiler from '../../src/compiler'
import * as Model from '../../src/model/metamodel'

const specsFolder = join(__dirname, 'specification')
const outputFolder = join(__dirname, 'output')
const compiler = new Compiler(specsFolder, outputFolder)
const { model } = compiler.generateModel()

test('interfaces', t => {
  const definition = model.types.find(t => t.kind === 'interface') as Model.Interface
  t.assert(definition)
  t.true(definition?.specLocation.endsWith('test/types/specification/interface/def.ts#L20-L23'))
  t.deepEqual(definition?.name, {
    name: 'Foo',
    namespace: 'interface'
  })
  t.deepEqual(definition?.properties, [{
    name: 'bar',
    required: true,
    type: {
      kind: 'instance_of',
      type: {
        name: 'string',
        namespace: '_builtins'
      }
    }
  }, {
    name: 'baz',
    required: false,
    type: {
      kind: 'instance_of',
      type: {
        name: 'number',
        namespace: '_builtins'
      }
    }
  }])
})

test('enum', t => {
  const definition = model.types.find(t => t.kind === 'enum') as Model.Enum
  t.assert(definition)
  t.true(definition?.specLocation.endsWith('test/types/specification/enum/def.ts#L20-L23'))
  t.deepEqual(definition?.name, {
    name: 'Foo',
    namespace: 'enum'
  })
  t.deepEqual(definition?.members, [
    { name: 'bar' },
    { name: 'baz' }
  ])
})

test('type_alias', t => {
  const definition = model.types.find(t => t.kind === 'type_alias') as Model.TypeAlias
  t.assert(definition)
  t.true(definition?.specLocation.endsWith('test/types/specification/type_alias/def.ts#L20-L20'))
  t.deepEqual(definition?.name, {
    name: 'Foo',
    namespace: 'type_alias'
  })
  t.deepEqual(definition?.type, {
    kind: 'instance_of',
    type: {
      name: 'string',
      namespace: '_builtins'
    }
  })
})

test('request', t => {
  const definition = model.types.find(t => t.kind === 'request') as Model.Request
  t.assert(definition)
  t.true(definition?.specLocation.endsWith('test/types/specification/_global/info/request.ts#L20-L25'))
  t.deepEqual(definition?.name, {
    name: 'Request',
    namespace: '_global.info'
  })
})

test('response', t => {
  const definition = model.types.find(t => t.kind === 'response') as Model.Response
  t.assert(definition)
  t.true(definition?.specLocation.endsWith('test/types/specification/_global/info/response.ts#L20-L28'))
  t.deepEqual(definition?.name, {
    name: 'Response',
    namespace: '_global.info'
  })
})
