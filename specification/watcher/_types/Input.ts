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

import {
  Id,
  IndexName,
  IndicesOptions,
  Password,
  SearchType,
  Username
} from '@_types/common'
import { Host } from '@_types/Networking'
import { uint } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Duration } from '@_types/Time'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class ChainInput {
  inputs: Array<SingleKeyDictionary<string, InputContainer>>
}

export enum ConnectionScheme {
  http,
  https
}

export class HttpInput {
  extract?: string[]
  request?: HttpInputRequestDefinition
  response_content_type?: ResponseContentType
}

export class HttpInputAuthentication {
  basic: HttpInputBasicAuthentication
}

export class HttpInputBasicAuthentication {
  password: Password
  username: Username
}

export enum HttpInputMethod {
  head,
  get,
  post,
  put,
  delete
}

export class HttpInputProxy {
  host: Host
  port: uint
}

export class HttpInputRequestDefinition {
  auth?: HttpInputAuthentication
  body?: string
  connection_timeout?: Duration
  headers?: Dictionary<string, string>
  host?: Host
  method?: HttpInputMethod
  params?: Dictionary<string, string>
  path?: string
  port?: uint
  proxy?: HttpInputProxy
  read_timeout?: Duration
  scheme?: ConnectionScheme
  url?: string
}
/**
 * @variants container
 */
export class InputContainer {
  chain?: ChainInput
  http?: HttpInput
  search?: SearchInput
  simple?: Dictionary<string, UserDefinedValue>
}

export enum InputType {
  http,
  search,
  simple
}

export enum ResponseContentType {
  json,
  yaml,
  text
}

export class SearchInput {
  extract?: string[]
  request: SearchInputRequestDefinition
  timeout?: Duration
}

export class SearchInputRequestDefinition {
  body?: SearchInputRequestBody
  indices?: IndexName[]
  indices_options?: IndicesOptions
  search_type?: SearchType
  template?: SearchTemplateRequestBody
  rest_total_hits_as_int?: boolean
}

// Should be kept in sync with _global/search_template/SearchTemplateRequest.body
export class SearchTemplateRequestBody {
  /** @server_default false */
  explain?: boolean
  /**
   * ID of the search template to use. If no source is specified,
   * this parameter is required.
   */
  id?: Id
  params?: Dictionary<string, UserDefinedValue>
  /** @server_default false */
  profile?: boolean
  /**
   * An inline search template. Supports the same parameters as the search API's
   * request body. Also supports Mustache variables. If no id is specified, this
   * parameter is required.
   */
  source?: string
}

export class SearchInputRequestBody {
  query: QueryContainer
}

export class SimpleInput {
  payload: Dictionary<string, UserDefinedValue>
}
