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

import { ExpandWildcards, IndexName, Password, SearchType, Username } from '@_types/common'
import { Host } from '@_types/Networking'
import { uint } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions/container/QueryContainer'
import { Time } from '@_types/Time'
import { SearchTemplateRequest } from '_global/search_template/SearchTemplateRequest'
import { Dictionary } from '_spec_utils/Dictionary'
import { UserDefinedValue } from '_spec_utils/UserDefinedValue'

export class ChainInput {
  inputs: InputContainer[]
}

export enum ConnectionScheme {
  http = 0,
  https = 1
}

export class HttpInput {
  http?: HttpInput
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
  head = 0,
  get = 1,
  post = 2,
  put = 3,
  delete = 4
}

export class HttpInputProxy {
  host: Host
  port: uint
}

export class HttpInputRequestDefinition {
  auth?: HttpInputAuthentication
  body?: string
  connection_timeout?: Time
  headers?: Dictionary<string, string>
  host?: Host
  method?: HttpInputMethod
  params?: Dictionary<string, string>
  path?: string
  port?: uint
  proxy?: HttpInputProxy
  read_timeout?: Time
  scheme?: ConnectionScheme
  url?: string
}

export class IndicesOptions {
  allow_no_indices: boolean
  expand_wildcards: ExpandWildcards
  ignore_unavailable: boolean
  ignore_throttled?: boolean
}

export class Input {}

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
  http = 0,
  search = 1,
  simple = 2
}

export enum ResponseContentType {
  json = 0,
  yaml = 1,
  text = 2
}

export class SearchInput {
  extract?: string[]
  request: SearchInputRequestDefinition
  timeout?: Time
}

export class SearchInputRequestDefinition {
  body?: SearchInputRequestBody
  indices?: IndexName[]
  indices_options?: IndicesOptions
  search_type?: SearchType
  template?: SearchTemplateRequest
  rest_total_hits_as_int?: boolean
}

export class SearchInputRequestBody {
  query: QueryContainer
}

export class SimpleInput {
  payload: Dictionary<string, UserDefinedValue>
}
