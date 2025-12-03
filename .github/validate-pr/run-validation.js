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
import { copyFile, writeFile } from 'fs/promises'
import specification from '../../output/schema/schema.json' with { type: 'json' }
import { run as getReport } from '../../../clients-flight-recorder/scripts/types-validator/index.js'
import {
  getNamespace,
  getName
} from '../../../clients-flight-recorder/scripts/types-validator/utils.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const privateNames = ['_global']
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
  const reports = new Map()

  // Collect all APIs to validate
  const apisToValidate = new Set()

  cd(path.join(__dirname, '..', '..'))
  for (const file of await glob('specification/**/*.ts')) {
    if (file.startsWith('specification/_types')) continue
    if (file.startsWith('specification/node_modules')) continue
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

  cd(tsValidationPath)
  console.log(`Validating ${apisToValidate.size} APIs...`)

  // Call getReport once with all APIs
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

  // Save reports to JSON file
  const reportsObject = Object.fromEntries(reports)
  await writeFile(
    path.join(__dirname, 'validation-report.json'),
    JSON.stringify(reportsObject, null, 2)
  )

  console.log(`Validation complete. Report saved to validation-report.json`)
}

function getApi (file) {
  return file.split('/').slice(1, 3).filter(s => !privateNames.includes(s)).filter(Boolean).join('.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})