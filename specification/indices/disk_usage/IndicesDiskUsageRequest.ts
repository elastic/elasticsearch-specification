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
import { ExpandWildcards, Indices, MediaType } from '@_types/common'

/**
 * Analyze the index disk usage.
 *
 * Analyze the disk usage of each field of an index or data stream.
 * This API might not support indices created in previous Elasticsearch versions.
 * The result of a small index can be inaccurate as some parts of an index might not be analyzed by the API.
 *
 * NOTE: The total size of fields of the analyzed shards of the index in the response is usually smaller than the index `store_size` value because some small metadata files are ignored and some parts of data files might not be scanned by the API.
 * Since stored fields are stored together in a compressed format, the sizes of stored fields are also estimates and can be inaccurate.
 * The stored size of the `_id` field is likely underestimated while the `_source` field is overestimated.
 * @doc_id indices-disk-usage
 * @rest_spec_name indices.disk_usage
 * @availability stack since=7.15.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_disk_usage'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and aliases used to limit the request.
     * It’s recommended to execute this API with a single index (or the latest backing index of a data stream) as the API consumes resources significantly.
     */
    index: Indices
  }
  response_media_type: MediaType.Json
  query_parameters?: {
    /**
     * If false, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices.
     * This behavior applies even if the request targets other open indices.
     * For example, a request targeting `foo*,bar*` returns an error if an index starts with `foo` but no index starts with `bar`.
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
     * If `true`, the API performs a flush before analysis.
     * If `false`, the response may not include uncommitted data.
     * @server_default true
     */
    flush?: boolean
    /**
     * If `true`, missing or closed indices are not included in the response.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * Analyzing field disk usage is resource-intensive.
     * To use the API, this parameter must be set to `true`.
     * @server_default false
     */
    run_expensive_tasks?: boolean
  }
}
