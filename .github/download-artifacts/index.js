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

import core from '@actions/core'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import minimist from 'minimist'
import stream from 'stream'
import { promisify } from 'util'
import { createWriteStream, promises } from 'fs'
import { rimraf } from 'rimraf'
import fetch from 'node-fetch'
import crossZip from 'cross-zip'

const { mkdir, rename, readdir, unlink } = promises
const pipeline = promisify(stream.pipeline)
const unzip = promisify(crossZip.unzip)

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const esFolder = join(__dirname, '..', '..', 'artifacts')
const zipFolder = join(esFolder, 'artifacts.zip')
const downloadedSpec = join(esFolder, 'rest-api-spec', 'api')
const specFolder = join(__dirname, '..', '..', 'specification', '_json_spec')

async function downloadArtifacts (opts) {
  if (typeof opts.branch !== 'string') {
    throw new Error('Missing branch')
  }

  core.info('Resolving artifact URL')

  let resolved
  try {
    resolved = await resolve(opts.branch)
  } catch (err) {
    core.error(err.message)
    process.exit(1)
  }

  core.info(`Resolved artifact URL for ${resolved.commit_url}`)

  core.info('Cleanup')
  await rimraf(esFolder)
  await rimraf(specFolder)
  await mkdir(esFolder, { recursive: true })
  await mkdir(specFolder, { recursive: true })

  core.info('Downloading artifacts')
  const response = await fetch(resolved.url)
  if (!response.ok) {
    core.error(`unexpected response ${response.statusText}`)
    process.exit(1)
  }
  await pipeline(response.body, createWriteStream(zipFolder))

  core.info('Unzipping')
  await unzip(zipFolder, esFolder)

  core.info('Cleanup')
  await rimraf(zipFolder)

  core.info('Moving files')
  const files = await readdir(downloadedSpec)
  for (const file of files) {
    if (file === '_common.json') continue
    await rename(join(downloadedSpec, file), join(specFolder, file))
  }

  /** Delete files that weren't in the zip file */
  const specFiles = await readdir(specFolder)
  for (const file of specFiles) {
    if (!files.includes(file)) {
      await unlink(join(specFolder, file))
    }
  }

  core.info('Done')
}

async function resolve (branch) {
  const url = `https://artifacts-snapshot.elastic.co/elasticsearch/latest/${branch}.json`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Unexpected response. Invalid version? ${url}: ${response.statusText}`)
  }
  const data = await response.json()

  let manifest_url = data.manifest_url
  const manifestResponse = await fetch(manifest_url)
  if (!manifestResponse.ok) {
    throw new Error(`Unexpected manifestResponse. ${manifest_url}: ${manifestResponse.statusText}`)
  }
  const manifestData = await manifestResponse.json()
  const elasticsearch = manifestData.projects.elasticsearch
  const restResourceName = `rest-resources-zip-${manifestData.version}.zip`

  return {
    url: elasticsearch.packages[restResourceName].url,
    commit_url: elasticsearch.commit_url,
  }
}

async function main (options) {
  await downloadArtifacts(options)
}

const options = minimist(process.argv.slice(2), {
  string: ['branch']
})
main(options).catch(t => {
  core.error(t)
  process.exit(1)
})
