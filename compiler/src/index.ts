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

import { readFileSync, existsSync, lstatSync } from 'fs'
import { join, resolve } from 'path'
import { argv } from 'zx'
import Compiler from './compiler'
import validateRestSpec from './steps/validate-rest-spec'
import addInfo from './steps/add-info'
import validateModel from './steps/validate-model'
import readDefinitionValidation from './steps/read-definition-validation'
import addDeprecation from './steps/add-deprecation'
import ExamplesProcessor from './steps/add-examples'

const nvmrc = readFileSync(join(__dirname, '..', '..', '.nvmrc'), 'utf8')
const nodejsMajor = process.version.split('.').shift()?.slice(1) ?? ''
const nvmMajor = nvmrc.trim().split('.').shift() ?? ''

if (nodejsMajor !== nvmMajor) {
  console.error(`Bad nodejs major version, you are using ${nodejsMajor}, while ${nvmMajor} should be used. Run 'nvm install' to fix this.`)
  process.exit(1)
}

let specsFolder: string|undefined = argv.spec
if (specsFolder !== '' && specsFolder !== undefined) {
  // We were given a specification, let's make sure it's a directory.
  specsFolder = resolve(specsFolder)

  // lstatSync raises an error if there's nothing at the path so we
  // check that something exists there first before checking it's a directory.
  const specFolderIsDirectory: boolean = (existsSync(specsFolder) && lstatSync(specsFolder).isDirectory())
  if (!specFolderIsDirectory) {
    console.error(`The specification specified at '${specsFolder}' wasn't a valid directory`)
    process.exit(1)
  }
// User didn't specify a spec location so we ask for one.
} else {
  console.error('--spec must be specified and be a valid directory path')
  process.exit(1)
}

// It's okay if the output folder doesn't exist initially.
const outputFolder: string|undefined = argv.output
if (outputFolder === '' || outputFolder === undefined) {
  console.error('--output must be specified')
  process.exit(1)
}

const compiler = new Compiler(specsFolder, outputFolder)

const examplesProcessor = new ExamplesProcessor(specsFolder)
const addExamples = examplesProcessor.addExamples.bind(examplesProcessor)

compiler
  .generateModel()
  .step(addInfo)
  .step(addDeprecation)
  .step(readDefinitionValidation)
  .step(validateRestSpec)
  .step(validateModel)
  .step(addExamples)
  .write()
  .then(() => {
    console.log('Done')
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
