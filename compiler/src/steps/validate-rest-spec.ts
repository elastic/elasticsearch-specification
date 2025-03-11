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
import { deepEqual } from '../model/utils'

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

      // Check URL paths and methods
      if (spec.url.paths.length !== endpoint.urls.length) {
        errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: different number of urls in the json spec`)
      } else {
        for (const modelUrl of endpoint.urls) {
          // URL path
          const restSpecUrl = spec.url.paths.find(path => path.path === modelUrl.path)
          if (restSpecUrl == null) {
            errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: url path '${modelUrl.path}' not found in the json spec`)
          } else {
            // URL methods
            if (!deepEqual([...restSpecUrl.methods].sort(), [...modelUrl.methods].sort())) {
              errors.addEndpointError(endpoint.name, 'request', `${modelUrl.path}: different http methods in the json spec`)
            }

            // Deprecation.
            if ((restSpecUrl.deprecated != null) !== (modelUrl.deprecation != null)) {
              errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: different deprecation in the json spec`)
            }
          }
        }
      }

      // Check url parts
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

      // are all path parameters properly required or optional?
      let urlPartsRequired = new Set(urlParts)
      // A part is considered required if it is included in
      // every path for the API endpoint.
      for (const path of spec.url.paths) {
        if (path.parts == null) {
          // No parts means that all path parameters are optional!
          urlPartsRequired = new Set()
          break
        }
        urlPartsRequired = new Set([...Object.keys(path.parts)].filter((x) => urlPartsRequired.has(x)))
      }

      // transform [{name: ..., required: ...}] -> {name: {required: ...}}
      const pathPropertyMap: Record<string, model.Property> = requestProperties.path.reduce((prev, prop) => ({ ...prev, [prop.name]: prop }), {})
      for (const name of pathProperties) {
        // okay to skip if it's not included since this scenario
        // is covered above with a different error.
        if (!urlParts.includes(name)) {
          continue
        }
        // Find the mismatches between the specs
        if (urlPartsRequired.has(name) && !pathPropertyMap[name].required) {
          errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: path parameter '${name}' is required in the json spec`)
        } else if (!urlPartsRequired.has(name) && pathPropertyMap[name].required) {
          errors.addEndpointError(endpoint.name, 'request', `${endpoint.request.name}: path parameter '${name}' is optional in the json spec`)
        }
      }

      // fleet API are deliberately undocumented in rest-api-spec)
      if (spec.params != null && !endpoint.name.startsWith('fleet.')) {
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

      if (spec.body != null && spec.body.required === true && spec.body.required !== endpoint.requestBodyRequired) {
        errors.addEndpointError(endpoint.name, 'request', ': should not be an optional body definition')
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

      if (definition.body.kind !== 'no_body') {
        body = Body.yesBody
      }

      if (definition.attachedBehaviors != null) {
        for (const attachedBehavior of definition.attachedBehaviors) {
          const type_ = getDefinition({
            namespace: '_spec_utils',
            name: attachedBehavior
          })
          if (
            type_.kind === 'interface' &&
            // allowing CommonQueryParameters too generates many errors
            attachedBehavior === 'CommonCatQueryParameters'
          ) {
            for (const prop of type_.properties) {
              query.push(prop)
            }
          }
        }
      }
    } else {
      if (definition.properties.length > 0) {
        query.push(...definition.properties)
      }
    }

    return { path, query, body }
  }
}
