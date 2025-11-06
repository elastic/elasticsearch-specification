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

import { readFile } from 'fs/promises'
import * as core from '@actions/core'

const tick = '`'

async function run() {
  // Parse command line arguments
  const [baselineReportPath, prReportPath] = process.argv.slice(2)

  if (!baselineReportPath || !prReportPath) {
    console.error('Usage: node compare-reports.js <baseline-report.json> <pr-report.json>')
    process.exit(1)
  }

  // Load both validation reports
  const baselineReports = JSON.parse(await readFile(baselineReportPath, 'utf-8'))
  const prReports = JSON.parse(await readFile(prReportPath, 'utf-8'))

  // Compare reports and find changes
  const changedApis = []

  // Get all API names from both reports
  const allApiNames = new Set([
    ...Object.keys(baselineReports),
    ...Object.keys(prReports)
  ])

  for (const apiName of allApiNames) {
    const baselineReport = baselineReports[apiName]
    const prReport = prReports[apiName]

    // If API exists in PR but not baseline, or vice versa, or has changes
    if (hasChanges(baselineReport, prReport)) {
      changedApis.push({
        api: apiName,
        baseline: baselineReport || null,
        current: prReport || null
      })
    }
  }

  changedApis.sort((a, b) => a.api.localeCompare(b.api))

  // Build PR comment
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

function hasChanges(baselineReport, prReport) {
  // If one exists and the other doesn't, that's a change
  if (!baselineReport && prReport) return true
  if (baselineReport && !prReport) return true
  if (!baselineReport && !prReport) return false

  return baselineReport.status !== prReport.status ||
         baselineReport.passingRequest !== prReport.passingRequest ||
         baselineReport.passingResponse !== prReport.passingResponse
}

function buildDiffTableLine(change) {
  const { api, baseline, current } = change

  // Handle cases where API exists in only one report
  if (!baseline && current) {
    // New API in PR
    const status = generateStatus(current.status)
    const request = generateRequest(current)
    const response = generateResponse(current)
    return `| ${tick}${api}${tick} | ➕ ${status} | ${request} | ${response} |\n`
  }

  if (baseline && !current) {
    // API removed in PR
    const status = generateStatus(baseline.status)
    const request = generateRequest(baseline)
    const response = generateResponse(baseline)
    return `| ${tick}${api}${tick} | ➖ ${status} | ${request} | ${response} |\n`
  }

  // Both exist - show changes
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