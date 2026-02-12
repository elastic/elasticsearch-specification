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
import { MediaType, NodeIds } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Get cluster statistics.
 *
 * Get basic index metrics (shard numbers, store size, memory usage) and information about the current nodes that form the cluster (number, roles, os, jvm versions, memory usage, cpu and installed plugins).
 * @rest_spec_name cluster.stats
 * @category management
 * @availability stack since=1.3.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor
 * @doc_id cluster-stats
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_cluster/stats'
      methods: ['GET']
    },
    {
      path: '/_cluster/stats/nodes/{node_id}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /** Comma-separated list of node filters used to limit returned information. Defaults to all nodes in the cluster. */
    node_id?: NodeIds
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Include remote cluster data into the response
     * @server_default false
     */
    include_remotes?: boolean
    /**
     * Period to wait for each node to respond.
     * If a node does not respond before its timeout expires, the response does not include its stats.
     * However, timed out nodes are included in the response’s `_nodes.failed` property. Defaults to no timeout.
     */
    timeout?: Duration
  }
}
