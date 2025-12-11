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
 * Adds the description from the rest-api-spec to every endpoint, path and query property
 * if not already present (i.e. missing in the TypeScript definition)
 */
export default async function addDescription (model: model.Model, jsonSpec: Map<string, JsonSpec>): Promise<model.Model> {
  for (const endpoint of model.endpoints) {
    if (endpoint.request == null) continue
    const requestDefinition = getDefinition(endpoint.request)
    const spec = jsonSpec.get(endpoint.name)
    assert(spec, `Can't find the json spec for ${endpoint.name}`)

    if (spec.documentation.description != null) {
      requestDefinition.description = requestDefinition.description ?? spec.documentation.description
    }

    // An API endpoint is defined by an endpoint object (paths and http methods) and a request
    // type (parameters and structure).
    endpoint.description = requestDefinition.description ?? spec.documentation.description
  }

  return model

  function getDefinition (request: model.TypeName): model.Request {
    for (const type of model.types) {
      if (type.kind === 'request') {
        if (type.name.name === request.name && type.name.namespace === request.namespace) {
          return type
        }
      }
    }
    throw new Error(`Can't find the request definiton for ${request.namespace}.${request.name}`)
  }
}
