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

const specsFolderFeatureFlag = join(__dirname, 'specification-feature-flag')
const specsFolderStability = join(__dirname, 'specification-stability')
const specsFolderUnknown = join(__dirname, 'specification-unknown')
const specsFolderVisibility = join(__dirname, 'specification-visibility')
const specsFolderDuplicate = join(__dirname, 'specification-duplicates')
const outputFolder = join(__dirname, 'output')

test('Request @availability fails when misconfigured', t => {
  let compiler = new Compiler(specsFolderFeatureFlag, outputFolder)
  let error = t.throws(() => compiler.generateModel())
  console.log(error?.message);
  t.true(error?.message === `'feature_flag' must be defined if visibility is 'feature_flag'`, error?.message)

  compiler = new Compiler(specsFolderStability, outputFolder)
  error = t.throws(() => compiler.generateModel())
  t.true(error?.message === `stability is not valid: unknown`, error?.message)

  compiler = new Compiler(specsFolderUnknown, outputFolder)
  error = t.throws(() => compiler.generateModel())
  t.true(error?.message.startsWith(`The @availablility <name> value must either be stack or serverless`), error?.message)

  compiler = new Compiler(specsFolderVisibility, outputFolder)
  error = t.throws(() => compiler.generateModel())
  t.true(error?.message === `visibility is not valid: unknown`, error?.message)

  compiler = new Compiler(specsFolderDuplicate, outputFolder)
  error = t.throws(() => compiler.generateModel())
  t.true(error?.message === `Duplicate @availability tag: 'stack'`, error?.message)
})
