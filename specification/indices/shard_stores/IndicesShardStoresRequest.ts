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
import { ExpandWildcards, Indices } from '@_types/common'
import { ShardStoreStatus } from './types'

/**
 * @rest_spec_name indices.shard_stores
 * @availability stack since=0.0.0 stability=stable
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * List of data streams, indices, and aliases used to limit the request.
     */
    index?: Indices
  }
  query_parameters: {
    /**
     *  If false, the request returns an error if any wildcard expression, index alias, or _all
     * value targets only missing or closed indices. This behavior applies even if the request
     * targets other open indices.
     */
    allow_no_indices?: boolean
    /**
     * Type of index that wildcard patterns can match. If the request can target data streams,
     * this argument determines whether wildcard expressions match hidden data streams.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If true, missing or closed indices are not included in the response.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * List of shard health statuses used to limit the request.
     */
    status?: ShardStoreStatus | ShardStoreStatus[]
  }
}
