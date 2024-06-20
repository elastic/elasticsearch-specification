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

'use strict'

const core = require('@actions/core')
const { join } = require('path')
const minimist = require('minimist')
const stream = require('stream')
const { promisify } = require('util')
const { createWriteStream, promises } = require('fs')
const rimraf = require('rimraf')
const fetch = require('node-fetch')
const crossZip = require('cross-zip')

const { mkdir, rename, readdir, unlink } = promises
const pipeline = promisify(stream.pipeline)
const unzip = promisify(crossZip.unzip)
const rm = promisify(rimraf)

const esFolder = join(__dirname, '..', '..', 'artifacts')
const zipFolder = join(esFolder, 'artifacts.zip')
const downloadedSpec = join(esFolder, 'rest-api-spec', 'api')
const specFolder = join(__dirname, '..', '..', 'specification', '_json_spec')

async function downloadArtifacts (opts) {
  if (typeof opts.version !== 'string' && typeof opts.branch !== 'string') {
    throw new Error('Missing version or branch')
  }

  core.info('Checking out spec and test')

  core.info('Resolving version')
  let resolved
  try {
    resolved = await resolve(opts.version || fromBranch(opts.branch), opts.hash)
  } catch (err) {
    core.error(err.message)
    process.exit(1)
  }

  opts.version = resolved.version
  core.info(`Resolved version ${opts.version}`)

  core.info('Cleanup')
  await rm(esFolder)
  await rm(specFolder)
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
  await rm(zipFolder)

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

async function resolve (version, hash) {
  if (version === 'latest') {
    const response = await fetch('https://artifacts-api.elastic.co/v1/versions')
    if (!response.ok) {
      throw new Error(`unexpected response ${response.statusText}`)
    }
    const { versions } = await response.json()
    version = versions.pop()
  }

  core.info(`Resolving version ${version}`)
  const response = await fetch(`https://artifacts-api.elastic.co/v1/versions/${version}`)
  if (!response.ok) {
    throw new Error(`unexpected response ${response.statusText}`)
  }

  const data = await response.json()
  const esBuilds = data.version.builds
    .filter(build => build.projects.elasticsearch != null)
    .map(build => {
      return {
        projects: build.projects.elasticsearch,
        buildId: build.build_id,
        date: build.start_time,
        version: build.version
      }
    })
    .sort((a, b) => {
      const dA = new Date(a.date)
      const dB = new Date(b.date)
      if (dA > dB) return -1
      if (dA < dB) return 1
      return 0
    })

  if (hash != null) {
    const build = esBuilds.find(build => build.projects.commit_hash === hash)
    if (!build) {
      throw new Error(`Can't find any build with hash '${hash}'`)
    }
    const zipKey = Object.keys(build.projects.packages).find(key => key.startsWith('rest-resources-zip-') && key.endsWith('.zip'))
    return {
      url: build.projects.packages[zipKey].url,
      id: build.buildId,
      hash: build.projects.commit_hash,
      version: build.version
    }
  }

  const lastBuild = esBuilds[0]
  const zipKey = Object.keys(lastBuild.projects.packages).find(key => key.startsWith('rest-resources-zip-') && key.endsWith('.zip'))
  return {
    url: lastBuild.projects.packages[zipKey].url,
    id: lastBuild.buildId,
    hash: lastBuild.projects.commit_hash,
    version: lastBuild.version
  }
}

function fromBranch (branch) {
  if (branch === 'main') {
    return 'latest'
  } else if (branch === '7.x') {
    return '7.x-SNAPSHOT'
  } else if ((branch.startsWith('7.') || branch.startsWith('8.')) && !isNaN(Number(branch.split('.')[1]))) {
    return `${branch}-SNAPSHOT`
  } else {
    throw new Error(`Cannot derive version from branch '${branch}'`)
  }
}

async function main (options) {
  await downloadArtifacts(options)
}

const options = minimist(process.argv.slice(2), {
  string: ['id', 'version', 'hash', 'branch']
})
main(options).catch(t => {
  core.error(t)
  process.exit(1)
})
