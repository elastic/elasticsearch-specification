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
import {
  ExpandWildcards,
  HealthStatus,
  Indices,
  Level,
  WaitForActiveShards,
  WaitForEvents
} from '@_types/common'
import { Duration } from '@_types/Time'
import { WaitForNodes } from './types'

/**
 * Get the cluster health status.
 *
 * You can also use the API to get the health status of only specified data streams and indices.
 * For data streams, the API retrieves the health status of the stream’s backing indices.
 *
 * The cluster health status is: green, yellow or red.
 * On the shard level, a red status indicates that the specific shard is not allocated in the cluster. Yellow means that the primary shard is allocated but replicas are not. Green means that all shards are allocated.
 * The index level status is controlled by the worst shard status.
 *
 * One of the main benefits of the API is the ability to wait until the cluster reaches a certain high watermark health level.
 * The cluster status is controlled by the worst index status.
 * @rest_spec_name cluster.health
 * @availability stack since=1.3.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor, manage
 * @doc_id cluster-health
 * @doc_tag cluster
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_cluster/health'
      methods: ['GET']
    },
    {
      path: '/_cluster/health/{index}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of data streams, indices, and index aliases that limit the request.
     * Wildcard expressions (`*`) are supported.
     * To target all data streams and indices in a cluster, omit this parameter or use _all or `*`.
     */
    index?: Indices
  }
  query_parameters: {
    /**
     * Expand wildcard expression to concrete indices that are open, closed or both.
     * @server_default all
     */
    expand_wildcards?: ExpandWildcards
    /**
     * Return health information at a specific level of detail.
     * @server_default cluster
     */
    level?: Level
    /**
     * If true, retrieve information from the local node only.
     * If false, retrieve information from the master node.
     * @server_default false
     */
    local?: boolean
    /**
     * The period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * The period to wait for a response.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
    /**
     * Wait for the specified number of active shards.
     * Use `all` to wait for all shards in the cluster to be active.
     * Use `0` to not wait.
     * @server_default 0
     */
    wait_for_active_shards?: WaitForActiveShards
    /**
     * Wait until all currently queued events with the given priority are processed.
     */
    wait_for_events?: WaitForEvents
    /**
     * Wait until the specified number (N) of nodes is available.
     * It also accepts `>=N`, `<=N`, `>N` and `<N`.
     * Alternatively, use the notations `ge(N)`, `le(N)`, `gt(N)`, and `lt(N)`.
     */
    wait_for_nodes?: WaitForNodes
    /**
     * Wait (until the timeout expires) for the cluster to have no shard initializations.
     * If false, the request does not wait for initializing shards.
     * @server_default false
     */
    wait_for_no_initializing_shards?: boolean
    /**
     * Wait (until the timeout expires) for the cluster to have no shard relocations.
     * If false, the request not wait for relocating shards.
     * @server_default false
     */
    wait_for_no_relocating_shards?: boolean
    /**
     * Wait (until the timeout expires) for the cluster to reach a specific health status (or a better status).
     * A green status is better than yellow and yellow is better than red.
     * By default, the request does not wait for a particular status.
     */
    wait_for_status?: HealthStatus
  }
}
