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

/* global $ path, cd, nothrow */

'use strict'

let ora
let closest
let minimist
try {
  require('zx/globals')
  ora = require('ora')
  const fl = require('fastest-levenshtein')
  closest = fl.closest
  minimist = require('minimist')
} catch (err) {
  console.log(
    "It looks like you didn't install the project dependencies, please run 'make setup'"
  )
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
const outputPath = path.join(__dirname, '..', 'output')

const apis = require('../output/schema/schema.json')
  .endpoints
  .map(endpoint => endpoint.name)

async function run () {
  const options = minimist(process.argv.slice(2), {
    string: ['api', 'type', 'branch'],
    boolean: ['cache'],
    default: { cache: true }
  })

  spinner.text = 'Checking requirements'

  const noCache = options.cache === false
  const metadata = await readMetadata()
  const lastRun = metadata.lastRun ? new Date(metadata.lastRun) : new Date(0)
  const isStale = lastRun.getTime() + DAY < Date.now()

  if (options.api === '') {
    spinner.fail('You must specify the api, for example: \'make validate api=index type=request branch=main\'')
    process.exit(1)
  }

  const apiList = options.api.split(',').map(api => api.trim())
  const invalidApis = apiList.filter(api => !apis.includes(api))
  if (invalidApis.length > 0) {
    const suggestions = invalidApis.map(api => `'${api}' (did you mean '${closest(api, apis)}'?)`).join(', ')
    spinner.fail(`The following APIs do not exist: ${suggestions}`)
    process.exit(1)
  }
  // if the empty string it's because the make target wasn't configured with a type argument
  if (options.type !== '' && options.type !== 'request' && options.type !== 'response') {
    spinner.fail('You must specify the type (request or response), for example: \'make validate api=index type=request branch=main\'')
    process.exit(1)
  }

  if (options.branch === '') {
    spinner.fail('You must specify the branch, for example: \'make validate api=index type=request branch=main\'')
    process.exit(1)
  }

  const isFlightRecorderCloned = await $`[[ -d ${path.join(__dirname, '..', '..', 'clients-flight-recorder')} ]]`.exitCode === 0
  if (!isFlightRecorderCloned) {
    spinner.text = 'It looks like you didn\'t clone the flight recorder, doing that for you'
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
    spinner.text = "It looks like you didn't install the project dependencies, doing that for you"
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
    const Process = await nothrow($`npm run generate-schema --prefix ${compilerPath} -- --spec ${specPath} --output ${outputPath}`)
    if (Process.exitCode !== 0) {
      spinner.fail(removeHeader(Process.stdout))
      console.log(Process.stderr)
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

  {
    spinner.text = 'Validating typescript view'
    const Process = await nothrow($`npm run validate-ts-view --prefix ${compilerPath}`)
    if (Process.exitCode !== 0) {
      spinner.fail(removeHeader(Process.toString()))
      process.exit(1)
    }
  }

  spinner.text = 'Running validations'

  const branchName = options.branch.startsWith('7.') ? '7.x' : options.branch

  if (noCache || isStale || metadata.branchName !== branchName) {
    metadata.lastRun = new Date()
    metadata.branchName = branchName

    spinner.text = 'Downloading recordings'
    await $`node ${path.join(uploadRecordingsPath, 'download.js')} --branch ${branchName} --git`

    spinner.text = 'Fetching artifacts'
    await $`node ${path.join(cloneEsPath, 'index.js')} --branch ${branchName}`
  }

  cd(tsValidationPath)
  spinner.text = 'Validating endpoints'
  // the ts validator will copy types.ts and schema.json autonomously
  const flags = ['--verbose']
  if (options.type === '') {
    flags.push('--request')
    flags.push('--response')
  } else {
    flags.push(`--${options.type}`)
  }
  const output = await $`node ${path.join(tsValidationPath, 'index.js')} --api ${options.api} --branch ${branchName} ${flags}`

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
