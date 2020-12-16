'use strict'

const { writeFileSync } = require('fs')
const { join } = require('path')
const { endpoints, types } = require('../output/schema/schema.json')

let definitions = `/*
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

import * as T from './types'
import {
  TransportRequestPromise,
  TransportRequestCallback,
  TransportRequestOptions,
  ApiError,
  ApiResponse
} from '../lib/Transport'
/**
  * We are still working on this type, it will arrive soon.
  * If it's critical for you, please open an issue.
  * https://github.com/elastic/elasticsearch-js
  */
type TODO = Record<string, any>
declare type callbackFn<TResponse, TContext> = (err: ApiError, result: ApiResponse<TResponse, TContext>) => void;
declare class ESAPI {\n`

const namespaces = []
for (let i = 0; i < endpoints.length; i++) {
  const endpoint = endpoints[i]
  if (isNested(endpoint.name)) {
    if (namespaces.includes(getNamespace(endpoint))) {
      definitions += `    ${generateDefinition(endpoint)}\n`
    } else {
      namespaces.push(getNamespace(endpoint))
      if (endpoints[i - 1] && namespaces.includes(getNamespace(endpoints[i - 1]))) {
        definitions += '  }\n'
      }
      definitions += `  ${camelify(getNamespace(endpoint))}: {\n`
      definitions += `    ${generateDefinition(endpoint)}\n`
    }
  } else {
    if (endpoints[i - 1] && namespaces.includes(getNamespace(endpoints[i - 1]))) {
      definitions += '  }\n'
    }
    definitions += `  ${generateDefinition(endpoint)}\n`
  }
}

if (isNested(endpoints[endpoints.length - 1].name)) {
  definitions += '  }\n'
}

definitions += '}\n\nexport default ESAPI\n'

writeFileSync(
  join(__dirname, 'client.ts'),
  definitions,
  'utf8'
)

function generateDefinition (endpoint) {
  const name = isNested(endpoint.name)
    ? endpoint.name.split('.')[1]
    : endpoint.name
  const requestType = getType(endpoint.request.name)
  const responseType = getType(endpoint.response.name)

  let requestDefinition = ''
  let requestGenerics = ''

  if (Array.isArray(requestType.generics)) {
    requestDefinition = `T.${requestType.name.name}<${requestType.generics.join(', ')}>`
    requestGenerics = requestType.generics.join(', ') + ', '
  } else {
    requestDefinition = `T.${requestType.name.name}`
  }

  let responseDefinition = ''
  let responseGenerics = ''

  if (Array.isArray(responseType.generics)) {
    responseDefinition = `T.${responseType.name.name}<${responseType.generics.map(avoidCollisions).join(', ')}>`
    responseGenerics = responseType.generics.map(avoidCollisions).join(', ') + ', '
  } else {
    responseDefinition = `T.${responseType.name.name}`
  }

  let definition = `${camelify(name)}<${responseGenerics}${requestGenerics}TContext = unknown>(params${isParamsRequired() ? '' : '?'}: ${requestDefinition}, options?: TransportRequestOptions): TransportRequestPromise<ApiResponse<${responseDefinition}, TContext>>`
  if (!isParamsRequired()) {
    definition += `\n${indent()}${camelify(name)}<${responseGenerics}${requestGenerics}TContext = unknown>(callback: callbackFn<${responseDefinition}, TContext>): TransportRequestCallback`
  }
  definition += `\n${indent()}${camelify(name)}<${responseGenerics}${requestGenerics}TContext = unknown>(params: ${requestDefinition}, callback: callbackFn<${responseDefinition}, TContext>): TransportRequestCallback`
  definition += `\n${indent()}${camelify(name)}<${responseGenerics}${requestGenerics}TContext = unknown>(params: ${requestDefinition}, options: TransportRequestOptions, callback: callbackFn<${responseDefinition}, TContext>): TransportRequestCallback`

  return definition

  function indent () {
    return isNested(endpoint.name) ? '    ' : '  '
  }

  function isParamsRequired () {
    return Array.isArray(requestType.generics)
  }

  function avoidCollisions (generic) {
    if (!Array.isArray(requestType.generics)) {
      return generic
    } else if (requestType.generics.includes(generic)) {
      return generic + 'R'
    } else {
      return generic
    }
  }
}

function getType (name) {
  for (const type of types) {
    if (type.name.name === name) {
      return type
    }
  }
  return null
}

function getNamespace (endpoint) {
  return isNested(endpoint.name)
    ? endpoint.name.split('.')[0]
    : endpoint.name
}

function isNested (name) {
  return name.split('.').length > 1
}

function camelify (name) {
  return name.replace(/_([a-z])/g, k => k[1].toUpperCase())
}
