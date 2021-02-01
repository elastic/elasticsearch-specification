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

import { Specification } from './api-specification'
import { loadModel } from './metamodel_reader'
import fs from 'fs'
import stringify from 'safe-stable-stringify'

const spec = Specification.load()

const model = loadModel(spec)

model.types.sort((a, b) => {
  if (a.name.name > b.name.name) return 1
  if (a.name.name < b.name.name) return -1
  return 0
})

fs.writeFileSync('../output/schema/schema.json', stringify(model, null, 2))

console.log('Schema generated in ../output/schema/schema.json')
