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

test('Wrong rest_spec_name for request definition', t => {
  const compiler = new Compiler(specsFolder)
  const error = t.throws(() => compiler.generateModel())
  t.true(error?.message.startsWith("The api 'foobar' does not exists, did you mean"))
})
