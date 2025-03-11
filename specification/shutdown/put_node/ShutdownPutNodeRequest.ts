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
import { NodeId } from '@_types/common'
import { TimeUnit } from '@_types/Time'
import { Type } from '../_types/types'

/**
 * Prepare a node to be shut down.
 *
 * NOTE: This feature is designed for indirect use by Elastic Cloud, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported.
 *
 * If you specify a node that is offline, it will be prepared for shut down when it rejoins the cluster.
 *
 * If the operator privileges feature is enabled, you must be an operator to use this API.
 *
 * The API migrates ongoing tasks and index shards to other nodes as needed to prepare a node to be restarted or shut down and removed from the cluster.
 * This ensures that Elasticsearch can be stopped safely with minimal disruption to the cluster.
 *
 * You must specify the type of shutdown: `restart`, `remove`, or `replace`.
 * If a node is already being prepared for shutdown, you can use this API to change the shutdown type.
 *
 * IMPORTANT: This API does NOT terminate the Elasticsearch process.
 * Monitor the node shutdown status to determine when it is safe to stop Elasticsearch.
 * @rest_spec_name shutdown.put_node
 * @availability stack since=7.13.0 stability=stable
 * @cluster_privileges manage
 * @doc_id nodes-api-shutdown
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_nodes/{node_id}/shutdown'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The node identifier.
     * This parameter is not validated against the cluster's active nodes.
     * This enables you to register a node for shut down while it is offline.
     * No error is thrown if you specify an invalid node ID.
     */
    node_id: NodeId
  }
  query_parameters: {
    /**
     * The period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: TimeUnit
    /**
     * The period to wait for a response.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: TimeUnit
  }
  body: {
    /**
     * Valid values are restart, remove, or replace.
     * Use restart when you need to temporarily shut down a node to perform an upgrade, make configuration changes, or perform other maintenance.
     * Because the node is expected to rejoin the cluster, data is not migrated off of the node.
     * Use remove when you need to permanently remove a node from the cluster.
     * The node is not marked ready for shutdown until data is migrated off of the node Use replace to do a 1:1 replacement of a node with another node.
     * Certain allocation decisions will be ignored (such as disk watermarks) in the interest of true replacement of the source node with the target node.
     * During a replace-type shutdown, rollover and index creation may result in unassigned shards, and shrink may fail until the replacement is complete.
     */
    type: Type
    /**
     * A human-readable reason that the node is being shut down.
     * This field provides information for other cluster operators; it does not affect the shut down process.
     */
    reason: string
    /**
     * Only valid if type is restart.
     * Controls how long Elasticsearch will wait for the node to restart and join the cluster before reassigning its shards to other nodes.
     * This works the same as delaying allocation with the index.unassigned.node_left.delayed_timeout setting.
     * If you specify both a restart allocation delay and an index-level allocation delay, the longer of the two is used.
     */
    allocation_delay?: string
    /**
     * Only valid if type is replace.
     * Specifies the name of the node that is replacing the node being shut down.
     * Shards from the shut down node are only allowed to be allocated to the target node, and no other data will be allocated to the target node.
     * During relocation of data certain allocation rules are ignored, such as disk watermarks or user attribute filtering rules.
     */
    target_node_name?: string
  }
}
