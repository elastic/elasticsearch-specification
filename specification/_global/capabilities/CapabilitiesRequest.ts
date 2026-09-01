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

import { RequestBase } from '@_types/Base'
import { Duration } from '@_types/Time'
import { MediaType } from '@_types/common'

/**
 * Checks if the specified combination of method, API, parameters, and arbitrary capabilities are supported.
 *
 * @rest_spec_name capabilities
 * @availability stack stability=experimental visibility=private
 * @doc_id capabilities
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_capabilities'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * REST method to check
     * @server_default GET
     */
    method?: RestMethod
    /**
     * API path to check
     * @server_default /
     */
    path?: string
    /**
     * Comma-separated list of API parameters to check
     */
    parameters?: string | string[]
    /**
     * Comma-separated list of arbitrary API capabilities to check
     */
    capabilities?: string | string[]
    /**
     * True if only the node being called should be considered
     * @server_default false
     */
    local_only?: boolean
    /**
     * Period to wait for a response.
     * If no response is received before the timeout expires, the request fails and returns an error.
     */
    timeout?: Duration
  }
}

export enum RestMethod {
  GET,
  HEAD,
  POST,
  PUT,
  DELETE
}
