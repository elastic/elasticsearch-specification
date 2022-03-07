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
import { writeFileSync, readFileSync } from 'fs'
import { join } from 'path'
import * as M from './metamodel'

const model: M.Model = JSON.parse(readFileSync(join(__dirname, '..', '..', 'output', 'schema', 'schema-v2.json'), 'utf8'))

const clientDefinitions = `/*
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

/// <reference types="node" />

import {
  ClientOptions,
  ConnectionPool,
  BaseConnectionPool,
  CloudConnectionPool,
  Connection,
  Serializer,
  Transport,
  errors,
  RequestEvent,
  ResurrectEvent,
  ApiError,
  NodeOptions,
  events
} from '../index'
import Helpers from '../lib/Helpers'
import {
  ApiResponse,
  TransportRequestCallback,
  TransportRequestPromise,
  TransportRequestParams,
  TransportRequestOptions
} from '../lib/Transport'
import * as T from './types'

/**
  * We are still working on this type, it will arrive soon.
  * If it's critical for you, please open an issue.
  * https://github.com/elastic/elasticsearch-js
  */
type TODO = Record<string, any>

// Extend API
interface ClientExtendsCallbackOptions {
  ConfigurationError: errors.ConfigurationError,
  makeRequest(params: TransportRequestParams, options?: TransportRequestOptions): Promise<void> | void;
  result: {
    body: null,
    statusCode: null,
    headers: null,
    warnings: null
  }
}
declare type extendsCallback = (options: ClientExtendsCallbackOptions) => any;
// /Extend API

declare type callbackFn<TResponse, TContext> = (err: ApiError, result: ApiResponse<TResponse, TContext>) => void;
declare class Client {
  constructor(opts: ClientOptions)
  connectionPool: ConnectionPool
  transport: Transport
  serializer: Serializer
  extend(method: string, fn: extendsCallback): void
  extend(method: string, opts: { force: boolean }, fn: extendsCallback): void;
  helpers: Helpers
  child(opts?: ClientOptions): Client
  close(callback: Function): void;
  close(): Promise<void>;
  emit(event: string | symbol, ...args: any[]): boolean;
  on(event: 'request', listener: (err: ApiError, meta: RequestEvent) => void): this;
  on(event: 'response', listener: (err: ApiError, meta: RequestEvent) => void): this;
  on(event: 'sniff', listener: (err: ApiError, meta: RequestEvent) => void): this;
  on(event: 'resurrect', listener: (err: null, meta: ResurrectEvent) => void): this;
  once(event: 'request', listener: (err: ApiError, meta: RequestEvent) => void): this;
  once(event: 'response', listener: (err: ApiError, meta: RequestEvent) => void): this;
  once(event: 'sniff', listener: (err: ApiError, meta: RequestEvent) => void): this;
  once(event: 'resurrect', listener: (err: null, meta: ResurrectEvent) => void): this;
  off(event: string | symbol, listener: (...args: any[]) => void): this;
`

const kibanaDefinitions = `/*
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

/// <reference types="node" />

import {
  ClientOptions,
  ConnectionPool,
  Serializer,
  Transport,
  errors,
  RequestEvent,
  ResurrectEvent,
  ApiError
} from '../index'
import Helpers from '../lib/Helpers'
import {
  ApiResponse,
  TransportRequestPromise,
  TransportRequestParams,
  TransportRequestOptions
} from '../lib/Transport'
import * as T from './types'

/**
  * We are still working on this type, it will arrive soon.
  * If it's critical for you, please open an issue.
  * https://github.com/elastic/elasticsearch-js
  */
type TODO = Record<string, any>

// Extend API
interface ClientExtendsCallbackOptions {
  ConfigurationError: errors.ConfigurationError,
  makeRequest(params: TransportRequestParams, options?: TransportRequestOptions): Promise<void> | void;
  result: {
    body: null,
    statusCode: null,
    headers: null,
    warnings: null
  }
}
declare type extendsCallback = (options: ClientExtendsCallbackOptions) => any;
// /Extend API

interface KibanaClient {
  connectionPool: ConnectionPool
  transport: Transport
  serializer: Serializer
  extend(method: string, fn: extendsCallback): void
  extend(method: string, opts: { force: boolean }, fn: extendsCallback): void;
  helpers: Helpers
  child(opts?: ClientOptions): KibanaClient
  close(): Promise<void>;
  emit(event: string | symbol, ...args: any[]): boolean;
  on(event: 'request', listener: (err: ApiError, meta: RequestEvent) => void): this;
  on(event: 'response', listener: (err: ApiError, meta: RequestEvent) => void): this;
  on(event: 'sniff', listener: (err: ApiError, meta: RequestEvent) => void): this;
  on(event: 'resurrect', listener: (err: null, meta: ResurrectEvent) => void): this;
  once(event: 'request', listener: (err: ApiError, meta: RequestEvent) => void): this;
  once(event: 'response', listener: (err: ApiError, meta: RequestEvent) => void): this;
  once(event: 'sniff', listener: (err: ApiError, meta: RequestEvent) => void): this;
  once(event: 'resurrect', listener: (err: null, meta: ResurrectEvent) => void): this;
  off(event: string | symbol, listener: (...args: any[]) => void): this;
`

function createClientTypes (kibana = false): void {
  let definitions = kibana ? kibanaDefinitions : clientDefinitions
  const namespaces: string[] = []

  for (let i = 0; i < model.endpoints.length; i++) {
    const endpoint = model.endpoints[i]
    if (isNested(endpoint.name)) {
      if (namespaces.includes(getNamespace(endpoint))) {
        definitions += `    ${generateDefinition(endpoint)}\n`
      } else {
        namespaces.push(getNamespace(endpoint))
        if (model.endpoints[i - 1] != null && namespaces.includes(getNamespace(model.endpoints[i - 1]))) {
          definitions += '  }\n'
        }
        definitions += `  ${camelify(getNamespace(endpoint))}: {\n`
        definitions += `    ${generateDefinition(endpoint)}\n`
      }
    } else {
      if (model.endpoints[i - 1] != null && namespaces.includes(getNamespace(model.endpoints[i - 1]))) {
        definitions += '  }\n'
      }
      definitions += `  ${generateDefinition(endpoint)}\n`
    }
  }

  if (isNested(model.endpoints[model.endpoints.length - 1].name)) {
    definitions += '  }\n'
  }

  if (kibana) {
    definitions += '}\n\nexport { KibanaClient }\n'
  } else {
    definitions += `}

export * as estypes from './types'
export {
  Client,
  Transport,
  ConnectionPool,
  BaseConnectionPool,
  CloudConnectionPool,
  Connection,
  Serializer,
  events,
  errors,
  ApiError,
  ApiResponse,
  RequestEvent,
  ResurrectEvent,
  ClientOptions,
  NodeOptions,
  ClientExtendsCallbackOptions
}`
  }

  writeFileSync(
    join(__dirname, 'output.d.ts'),
    definitions,
    'utf8'
  )

  function generateDefinition (endpoint: M.Endpoint): string {
    const name = isNested(endpoint.name)
      ? endpoint.name.split('.')[1]
      : endpoint.name

    const requestType = endpoint.request != null ? getType(endpoint.request) : null
    const responseType = endpoint.response != null ? getType(endpoint.response) : null

    if (requestType == null || responseType == null) {
      let definition = `${camelify(name)}<TContext = unknown>(params?: TODO, options?: TransportRequestOptions): TransportRequestPromise<ApiResponse<TODO, TContext>>`
      if (kibana) {
        return definition
      }

      definition += `\n${indent()}${camelify(name)}<TContext = unknown>(callback: callbackFn<TODO, TContext>): TransportRequestCallback`
      definition += `\n${indent()}${camelify(name)}<TContext = unknown>(params: TODO, callback: callbackFn<TODO, TContext>): TransportRequestCallback`
      definition += `\n${indent()}${camelify(name)}<TContext = unknown>(params: TODO, options: TransportRequestOptions, callback: callbackFn<TODO, TContext>): TransportRequestCallback`

      return definition
    }

    let requestDefinition = ''
    let requestGenerics = ''

    if (Array.isArray(requestType.generics)) {
      requestDefinition = `T.${createName(requestType.name)}<${requestType.generics.map(unwrapGeneric).join(', ')}>`
      requestGenerics = requestType.generics
        .map(unwrapGeneric)
        .map(unknownify)
        .join(', ') + ', '
    } else if (requestType === null) {
      requestDefinition = 'TODO'
    } else {
      requestDefinition = `T.${createName(requestType.name)}`
    }

    let responseDefinition = ''
    let responseGenerics = ''

    if (Array.isArray(responseType.generics)) {
      responseDefinition = `T.${createName(responseType.name)}<${responseType.generics.map(unwrapGeneric).map(avoidCollisions).join(', ')}>`
      responseGenerics = responseType.generics
        .map(unwrapGeneric)
        .map(avoidCollisions)
        .map(unknownify)
        .join(', ') + ', '
    } else if (responseType === null) {
      responseDefinition = 'TODO'
    } else {
      responseDefinition = `T.${createName(responseType.name)}`
    }

    let definition = `${camelify(name)}<${responseGenerics}${requestGenerics}TContext = unknown>(params${isParamsRequired() ? '' : '?'}: ${requestDefinition}, options?: TransportRequestOptions): TransportRequestPromise<ApiResponse<${responseDefinition}, TContext>>`
    if (kibana) {
      return definition
    }

    if (!isParamsRequired()) {
      definition += `\n${indent()}${camelify(name)}<${responseGenerics}${requestGenerics}TContext = unknown>(callback: callbackFn<${responseDefinition}, TContext>): TransportRequestCallback`
    }
    definition += `\n${indent()}${camelify(name)}<${responseGenerics}${requestGenerics}TContext = unknown>(params: ${requestDefinition}, callback: callbackFn<${responseDefinition}, TContext>): TransportRequestCallback`
    definition += `\n${indent()}${camelify(name)}<${responseGenerics}${requestGenerics}TContext = unknown>(params: ${requestDefinition}, options: TransportRequestOptions, callback: callbackFn<${responseDefinition}, TContext>): TransportRequestCallback`

    return definition

    function indent (): string {
      return isNested(endpoint.name) ? '    ' : '  '
    }

    function isParamsRequired (): boolean {
      if (requestType == null) return false
      assert(requestType.kind === 'request')
      return Array.isArray(requestType.generics) ||
             hasRequiredProps(requestType.path) ||
             hasRequiredProps(requestType.query) ||
             hasRequiredProps(requestType.body)

      function hasRequiredProps (props?: M.Property[] | M.Body): boolean {
        if (!Array.isArray(props)) return false
        for (const prop of props) {
          if (prop.required) return true
        }
        return false
      }
    }

    function avoidCollisions (generic: string): string {
      if (requestType === null || !Array.isArray(requestType.generics)) {
        return generic
      } else if (requestType.generics.map(unwrapGeneric).includes(generic)) {
        return generic + 'R'
      } else {
        return generic
      }
    }

    function unknownify (generic: string): string {
      return `${generic} = unknown`
    }

    function unwrapGeneric (generic: M.TypeName | string): string {
      if (typeof generic === 'string') return generic
      return generic.name
    }
  }

  function getType (name: M.TypeName): M.Request | M.Response | null {
    for (const type of model.types) {
      if (type.name.name === name.name && type.name.namespace === name.namespace) {
        assert(type.kind !== 'enum')
        assert(type.kind !== 'type_alias')
        assert(type.kind !== 'interface')
        return type
      }
    }
    return null
  }

  function getNamespace (endpoint: M.Endpoint): string {
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

  function createName (type: M.TypeName): string {
    if (type.namespace === '_builtins') return type.name
    const namespace = strip(type.namespace).replace(/_([a-z])/g, k => k[1].toUpperCase())
    return `${namespace.split('.').map(TitleCase).join('')}${type.name}`

    function strip (namespace: string): string {
      if (namespace.startsWith('_global')) {
        return namespace.slice(8)
      }
      if (namespace.includes('_types')) {
        return namespace.split('.').filter(n => n !== '_types').join('.')
      }
      return namespace
    }

    function TitleCase (str: string): string {
      if (str.length === 0) return ''
      return str[0].toUpperCase() + str.slice(1)
    }
  }
}

if (require.main === module) {
  createClientTypes(Boolean(process.env.KIBANA))
}

export default createClientTypes
