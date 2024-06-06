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

import { convert_schema_to_openapi } from 'compiler-wasm-lib'
import { argv } from 'zx'
import { join } from 'path'
import { readFileSync, writeFileSync } from 'fs'

const inputPath = argv.input ?? join(__dirname, '..', '..', '..', 'output', 'schema', 'schema.json')
const outputPath = argv.output ?? join(__dirname, '..', '..', '..', 'output', 'openapi', 'elasticsearch-serverless-openapi.json')
const outputPathStack = argv.output ?? join(__dirname, '..', '..', '..', 'output', 'openapi', 'elasticsearch-openapi.json')

const inputText = readFileSync(
  inputPath,
  { encoding: 'utf8' }
)

const output = convert_schema_to_openapi(inputText, 'serverless')
const outputStack = convert_schema_to_openapi(inputText, 'stack')

writeFileSync(
  outputPath,
  output,
  'utf8'
)

writeFileSync(
    outputPathStack,
    outputStack,
    'utf8'
)
