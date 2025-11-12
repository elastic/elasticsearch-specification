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
import { ExpandWildcards, Fields, Indices } from '@_types/common'

/**
 * Get field usage stats.
 * Get field usage information for each shard and field of an index.
 * Field usage statistics are automatically captured when queries are running on a cluster.
 * A shard-level search request that accesses a given field, even if multiple times during that request, is counted as a single use.
 *
 * The response body reports the per-shard usage count of the data structures that back the fields in the index.
 * A given request will increment each count by a maximum value of 1, even if the request accesses the same field multiple times.
 * @rest_spec_name indices.field_usage_stats
 * @availability stack since=7.15.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 * @index_privileges manage
 * @doc_id field-usage-stats
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_field_usage_stats'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list or wildcard expression of index names used to limit the request.
     */
    index: Indices
  }
  query_parameters: {
    /**
     * If `false`, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices.
     * This behavior applies even if the request targets other open indices.
     * For example, a request targeting `foo*,bar*` returns an error if an index starts with `foo` but no index starts with `bar`.
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
     * If `true`, missing or closed indices are not included in the response.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * Comma-separated list or wildcard expressions of fields to include in the statistics.
     */
    fields?: Fields
  }
}
