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
import { ExpandWildcards, Indices, MediaType, Routing } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Get the search shards.
 *
 * Get the indices and shards that a search request would be run against.
 * This information can be useful for working out issues or planning optimizations with routing and shard preferences.
 * When filtered aliases are used, the filter is returned as part of the `indices` section.
 *
 * If the Elasticsearch security features are enabled, you must have the `view_index_metadata` or `manage` index privilege for the target data stream, index, or alias.
 * @rest_spec_name search_shards
 * @category search
 * @availability stack stability=stable
 * @index_privileges view_index_metadata
 * @doc_tag search
 * @doc_id search-shards
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_search_shards'
      methods: ['GET', 'POST']
    },
    {
      path: '/{index}/_search_shards'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of data streams, indices, and aliases to search.
     * It supports wildcards (`*`).
     * To search all data streams and indices, omit this parameter or use `*` or `_all`.
     */
    index?: Indices
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `false`, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices.
     * This behavior applies even if the request targets other open indices.
     * For example, a request targeting `foo*,bar*` returns an error if an index starts with `foo` but no index starts with `bar`.
     * @server_default false
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
     * If `false`, the request returns an error if it targets a missing or closed index.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * If `true`, the request retrieves information from the local node only.
     * @server_default false
     */
    local?: boolean
    /**
     * The period to wait for a connection to the master node.
     * If the master node is not available before the timeout expires, the request fails and returns an error.
     * IT can also be set to `-1` to indicate that the request should never timeout.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * The node or shard the operation should be performed on.
     * It is random by default.
     */
    preference?: string
    /**
     * A custom value used to route operations to a specific shard.
     */
    routing?: Routing
  }
}
