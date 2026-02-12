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
import { ExpandWildcards, Fields, Indices, MediaType } from '@_types/common'

/**
 * Clear the cache.
 *
 * Clear the cache of one or more indices.
 * For data streams, the API clears the caches of the stream's backing indices.
 *
 * By default, the clear cache API clears all caches.
 * To clear only specific caches, use the `fielddata`, `query`, or `request` parameters.
 * To clear the cache only of specific fields, use the `fields` parameter.
 * @rest_spec_name indices.clear_cache
 * @category management
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @index_privileges manage
 * @doc_id indices-clearcache
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_cache/clear'
      methods: ['POST']
    },
    {
      path: '/{index}/_cache/clear'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and aliases used to limit the request.
     * Supports wildcards (`*`).
     * To target all data streams and indices, omit this parameter or use `*` or `_all`.
     */
    index?: Indices
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Comma-separated list of data streams, indices, and aliases used to limit the request.
     * Supports wildcards (`*`).
     * To target all data streams and indices, omit this parameter or use `*` or `_all`.
     */
    index?: Indices
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
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `true`, clears the fields cache.
     * Use the `fields` parameter to clear the cache of specific fields only.
     */
    fielddata?: boolean
    /**
     * Comma-separated list of field names used to limit the `fielddata` parameter.
     */
    fields?: Fields
    /**
     * If `false`, the request returns an error if it targets a missing or closed index.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * If `true`, clears the query cache.
     */
    query?: boolean
    /**
     * If `true`, clears the request cache.
     */
    request?: boolean
  }
}
