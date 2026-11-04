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

const specsFolderUnionValue = join(__dirname, 'specification-union-value')
const specsFolderUnionArrayValue = join(__dirname, 'specification-union-array-value')
const specsFolderStringifiedValue = join(__dirname, 'specification-stringified-value')
const specsFolderUnionShape = join(__dirname, 'specification-union-shape')
const outputFolder = join(__dirname, 'output')

test('@server_default fails when the value does not match the union or Stringified member', t => {
  let compiler = new Compiler(specsFolderUnionValue, outputFolder)
  let error = t.throws(() => compiler.generateModel())
  t.true(error?.message === 'The default value for value should be a number', error?.message)

  compiler = new Compiler(specsFolderUnionArrayValue, outputFolder)
  error = t.throws(() => compiler.generateModel())
  t.true(error?.message === 'The default value for value should be a number', error?.message)

  compiler = new Compiler(specsFolderStringifiedValue, outputFolder)
  error = t.throws(() => compiler.generateModel())
  t.true(error?.message === 'The default value for value should be a boolean', error?.message)

  compiler = new Compiler(specsFolderUnionShape, outputFolder)
  error = t.throws(() => compiler.generateModel())
  t.true(error?.message === 'Default values in unions can only be configured for `T | T[]`, `T | null` or `T | string` unions', error?.message)
})
