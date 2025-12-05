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

import { MediaType, Names } from '@_types/common'
import { Duration } from '@_types/Time'
import { CatRequestBase, CatThreadPoolColumns } from '@cat/_types/CatBase'

/**
 * Get thread pool statistics.
 *
 * Get thread pool statistics for each node in a cluster.
 * Returned information includes all built-in thread pools and custom thread pools.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the nodes info API.
 * @rest_spec_name cat.thread_pool
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id cat-thread-pool
 * @cluster_privileges monitor
 */
export interface Request extends CatRequestBase {
  urls: [
    {
      path: '/_cat/thread_pool'
      methods: ['GET']
    },
    {
      path: '/_cat/thread_pool/{thread_pool_patterns}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of thread pool names used to limit the request.
     * Accepts wildcard expressions.
     */
    thread_pool_patterns?: Names
  }
  response_media_type: MediaType.Text | MediaType.Json
  query_parameters: {
    /**
     * List of columns to appear in the response. Supports simple wildcards.
     */
    h?: CatThreadPoolColumns
    /**
     * A comma-separated list of column names or aliases that determines the sort order.
     * Sorting defaults to ascending and can be changed by setting `:asc`
     * or `:desc` as a suffix to the column name.
     */
    s?: Names
    /**
     * If `true`, the request computes the list of selected nodes from the
     * local cluster state. If `false` the list of selected nodes are computed
     * from the cluster state of the master node. In both cases the coordinating
     * node will send requests for further information to each selected node.
     * @server_default false
     */
    local?: boolean
    /**
     * The period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
