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
import { ExpandWildcards, Indices, Routing } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Duration } from '@_types/Time'

/**
 * Open a point in time.
 *
 * A search request by default runs against the most recent visible data of the target indices,
 * which is called point in time. Elasticsearch pit (point in time) is a lightweight view into the
 * state of the data as it existed when initiated. In some cases, it’s preferred to perform multiple
 * search requests using the same point in time. For example, if refreshes happen between
 * `search_after` requests, then the results of those requests might not be consistent as changes happening
 * between searches are only visible to the more recent point in time.
 * 
 * A point in time must be opened explicitly before being used in search requests.
 * The `keep_alive` parameter tells Elasticsearch how long it should persist.
 * @rest_spec_name open_point_in_time
 * @availability stack since=7.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id point-in-time-api
 * @index_privileges read
 * @doc_tag search
 */
export interface Request extends RequestBase {
  path_parts: {
    index: Indices
  }
  query_parameters: {
    /**
     * Extends the time to live of the corresponding point in time.
     */
    keep_alive: Duration
    /**
     * If `false`, the request returns an error if it targets a missing or closed index.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * Specifies the node or shard the operation should be performed on.
     * Random by default.
     */
    preference?: string
    /**
     * Custom value used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * Type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * Supports comma-separated values, such as `open,hidden`. Valid values are: `all`, `open`, `closed`, `hidden`, `none`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
  }
  body: {
    /**
     * Allows to filter indices if the provided query rewrites to `match_none` on every shard.
     */
    index_filter?: QueryContainer
  }
}
