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
import { ShardStoreStatus } from './types'

/**
 * Get index shard stores.
 *
 * Get store information about replica shards in one or more indices.
 * For data streams, the API retrieves store information for the stream's backing indices.
 *
 * The index shard stores API returns the following information:
 *
 * * The node on which each replica shard exists.
 * * The allocation ID for each replica shard.
 * * A unique ID for each replica shard.
 * * Any errors encountered while opening the shard index or from an earlier failure.
 *
 * By default, the API returns store information only for primary shards that are unassigned or have one or more unassigned replica shards.
 * @rest_spec_name indices.shard_stores
 * @availability stack stability=stable
 * @index_privileges monitor
 * @doc_id indices-shards-stores
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_shard_stores'
      methods: ['GET']
    },
    {
      path: '/{index}/_shard_stores'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * List of data streams, indices, and aliases used to limit the request.
     */
    index?: Indices
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * A setting that does two separate checks on the index expression.
     * If `false`, the request returns an error (1) if any wildcard expression
     * (including `_all` and `*`) resolves to zero matching indices or (2) if the
     * complete set of resolved indices, aliases or data streams is empty after all
     * expressions are evaluated. If `true`, index expressions that resolve to no
     * indices are allowed and the request returns an empty result.
     */
    allow_no_indices?: boolean
    /**
     * Type of index that wildcard patterns can match. If the request can target data streams,
     * this argument determines whether wildcard expressions match hidden data streams.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `false`, the request returns an error if it targets a concrete (non-wildcarded)
     * index, alias, or data stream that is missing, closed, or otherwise unavailable.
     * If `true`, unavailable concrete targets are silently ignored.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * List of shard health statuses used to limit the request.
     */
    status?: ShardStoreStatus | ShardStoreStatus[]
  }
}
