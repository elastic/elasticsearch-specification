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

test('Request @availability can fulfill all the fields', t => {
  const compiler = new Compiler(specsFolder, outputFolder)
  const {model} = compiler.generateModel()
  const endpoint = model.endpoints.find(endpoint => endpoint.name == 'index');
  t.assert(endpoint);
  // Assert the new 'availability' value is correct.
  t.deepEqual(endpoint?.availability, {
    stack: { stability: 'beta', visibility: 'feature_flag', featureFlag: 'abc', since: '1.2.3' },
    serverless: { visibility: 'private', stability: 'experimental' }
  });
})
