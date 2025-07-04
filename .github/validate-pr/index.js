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
import baselineValidation from '../../../clients-flight-recorder/recordings/types-validation/types-validation.json' with { type: 'json' }
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
  const reports = new Map()

  cd(tsValidationPath)

  // Collect all APIs to validate
  const apisToValidate = new Set()

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
        apisToValidate.add(api)
      }
    } else {
      const api = getApi(file)
      apisToValidate.add(api)
    }
  }

  // Call getReport once with all APIs
  if (apisToValidate.size > 0) {
    const allApis = Array.from(apisToValidate).join(',')
    const report = await getReport({
      api: allApis,
      'generate-report': false,
      request: true,
      response: true,
      ci: false,
      verbose: false
    })

    // Extract individual API reports from the combined result
    for (const api of apisToValidate) {
      const namespace = getNamespace(api)
      if (report.has(namespace)) {
        const namespaceReport = report.get(namespace).find(r => r.api === getName(api))
        if (namespaceReport) {
          reports.set(api, namespaceReport)
        }
      }
    }
  }

  cd(path.join(__dirname, '..', '..'))

  // Compare current reports with baseline and find changes
  const changedApis = []
  for (const [apiName, report] of reports) {
    const baselineReport = findBaselineReport(apiName, baselineValidation)
    if (baselineReport && hasChanges(baselineReport, report, apiName)) {
      changedApis.push({ api: apiName, baseline: baselineReport, current: report })
    }
  }
  changedApis.sort((a, b) => a.api.localeCompare(b.api))

  let comment = `Following you can find the validation changes against the target branch for the API${changedApis.length === 1 ? '' : 's'}.\n\n`
  if (changedApis.length > 0) {
    comment += '| API | Status | Request | Response |\n'
    comment += '| --- | --- | --- | --- |\n'
    for (const change of changedApis) {
      comment += buildDiffTableLine(change)
    }
  } else {
    comment += '**No changes detected**.\n'
  }
  comment += `\nYou can validate ${changedApis.length === 1 ? 'this' : 'these'} API${changedApis.length === 1 ? '' : 's'} yourself by using the ${tick}make validate${tick} target.\n`
  core.setOutput('comment_body', comment)

  core.info('Done!')
}

function getApi (file) {
  return file.split('/').slice(1, 3).filter(s => !privateNames.includes(s)).filter(Boolean).join('.')
}

function findBaselineReport(apiName, baselineValidation) {
  const [namespace, method] = apiName.split('.')

  if (!baselineValidation.namespaces[namespace]) {
    return null
  }

  return baselineValidation.namespaces[namespace].apis.find(api => api.api === method)
}

function hasChanges(baselineReport, report) {
  if (!report) return false

  return baselineReport.status !== report.status ||
         baselineReport.passingRequest !== report.passingRequest ||
         baselineReport.passingResponse !== report.passingResponse
}

function buildDiffTableLine(change) {
  const { api, baseline, current } = change

  const status = generateStatus(current.status)
  const request = generateRequest(current)
  const response = generateResponse(current)

  const baselineStatus = generateStatus(baseline.status)
  const baselineRequest = generateRequest(baseline)
  const baselineResponse = generateResponse(baseline)

  const statusDiff = status !== baselineStatus ? `${baselineStatus} → ${status}` : status
  const requestDiff = request !== baselineRequest ? `${baselineRequest} → ${request}` : request
  const responseDiff = response !== baselineResponse ? `${baselineResponse} → ${response}` : response

  return `| ${tick}${api}${tick} | ${statusDiff} | ${requestDiff} | ${responseDiff} |\n`
}


function generateStatus (status) {
  if (status === 'missing_types' || status === 'missing_request_type' || status === 'missing_response_type') {
    return ':orange_circle:'
  }
  if (status === 'missing_test') {
    return ':white_circle:'
  }
  if (status === 'passing') {
    return ':green_circle:'
  }
  return ':red_circle:'
}

function generateRequest (r) {
  if (r.status === 'missing_test') return 'Missing test'
  if (r.status === 'missing_types' || r.status == 'missing_request_type') return 'Missing type'
  return `${r.passingRequest}/${r.totalRequest}`
}

function generateResponse (r) {
  if (r.status === 'missing_test') return 'Missing test'
  if (r.status === 'missing_types' || r.status == 'missing_response_type') return 'Missing type'
  return `${r.passingResponse}/${r.totalResponse}`
}

run().catch((err) => {
  core.error(err)
  process.exit(1)
})
