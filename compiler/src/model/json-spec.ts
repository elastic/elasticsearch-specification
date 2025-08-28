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

/* eslint-disable @typescript-eslint/no-var-requires */

import { join } from 'path'
import { readdirSync } from 'fs'
import * as model from './metamodel'

const jsonSpecPath = join(__dirname, '..', '..', '..', 'specification', '_json_spec')

export interface JsonSpec {
  documentation: {
    url: string
    description: string
  }
  stability: model.Stability
  visibility: model.Visibility
  feature_flag?: string
  headers: {
    accept?: string[]
    content_type?: string[]
  }
  url: {
    paths: Array<{
      path: string
      methods: string[]
      parts?: Record<string, {
        type: string
        description: string
        deprecated?: boolean
      }>
      deprecated?: {
        version: string
        description: string
      }
    }>
  }
  params?: Record<string, {
    type: string
    description: string
    options?: string[]
  }>
  body?: {
    description: string
    required?: boolean
  }
  docTag?: string
  externalDocs?: {
    url: string
    description?: string
  }
}

export default function buildJsonSpec (): Map<string, JsonSpec> {
  const files = readdirSync(jsonSpecPath)
    .filter(file => file.endsWith('.json'))

  const map: Map<string, JsonSpec> = new Map()
  for (const file of files) {
    const json = require(join(jsonSpecPath, file))
    const name = Object.keys(json)[0]
    map.set(name, json[name])
  }

  // Ensure deterministic ordering
  return new Map([...map.entries()].sort((a, b) => a[0].localeCompare(b[0])))
}
