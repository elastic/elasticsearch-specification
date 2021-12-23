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
import { ValidationErrors } from '../validation-errors'

// This code can be simplified once https://github.com/tc39/proposal-set-methods is available

enum Body {
  noBody = 0,
  yesBody = 1
}

const LOG = 'ALL' // default: ALL

/**
 * Validates the model against the rest-api-spec.
 * It verifies is the model has exactly the same path and query parameters,
 * furthermore it verifies if the body is required or not.
 * If a validation fails, it will log a warning.
 */
export default async function validateRestSpec (model: model.Model, jsonSpec: Map<string, JsonSpec>, errors: ValidationErrors): Promise<model.Model> {
  for (const endpoint of model.endpoints) {
    if (endpoint.request == null) continue
    const requestDefinition = getDefinition(endpoint.request)
    const requestProperties = getProperties(requestDefinition)
    if (endpoint.request.name === LOG || LOG === 'ALL') {
      const spec = jsonSpec.get(endpoint.name)
      assert(spec, `Can't find the json spec for ${endpoint.name}`)

      const urlParts = Array.from(new Set(spec.url.paths
        .filter(path => path.parts != null)
        .flatMap(path => {
          assert(path.parts != null)
          return Object.keys(path.parts)
        })
      ))
      const pathProperties = requestProperties.path.map(property => property.name)
      // are all the parameters in the request definition present in the json spec?
      for (const name of pathProperties) {
        if (!urlParts.includes(name)) {
          errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: path parameter '${name}' does not exist in the json spec`)
        }
      }

      // are all the parameters in the json spec present in the request definition?
      for (const name of urlParts) {
        if (!pathProperties.includes(name)) {
          errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: missing json spec path parameter '${name}'`)
        }
      }

      if (spec.params != null) {
        const params = Object.keys(spec.params)
        const queryProperties = requestProperties.query.map(property => property.name)
        // are all the parameters in the request definition present in the json spec?
        for (const name of queryProperties) {
          if (!params.includes(name)) {
            errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: query parameter '${name}' does not exist in the json spec`)
          }
        }

        // are all the parameters in the json spec present in the request definition?
        for (const name of params) {
          if (!queryProperties.includes(name)) {
            errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: missing json spec query parameter '${name}'`)
          }
        }
      }

      if (requestProperties.body === Body.yesBody && spec.body == null) {
        errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: should not have a body`)
      }

      if (requestProperties.body === Body.noBody && spec.body != null && spec.body.required === true) {
        errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: should have a body definition`)
      }
    }
  }

  return model

  function getDefinition (name: model.TypeName): model.Request | model.Interface {
    for (const type of model.types) {
      if (type.kind === 'request' || type.kind === 'interface') {
        if (type.name.name === name.name && type.name.namespace === name.namespace) {
          return type
        }
      }
    }
    throw new Error(`Can't find the request definiton for ${name.namespace}.${name.name}`)
  }

  // recursively gets the properties from the current and inherited classes
  function getProperties (definition: model.Request | model.Interface): { path: model.Property[], query: model.Property[], body: Body } {
    const path: model.Property[] = []
    const query: model.Property[] = []
    let body: Body = Body.noBody

    if (definition.kind === 'request') {
      if (definition.path.length > 0) {
        path.push(...definition.path)
      }

      if (definition.query.length > 0) {
        query.push(...definition.query)
      }

      if (definition.body != null) {
        body = Body.yesBody
      }
    } else {
      if (definition.properties.length > 0) {
        query.push(...definition.properties)
      }
    }

    if (Array.isArray(definition.inherits)) {
      const inherits = definition.inherits.map(inherit => getDefinition(inherit.type))
      for (const inherit of inherits) {
        const properties = getProperties(inherit)
        if (properties.path.length > 0) {
          path.push(...properties.path)
        }

        if (properties.query.length > 0) {
          query.push(...properties.query)
        }

        if (properties.body === Body.yesBody) {
          body = properties.body
        }
      }
    }

    return { path, query, body }
  }
}
