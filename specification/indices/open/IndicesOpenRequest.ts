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
import { ExpandWildcards, Indices, WaitForActiveShards } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Opens a closed index.
 * For data streams, the API opens any closed backing indices.
 * @rest_spec_name indices.open
 * @availability stack since=0.0.0 stability=stable
 * @availability serverless stability=stable visibility=private
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and aliases used to limit the request.
     * Supports wildcards (`*`).
     * By default, you must explicitly name the indices you using to limit the request.
     * To limit a request using `_all`, `*`, or other wildcard expressions, change the `action.destructive_requires_name` setting to false.
     * You can update this setting in the `elasticsearch.yml` file or using the cluster update settings API.
     * @doc_id cluster-update-settings
     */
    index: Indices
  }
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
     * Valid values are: `all`, `open`, `closed`, `hidden`, `none`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `false`, the request returns an error if it targets a missing or closed index.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * Period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Period to wait for a response.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
    /**
     * The number of shard copies that must be active before proceeding with the operation.
     * Set to `all` or any positive integer up to the total number of shards in the index (`number_of_replicas+1`).
     * @server_default 1
     */
    wait_for_active_shards?: WaitForActiveShards
  }
}
