import fs from 'fs'
import path from 'path'
import { Specification } from '../specification/src/api-specification'
import Domain from '../specification/src/domain'
import { pipeline } from 'stream'
import get from 'simple-get'
import tar from 'tar'
import gunzip from 'gunzip-maybe'

const esFolder = path.join(__dirname, 'elasticsearch')
const apiFolder = path.join(esFolder, 'rest-api-spec', 'src', 'main', 'resources', 'rest-api-spec', 'api')
const xPackFolder = path.join(esFolder, 'x-pack', 'plugin', 'src', 'test', 'resources', 'rest-api-spec', 'api')
const specification = Specification.load()

let typeDefinitions = `/*
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

import T from './types'

/**
  * We are still working on this type, it will arrive soon.
  * If it's critical for you, please open an issue.
  * https://github.com/elastic/elasticsearch-js
  */
type TODO = Record<string, any>

declare class ESAPI {\n`

class MissingEndpoint {
  name: string
  constructor (name: string) {
    this.name = name
  }
}

async function getAllApis (): Promise<Array<Domain.Endpoint | MissingEndpoint>> {
  if (!fs.existsSync(esFolder)) {
    await downloadElasticsearch('7.10')
    await unTarElasticsearch()
  }

  const ossApiNames = fs.readdirSync(apiFolder)
    .filter(f => f !== '_common.json')
    .filter(f => !f.includes('deprecated'))
    .map(file => JSON.parse(fs.readFileSync(path.join(apiFolder, file), 'utf8')))
    .map(api => Object.keys(api)[0])

  const xPackApiNames = fs.readdirSync(xPackFolder)
    .filter(f => !f.includes('deprecated'))
    .map(file => JSON.parse(fs.readFileSync(path.join(xPackFolder, file), 'utf8')))
    .map(api => Object.keys(api)[0])

  const missing = []
  for (const apiName of ossApiNames.concat(xPackApiNames)) {
    let found = false
    for (const endpoint of specification.endpoints) {
      if (endpoint.name === apiName) {
        found = true
        break
      }
    }
    if (!found) {
      missing.push(new MissingEndpoint(apiName))
    }
  }

  return specification.endpoints
    .concat(missing)
    .sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
}

function createFromEndpoints (endpoints: Array<Domain.Endpoint | MissingEndpoint>) {
  const namespaces = []
  for (let i = 0; i < endpoints.length; i++) {
    const endpoint = endpoints[i]
    if (isNested(endpoint.name)) {
      if (namespaces.includes(getNamespace(endpoint))) {
        typeDefinitions += `    ${generateDefinition(endpoint)}\n`
      } else {
        namespaces.push(getNamespace(endpoint))
        if (endpoints[i - 1] && namespaces.includes(getNamespace(endpoints[i - 1]))) {
          typeDefinitions += '  }\n'
        }
        typeDefinitions += `  ${camelify(getNamespace(endpoint))}: {\n`
        typeDefinitions += `    ${generateDefinition(endpoint)}\n`
      }
    } else {
      if (endpoints[i - 1] && namespaces.includes(getNamespace(endpoints[i - 1]))) {
        typeDefinitions += '  }\n'
      }
      typeDefinitions += `  ${generateDefinition(endpoint)}\n`
    }
  }

  if (isNested(endpoints[endpoints.length - 1].name)) {
    typeDefinitions += '  }\n'
  }
  typeDefinitions += '}\n'
  typeDefinitions += '\nexport default ESAPI\n'
  fs.writeFileSync(
    path.join(__dirname, '..', 'output', 'typescript', 'client.ts'),
    typeDefinitions,
    'utf8'
  )
}

function generateDefinition (endpoint: Domain.Endpoint | MissingEndpoint): string {
  const name = isNested(endpoint.name)
    ? endpoint.name.split('.')[1]
    : endpoint.name
  const requestType = endpoint instanceof Domain.Endpoint
    ? specification.types.find(t => t.name === endpoint.typeMapping.request) as Domain.RequestInterface
    : null
  const responseType = endpoint instanceof Domain.Endpoint
    ? specification.types.find(t => t.name === endpoint.typeMapping.response) as Domain.Interface
    : null

  let requestDefinition = endpoint instanceof Domain.Endpoint
    ? endpoint.typeMapping.request
    : 'TODO'
  let responseDefinition = endpoint instanceof Domain.Endpoint
    ? endpoint.typeMapping.response
    : 'TODO'
  let requestInitialGenerics = ''
  let responseInitialGenerics = ''

  if (requestType) {
    for (const generic of requestType.openGenerics) {
      if (responseType.openGenerics.includes(generic)) {
        requestType.openGenerics[requestType.openGenerics.indexOf(generic)] = `${generic}Req`
        responseType.openGenerics[responseType.openGenerics.indexOf(generic)] = `${generic}Res`
      }
    }
  }

  if (requestType) {
    requestDefinition = `T.${requestDefinition}`
    if (requestType.openGenerics.length > 0) {
      requestDefinition += `<${requestType.openGenerics.join(', ')}>`
      requestInitialGenerics += requestType.openGenerics.join(', ') + ', '
    }
  } else {
    requestDefinition = 'TODO'
  }

  if (responseType) {
    responseDefinition = `T.${responseDefinition}`
    if (responseType.openGenerics.length > 0) {
      responseDefinition += `<${responseType.openGenerics.join(', ')}>`
      responseInitialGenerics += responseType.openGenerics.join(', ') + ', '
    }
  } else {
    responseDefinition = 'TODO'
  }

  return `${camelify(name)}<${responseInitialGenerics}${requestInitialGenerics}TContext = unknown>(params?: ${requestDefinition}, options?: any): Promise<${responseDefinition}>`
}


function getNamespace (endpoint: Domain.Endpoint | MissingEndpoint): string {
  return isNested(endpoint.name)
    ? endpoint.name.split('.')[0]
    : endpoint.name
}

function isNested (name: string): boolean {
  return name.split('.').length > 1
}

function camelify (name: string): string {
  return name.replace(/_([a-z])/g, k => k[1].toUpperCase())
}

function downloadElasticsearch (ref = 'master') {
  console.log('starting download of Elasticsearch ..')
  return new Promise((resolve, reject) => {
    const opts = {
      url: `https://api.github.com/repos/elastic/elasticsearch/tarball/${ref}`,
      headers: {
        'user-agent': 'elastic/elastic-client-generator'
      }
    }
    get(opts, (err, res) => {
      if (err) return reject(err)
      if (res.statusCode >= 400) {
        return reject(new Error(`Something went wrong: ${res.statusCode}`))
      }
      const stream = fs.createWriteStream(path.join(__dirname, 'elasticsearch.tar.gz'))
      pipeline(res, stream, err => {
        console.log('download of Elasticsearch completed.')
        if (err) return reject(err)
        resolve()
      })
    })
  })
}

function unTarElasticsearch () {
  console.log('starting untar of Elasticsearch ..')
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(path.join(__dirname, 'elasticsearch.tar.gz'))
    // @ts-ignore
    pipeline(stream, gunzip(), tar.extract(), err => {
      if (err) return reject(err)
      for (const dir of fs.readdirSync(path.join(__dirname))) {
        if (dir.startsWith('elastic-elasticsearch-')) {
          fs.renameSync(dir, path.join(__dirname, 'elasticsearch'))
          break
        }
      }
      console.log('Elasticsearch completely unpacked.')
      resolve()
    })
  })
}

getAllApis()
  .then(endpoints => {
    createFromEndpoints(endpoints)
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
