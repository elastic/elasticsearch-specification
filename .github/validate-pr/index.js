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

  const specFiles = files.filter(file => file.includes('specification'))
  console.log(specFiles)
  await $`make validate api=bulk type=request stack-version=8.1.0-SNAPSHOT`
}

run().catch(err => {
  core.error(err)
  process.exit(1)
})
