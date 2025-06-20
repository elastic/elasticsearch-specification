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

/* global argv, path, cd */

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import 'zx/globals'
import assert from 'assert'
import * as core from '@actions/core'
import { copyFile } from 'fs/promises'
import * as github from '@actions/github'
import specification from '../../output/schema/schema.json' with { type: 'json' }
import { run as getReport } from '../../../clients-flight-recorder/scripts/types-validator/index.js'
import {
  getNamespace,
  getName
} from '../../../clients-flight-recorder/scripts/types-validator/utils.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const octokit = github.getOctokit(argv.token)

const privateNames = ['_global']
const tick = '`'
const tsValidationPath = path.join(
  __dirname,
  '..',
  '..',
  '..',
  'clients-flight-recorder',
  'scripts',
  'types-validator'
)

async function run() {
  await copyFile(
    path.join(__dirname, '..', '..', 'output', 'typescript', 'types.ts'),
    path.join(tsValidationPath, 'types.ts')
  )
  const context = github.context
  assert(context.payload.pull_request, 'We should be in a PR context')
  const files = []
  let page = 1
  while (true) {
    const { data } = await octokit.rest.pulls.listFiles({
      owner: 'elastic',
      repo: 'elasticsearch-specification',
      pull_number: context.payload.pull_request.number,
      page,
      per_page: 100
    })
    if (data.length > 0) {
      files.push(
        ...data
          .filter((entry) => entry.status !== 'deleted')
          .map((entry) => entry.filename)
      )
      page += 1
    } else {
      break
    }
  }

  const specFiles = files.filter(
    (file) => file.includes('specification') && !file.includes('compiler/test')
  )
  const table = []

  cd(tsValidationPath)

  for (const file of specFiles) {
    if (file.startsWith('specification/_types')) continue
    if (file.startsWith('specification/_spec_utils')) continue
    if (file.startsWith('specification/_doc_ids')) continue
    if (file.startsWith('specification/_json_spec')) continue
    if (file.startsWith('specification/node_modules')) continue
    if (file.endsWith('tsconfig.json')) continue
    if (file.endsWith('eslint.config.js')) continue
    if (file.endsWith('package.json')) continue
    if (file.endsWith('package-lock.json')) continue
    if (file.endsWith('.md')) continue
    if (getApi(file).endsWith('_types')) {
      const apis = specification.endpoints
        .filter(endpoint => endpoint.name.split('.').filter(s => !privateNames.includes(s))[0] === getApi(file).split('.')[0])
        .map(endpoint => endpoint.name)
      for (const api of apis) {
        const report = await getReport({
          api,
          'generate-report': false,
          request: true,
          response: true,
          ci: false,
          verbose: false
        })
        table.push(buildTableLine(api, report))
      }
    } else {
      const report = await getReport({
        api: getApi(file),
        'generate-report': false,
        request: true,
        response: true,
        ci: false,
        verbose: false
      })
      table.push(buildTableLine(getApi(file), report))
    }
  }

  cd(path.join(__dirname, '..', '..'))

  table.sort((a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })

  if (table.length > 0) {
    let comment = `Following you can find the validation results for the API${table.length === 1 ? '' : 's'} you have changed.\n\n`
    comment += '| API | Status | Request | Response |\n'
    comment += '| --- | --- | --- | --- |\n'
    for (const line of [...new Set(table)]) {
      comment += line
    }
    comment += `\nYou can validate ${table.length === 1 ? 'this' : 'these'} API${table.length === 1 ? '' : 's'} yourself by using the ${tick}make validate${tick} target.\n`

    core.setOutput('has_results', 'true')
    core.setOutput('comment_body', comment)
  } else {
    core.setOutput('has_results', 'false')
  }

  core.info('Done!')
}

function getApi (file) {
  return file.split('/').slice(1, 3).filter(s => !privateNames.includes(s)).filter(Boolean).join('.')
}

function buildTableLine (api, report) {
  const apiReport = report.get(getNamespace(api)).find(r => r.api === getName(api))
  return `| ${tick}${api}${tick} | ${generateStatus(apiReport)} | ${generateRequest(apiReport)} | ${generateResponse(apiReport)} |\n`
}

function generateStatus (report) {
  if (!report.diagnostics.hasRequestType || !report.diagnostics.hasResponseType) {
    return ':orange_circle:'
  }
  if (report.totalRequest <= 0 || report.totalResponse <= 0) {
    return ':white_circle:'
  }
  if (report.diagnostics.request.length === 0 && report.diagnostics.response.length === 0) {
    return ':green_circle:'
  }
  return ':red_circle:'
}

function generateRequest (r) {
  if (r.totalRequest === -1) return 'Missing recording'
  if (!r.diagnostics.hasRequestType) return 'Missing type'
  if (r.totalRequest === 0) return 'Missing test'
  return `${r.passingRequest}/${r.totalRequest}`
}

function generateResponse (r) {
  if (r.totalResponse === -1) return 'Missing recording'
  if (!r.diagnostics.hasResponseType) return 'Missing type'
  if (r.totalResponse === 0) return 'Missing test'
  return `${r.passingResponse}/${r.totalResponse}`
}

run().catch((err) => {
  core.error(err)
  process.exit(1)
})
