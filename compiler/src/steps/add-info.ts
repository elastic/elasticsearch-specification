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

import * as model from '../model/metamodel'
import { JsonSpec } from '../model/json-spec'
import { execSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

/**
 * Adds the `_info` field to the JSON model.
 * If this code is being run in the base branch, it will update the version and hash
 * fields with the value read from git, otherwise it will reuse the values
 * currently stored in the output schema.
 */
export default async function addInfo (model: model.Model, jsonSpec: Map<string, JsonSpec>): Promise<model.Model> {
  const branch = execSync('git branch --show-current').toString().trim()
  const isBaseBranch = branch === 'main' || branch.startsWith('7.')

  if (isBaseBranch && process.env.SKIP_VERSION_UPDATE !== 'true') {
    model._info = {
      version: branch,
      hash: execSync('git rev-parse --short HEAD').toString().trim(),
      title: 'Elasticsearch Request & Response Specification',
      license: {
        name: 'Apache 2.0',
        url: 'https://github.com/elastic/elasticsearch-specification/blob/master/LICENSE'
      }
    }
    writeFileSync(
      join(__dirname, '..', '..', '..', 'output', 'schema', 'hash.txt'),
      `${execSync('git rev-parse --short HEAD').toString().trim()}\n${branch}`,
      'utf8'
    )
  } else {
    const [hash, branch] = readFileSync(join(__dirname, '..', '..', '..', 'output', 'schema', 'hash.txt'), 'utf8').split('\n').filter(Boolean)
    model._info = {
      version: branch,
      hash,
      title: 'Elasticsearch Request & Response Specification',
      license: {
        name: 'Apache 2.0',
        url: 'https://github.com/elastic/elasticsearch-specification/blob/master/LICENSE'
      }
    }
  }

  return model
}
