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

/* global $ argv, path, cd, nothrow */

import 'zx/globals'
import ora from 'ora'
import { readFile, writeFile } from 'fs/promises'
import { join, dirname } from 'desm'

// enable subprocess colors
process.env.COLOR = true
process.env.FORCE_COLOR = 3

$.verbose = false

const spinner = ora('Loading').start()
const compilerPath = dirname(import.meta.url)
const tsGeneratorPath = join(import.meta.url, '..', 'typescript-generator')
const outputPath = join(import.meta.url, '..', 'output')
const cloneEsPath = join(import.meta.url, '..', '..', 'clients-flight-recorder', 'scripts', 'clone-elasticsearch')
const uploadRecordingsPath = join(import.meta.url, '..', '..', 'clients-flight-recorder', 'scripts', 'upload-recording')
const tsValidationPath = join(import.meta.url, '..', '..', 'clients-flight-recorder', 'scripts', 'types-validator')
const DAY = 1000 * 60 * 60 * 24

async function run () {
  spinner.text = 'Checking requirements'

  const metadata = await readMetadata()
  const lastRun = metadata.lastRun ? new Date(metadata.lastRun) : new Date(0)

  if (typeof argv.api !== 'string') {
    spinner.fail('You must specify the api, for example: \'make validate-request api=index type=request stack-version=8.1.0-SNAPSHOT\'')
    process.exit(1)
  }

  if (argv.type !== 'request' && argv.type !== 'response') {
    spinner.fail('You must specify the type (request or response), for example: \'make validate-request api=index type=request stack-version=8.1.0-SNAPSHOT\'')
    process.exit(1)
  }

  if (typeof argv['stack-version'] !== 'string') {
    spinner.fail('You must specify the stack version, for example: \'make validate-request api=index type=request stack-version=8.1.0-SNAPSHOT\'')
    process.exit(1)
  }

  const isFlightRecorderCloned = await $`[[ -d ${join(import.meta.url, '..', '..', 'clients-flight-recorder')} ]]`.exitCode === 0
  if (!isFlightRecorderCloned) {
    spinner.text = 'It looks like you didn\'t cloned the flight recorder, doing that for you'
    await $`git clone https://github.com/elastic/clients-flight-recorder.git ${join(import.meta.url, '..', '..', 'clients-flight-recorder')}`
  }

  const isCompilerInstalled = await $`[[ -d ${path.join(compilerPath, 'node_modules')} ]]`.exitCode === 0
  const isTsGeneratorInstalled = await $`[[ -d ${path.join(tsGeneratorPath, 'node_modules')} ]]`.exitCode === 0
  if (!isCompilerInstalled || !isTsGeneratorInstalled) {
    spinner.text = 'It looks like you didn\'t installed the project dependencies, doing that for you'
    await $`npm install --prefix ${compilerPath}`
    await $`npm install --prefix ${tsGeneratorPath}`
  }

  const isCloneEsInstalled = await $`[[ -d ${path.join(cloneEsPath, 'node_modules')} ]]`.exitCode === 0
  const isUploadRecordingInstalled = await $`[[ -d ${path.join(uploadRecordingsPath, 'node_modules')} ]]`.exitCode === 0
  const isTypesValidatorInstalled = await $`[[ -d ${path.join(tsValidationPath, 'node_modules')} ]]`.exitCode === 0

  if (!isCloneEsInstalled || !isUploadRecordingInstalled || !isTypesValidatorInstalled) {
    spinner.text = 'It looks like you didn\'t installed the flight recorder project dependencies, doing that for you'
    await $`npm install --prefix ${cloneEsPath}`
    await $`npm install --prefix ${uploadRecordingsPath}`
    await $`npm install --prefix ${tsValidationPath}`
  }

  {
    spinner.text = 'Compiling specification'
    const Process = await nothrow($`npm run compile:specification --prefix ${compilerPath}`)
    if (Process.exitCode !== 0) {
      spinner.fail(removeHeader(Process.stdout))
      process.exit(1)
    }
  }

  {
    spinner.text = 'Generating schema'
    const Process = await nothrow($`npm run generate-schema --prefix ${compilerPath}`)
    if (Process.exitCode !== 0) {
      spinner.fail(removeHeader(Process.stdout))
      process.exit(1)
    }
  }

  {
    spinner.text = 'Generating typescript view'
    const Process = await nothrow($`npm run start --prefix ${tsGeneratorPath}`)
    if (Process.exitCode !== 0) {
      spinner.fail(removeHeader(Process.toString()))
      process.exit(1)
    }
  }

  spinner.text = 'Running validations'

  const branchName = argv['stack-version'].startsWith('7.') ? '7.x' : 'master'

  if (lastRun.getTime() + DAY < Date.now() || metadata.branchName !== branchName || metadata.branchName !== branchName) {
    metadata.lastRun = new Date()
    metadata.branchName = branchName

    spinner.text = 'Downloading recordings'
    await $`node ${path.join(uploadRecordingsPath, 'download.js')} --branch ${branchName}`

    spinner.text = 'Fetching artifacts'
    await $`node ${path.join(cloneEsPath, 'index.js')} --version ${argv['stack-version']}`
  }

  spinner.text = 'Preparing testing environment'
  await $`cp ${path.join(outputPath, 'schema', 'schema.json')} ${path.join(tsValidationPath, 'schema.json')}`
  await $`cp ${path.join(outputPath, 'typescript', 'types.ts')} ${path.join(tsValidationPath, 'types.ts')}`

  cd(tsValidationPath)
  spinner.text = 'Validating endpoints'
  const output = await $`STACK_VERSION=${argv['stack-version']} node ${path.join(tsValidationPath, 'index.js')} --api ${argv.api} --${argv.type} --verbose`

  cd(path.join(compilerPath, '..'))
  if (output.exitCode === 0) {
    spinner.stop()
    console.log(output.toString())
  } else {
    spinner.fail(output.toString())
  }

  await writeFile(
    path.join(compilerPath, '..', '.validation.json'),
    JSON.stringify(metadata),
    'utf8'
  )
}

async function readMetadata () {
  try {
    return JSON.parse(await readFile(path.join(compilerPath, '..', '.validation.json'), 'utf8'))
  } catch (err) {
    return {}
  }
}

function removeHeader (log) {
  return log.split('\n').slice(4).join('\n')
}

run().catch(err => {
  cd(path.join(compilerPath, '..'))
  spinner.fail(err.message)
  process.exit(1)
})
