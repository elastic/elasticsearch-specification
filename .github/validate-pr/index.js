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

require('zx/globals')
const assert = require('assert')
const core = require('@actions/core')
const github = require('@actions/github')
const octokit = github.getOctokit(argv.token)
const specification = require('../../output/schema/schema.json')

const tsValidationPath = path.join(__dirname, '..', '..', '..', 'clients-flight-recorder', 'scripts', 'types-validator')

async function run () {
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
      files.push(...data.map(entry => entry.filename))
      page += 1
    } else {
      break
    }
  }

  const logs = []
  const specFiles = files.filter(file => file.includes('specification'))

  cd(tsValidationPath)

  for (const file of specFiles) {
    if (file.startsWith('specification/_types')) continue
    if (file.startsWith('specification/_spec_utils')) continue
    if (file.startsWith('specification/_doc_ids')) continue
    if (file.startsWith('specification/_json_spec')) continue
    if (getApi(file).endsWith('_types')) {
      const apis = specification.endpoints
        .filter(endpoint => endpoint.name.includes(getApi(file).split('.')[0]))
        .map(endpoint => endpoint.name)
      for (const api of apis) {
        const Process = await $`STACK_VERSION=${argv.version} node index.js --api ${api} --request --response --verbose`
        logs.push({
          api,
          log: Process.toString()
        })
      }
    } else {
      const Process = await $`STACK_VERSION=${argv.version} node index.js --api ${getApi(file)} --request --response --verbose`
      logs.push({
        api: getApi(file),
        log: Process.toString(),
        hasErrors: /has\ssome\serrors/gm.test(Process.toString())
      })
    }
  }

  cd(path.join(__dirname, '..', '..'))

  const tick = '`'
  let comment = 'Following you can find the validation results for the APIs you have changed.\n\n'
  for (const log of logs) {
    comment += '<details>\n'
    comment += `<summary>${log.hasErrors ? ':red_circle:' : ':green_circle:'} <code>${log.api}</code></summary>\n\n`
    comment += `${tick}${tick}${tick}sh
${log.log}
${tick}${tick}${tick}\n`
    comment += '</details>\n\n'
  }

  await octokit.rest.issues.createComment({
    owner: 'elastic',
    repo: 'elasticsearch-specification',
    issue_number: context.payload.pull_request.number,
    body: comment
  })

  core.info('Done!')
}

const privateNames = ['_global']

function getApi (file) {
  return file.split('/').slice(1, 3).filter(s => !privateNames.includes(s)).filter(Boolean).join('.')
}

run().catch(err => {
  core.error(err)
  process.exit(1)
})
