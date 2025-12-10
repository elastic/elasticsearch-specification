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
import { ExpandWildcards, Indices, MediaType, Names } from '@_types/common'

/**
 * Check aliases.
 *
 * Check if one or more data stream or index aliases exist.
 * @rest_spec_name indices.exists_alias
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id indices-aliases-exist
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_alias/{name}'
      methods: ['HEAD']
    },
    {
      path: '/{index}/_alias/{name}'
      methods: ['HEAD']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of aliases to check. Supports wildcards (`*`).
     */
    name: Names
    /**
     * Comma-separated list of data streams or indices used to limit the request. Supports wildcards (`*`).
     * To target all data streams and indices, omit this parameter or use `*` or `_all`.
     */
    index?: Indices
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `false`, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices.
     * This behavior applies even if the request targets other open indices.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * Type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * Supports comma-separated values, such as `open,hidden`.
     * @server_default all
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `false`, requests that include a missing data stream or index in the target indices or data streams return an error.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * If `true`, the request retrieves information from the local node only.
     * @server_default false
     * @deprecated 8.12.0
     */
    local?: boolean
  }
}
