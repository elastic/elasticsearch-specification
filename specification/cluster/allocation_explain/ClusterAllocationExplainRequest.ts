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
import { IndexName } from '@_types/common'
import { integer } from '@_types/Numeric'
import { Duration } from '@_types/Time'

/**
 * Explain the shard allocations.
 * Get explanations for shard allocations in the cluster.
 * For unassigned shards, it provides an explanation for why the shard is unassigned.
 * For assigned shards, it provides an explanation for why the shard is remaining on its current node and has not moved or rebalanced to another node.
 * This API can be very useful when attempting to diagnose why a shard is unassigned or why a shard continues to remain on its current node when you might expect otherwise.
 * @rest_spec_name cluster.allocation_explain
 * @availability stack since=5.0.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id cluster-allocation-explain
 * @doc_tag cluster
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_cluster/allocation/explain'
      methods: ['GET', 'POST']
    }
  ]
  query_parameters: {
    /**
     * If true, returns information about disk usage and shard sizes.
     * @server_default false
     */
    include_disk_info?: boolean
    /**
     * If true, returns YES decisions in explanation.
     * @server_default false
     */
    include_yes_decisions?: boolean
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
  body?: {
    /**
     * Specifies the node ID or the name of the node to only explain a shard that is currently located on the specified node.
     */
    current_node?: string
    /**
     * Specifies the name of the index that you would like an explanation for.
     */
    index?: IndexName
    /**
     * If true, returns explanation for the primary shard for the given shard ID.
     */
    primary?: boolean
    /**
     * Specifies the ID of the shard that you would like an explanation for.
     */
    shard?: integer
  }
}
