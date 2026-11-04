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

test('@server_default is validated and typed against the member of unions and Stringified', t => {
  const compiler = new Compiler(specsFolder, outputFolder)
  const { model } = compiler.generateModel()
  const request = model.types.find(type => type.kind === 'request') as Model.Request
  t.assert(request)
  const defaults = Object.fromEntries(request.query.map(property => [property.name, property.serverDefault]))
  t.deepEqual(defaults, {
    nullable_boolean: true,
    lenient_number: 1,
    lenient_number_string: 'auto',
    single_or_array: 'foo',
    single_or_array_array: ['foo', 'bar'],
    stringified_boolean: false,
    stringified_number: 10,
    nullable_stringified_number: 5
  })
})
