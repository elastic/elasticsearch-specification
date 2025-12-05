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
  MediaType,
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
     * Comma-separated list of data streams, indices, and index aliases used to limit the request. Wildcard expressions (`*`) are supported. To target all data streams and indices in a cluster, omit this parameter or use _all or `*`.
     */
    index?: Indices
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * @server_default all
     */
    expand_wildcards?: ExpandWildcards
    /**
     * Can be one of cluster, indices or shards. Controls the details level of the health information returned.
     * @server_default cluster
     */
    level?: Level
    /**
     * If true, the request retrieves information from the local node only. Defaults to false, which means information is retrieved from the master node.
     * @server_default false
     */
    local?: boolean
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
    /**
     * A number controlling to how many active shards to wait for, all to wait for all shards in the cluster to be active, or 0 to not wait.
     * @server_default 0
     */
    wait_for_active_shards?: WaitForActiveShards
    /**
     * Can be one of immediate, urgent, high, normal, low, languid. Wait until all currently queued events with the given priority are processed.
     */
    wait_for_events?: WaitForEvents
    /**
     * The request waits until the specified number N of nodes is available. It also accepts >=N, <=N, >N and <N. Alternatively, it is possible to use ge(N), le(N), gt(N) and lt(N) notation.
     */
    wait_for_nodes?: WaitForNodes
    /**
     * A boolean value which controls whether to wait (until the timeout provided) for the cluster to have no shard initializations. Defaults to false, which means it will not wait for initializing shards.
     * @server_default false
     */
    wait_for_no_initializing_shards?: boolean
    /**
     * A boolean value which controls whether to wait (until the timeout provided) for the cluster to have no shard relocations. Defaults to false, which means it will not wait for relocating shards.
     * @server_default false
     */
    wait_for_no_relocating_shards?: boolean
    /**
     * One of green, yellow or red. Will wait (until the timeout provided) until the status of the cluster changes to the one provided or better, i.e. green > yellow > red. By default, will not wait for any status.
     */
    wait_for_status?: HealthStatus
  }
}
