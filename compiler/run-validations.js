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

'use strict'

let ora
let closest
try {
  require('zx/globals')
  ora = require('ora')
  const fl = require('fastest-levenshtein')
  closest = fl.closest
} catch (err) {
  console.log('It looks like you didn\'t install the project dependencies, please run \'make setup\'')
  process.exit(1)
}

const { readFile, writeFile } = require('fs/promises')

// enable subprocess colors
process.env.COLOR = true
process.env.FORCE_COLOR = 3

$.verbose = false

const spinner = ora('Loading').start()
const compilerPath = __dirname
const tsGeneratorPath = path.join(__dirname, '..', 'typescript-generator')
const cloneEsPath = path.join(__dirname, '..', '..', 'clients-flight-recorder', 'scripts', 'clone-elasticsearch')
const uploadRecordingsPath = path.join(__dirname, '..', '..', 'clients-flight-recorder', 'scripts', 'upload-recording')
const tsValidationPath = path.join(__dirname, '..', '..', 'clients-flight-recorder', 'scripts', 'types-validator')
const DAY = 1000 * 60 * 60 * 24
const specPath = path.join(__dirname, '..', 'specification')
const outputPath = path.join(__dirname, '..', 'output/schema')

const apis = require('../output/schema/schema.json')
  .endpoints
  .map(endpoint => endpoint.name)

async function run () {
  spinner.text = 'Checking requirements'

  const noCache = argv.cache === false
  const metadata = await readMetadata()
  const lastRun = metadata.lastRun ? new Date(metadata.lastRun) : new Date(0)
  const isStale = lastRun.getTime() + DAY < Date.now()

  if (typeof argv.api !== 'string') {
    spinner.fail('You must specify the api, for example: \'make validate api=index type=request branch=main\'')
    process.exit(1)
  }

  if (!apis.includes(argv.api)) {
    spinner.fail(`The api '${argv.api}' does not exists, did you mean '${closest(argv.api, apis)}'?`)
    process.exit(1)
  }

  // if true it's because the make target wasn't configured with a type argument
  if (argv.type !== true && argv.type !== 'request' && argv.type !== 'response') {
    spinner.fail('You must specify the type (request or response), for example: \'make validate api=index type=request branch=main\'')
    process.exit(1)
  }

  if (typeof argv.branch !== 'string' && typeof argv.branch !== 'number') {
    spinner.fail('You must specify the branch, for example: \'make validate api=index type=request branch=main\'')
    process.exit(1)
  }


  const isFlightRecorderCloned = await $`[[ -d ${path.join(__dirname, '..', '..', 'clients-flight-recorder')} ]]`.exitCode === 0
  if (!isFlightRecorderCloned) {
    spinner.text = 'It looks like you didn\'t cloned the flight recorder, doing that for you'
    await $`git clone https://github.com/elastic/clients-flight-recorder.git ${path.join(__dirname, '..', '..', 'clients-flight-recorder')}`
  } else if (isStale) {
    spinner.text = 'Pulling the latest flight recorder changes'
    cd(path.join(__dirname, '..', '..', 'clients-flight-recorder'))
    await $`git pull`
    cd(path.join(compilerPath, '..'))
  }

  const isCompilerInstalled = await $`[[ -d ${path.join(compilerPath, 'node_modules')} ]]`.exitCode === 0
  const isTsGeneratorInstalled = await $`[[ -d ${path.join(tsGeneratorPath, 'node_modules')} ]]`.exitCode === 0
  if (noCache || !isCompilerInstalled || !isTsGeneratorInstalled) {
    spinner.text = 'It looks like you didn\'t installed the project dependencies, doing that for you'
    await $`npm install --prefix ${compilerPath}`
    await $`npm install --prefix ${tsGeneratorPath}`
  }

  const isCloneEsInstalled = await $`[[ -d ${path.join(cloneEsPath, 'node_modules')} ]]`.exitCode === 0
  const isUploadRecordingInstalled = await $`[[ -d ${path.join(uploadRecordingsPath, 'node_modules')} ]]`.exitCode === 0
  const isTypesValidatorInstalled = await $`[[ -d ${path.join(tsValidationPath, 'node_modules')} ]]`.exitCode === 0

  if (noCache || !isCloneEsInstalled || !isUploadRecordingInstalled || !isTypesValidatorInstalled) {
    spinner.text = 'It looks like you didn\'t installed the flight recorder project dependencies, doing that for you'
    await $`npm install --prefix ${cloneEsPath}`
    await $`npm install --prefix ${uploadRecordingsPath}`
    await $`npm install --prefix ${tsValidationPath}`
  }

  const isCompilerBuilt = await $`[[ -d ${path.join(compilerPath, 'lib')} ]]`.exitCode === 0
  if (noCache || isStale || !isCompilerBuilt) {
    spinner.text = 'Optimizing the compiler'
    await $`npm run build --prefix ${compilerPath}`
  }

  const isTsGeneratorBuilt = await $`[[ -d ${path.join(tsGeneratorPath, 'lib')} ]]`.exitCode === 0
  if (noCache || isStale || !isTsGeneratorBuilt) {
    spinner.text = 'Optimizing the ts generator'
    await $`npm run build --prefix ${tsGeneratorPath}`
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
    const Process = await nothrow($`node ${path.join(compilerPath, 'lib', 'index.js')} --spec ${specPath} --output ${outputPath}`)
    if (Process.exitCode !== 0) {
      spinner.fail(removeHeader(Process.stdout))
      console.log(Process.stderr)
      process.exit(1)
    }
  }

  {
    spinner.text = 'Generating typescript view'
    const Process = await nothrow($`node ${path.join(tsGeneratorPath, 'lib', 'index.js')}`)
    if (Process.exitCode !== 0) {
      spinner.fail(removeHeader(Process.toString()))
      process.exit(1)
    }
  }

  {
    spinner.text = 'Validating typescript view'
    const Process = await nothrow($`npm run validate-ts-view --prefix ${compilerPath}`)
    if (Process.exitCode !== 0) {
      spinner.fail(removeHeader(Process.toString()))
      process.exit(1)
    }
  }

  spinner.text = 'Running validations'

  const branchArg = argv.branch.toString()
  const branchName = branchArg.startsWith('7.') ? '7.x' : branchArg

  if (noCache || isStale || metadata.branchName !== branchName) {
    metadata.lastRun = new Date()
    metadata.branchName = branchName

    spinner.text = 'Downloading recordings'
    await $`node ${path.join(uploadRecordingsPath, 'download.js')} --branch ${branchName}`

    spinner.text = 'Fetching artifacts'
    await $`node ${path.join(cloneEsPath, 'index.js')} --branch ${argv['branch']}`
  }

  cd(tsValidationPath)
  spinner.text = 'Validating endpoints'
  // the ts validator will copy types.ts and schema.json autonomously
  const flags = ['--verbose']
  if (argv.type === true) {
    flags.push('--request')
    flags.push('--response')
  } else {
    flags.push(`--${argv.type}`)
  }
  const output = await $`node ${path.join(tsValidationPath, 'index.js')} --api ${argv.api} --branch ${branchName} ${flags}`

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
