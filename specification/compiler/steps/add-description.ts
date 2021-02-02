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

import assert from 'assert'
import * as model from '../model/metamodel'
import { JsonSpec } from '../model/json-spec'

/**
 * Adds the `description` field to every path and query property
 * from the rest-api-spec. If a description for a property
 * does not exists, the `description` key will not be added.
 */
export default async function addDescription (model: model.Model, jsonSpec: Map<string, JsonSpec>): Promise<model.Model> {
  for (const endpoint of model.endpoints) {
    if (endpoint.request == null) continue
    const requestDefinition = getDefinition(endpoint.request.name)
    const spec = jsonSpec.get(endpoint.name)
    assert(spec, `Can't find the json spec for ${endpoint.name}`)

    for (const property of requestDefinition.path) {
      const definition = spec.url.paths.find(path => {
        if (path.parts == null) return false
        return path.parts[property.name] != null
      })
      if (definition != null && definition.parts != null) {
        const { description } = definition.parts[property.name]
        property.description = description
      }
    }
  }

  return model

  function getDefinition (name: string): model.Request {
    for (const type of model.types) {
      if (type.kind === 'request') {
        if (type.name.name === name) {
          return type
        }
      }
    }
    throw new Error(`Can't find the request definiton for ${name}`)
  }
}
