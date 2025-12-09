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
import { NodeIds, ThreadType } from '@_types/common'
import { long } from '@_types/Numeric'
import { Duration } from '@_types/Time'

/**
 * Get the hot threads for nodes.
 * Get a breakdown of the hot threads on each selected node in the cluster.
 * The output is plain text with a breakdown of the top hot threads for each node.
 * @rest_spec_name nodes.hot_threads
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor,manage
 * @doc_id cluster-nodes-hot-threads
 * @doc_tag cluster
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_nodes/hot_threads'
      methods: ['GET']
    },
    {
      path: '/_nodes/{node_id}/hot_threads'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * List of node IDs or names used to limit returned information.
     */
    node_id?: NodeIds
  }
  query_parameters: {
    /**
     * If true, known idle threads (e.g. waiting in a socket select, or to get
     * a task from an empty queue) are filtered out.
     * @server_default true
     */
    ignore_idle_threads?: boolean
    /**
     * The interval to do the second sampling of threads.
     * @server_default 500ms
     */
    interval?: Duration
    /**
     * Number of samples of thread stacktrace.
     * @server_default 10
     */
    snapshots?: long
    /**
     * Specifies the number of hot threads to provide information for.
     * @server_default 3
     */
    threads?: long
    /**
     * Period to wait for a response. If no response is received
     * before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
    /**
     * The type to sample.
     * @server_default cpu
     */
    type?: ThreadType
    /**
     * The sort order for 'cpu' type
     * @server_default total
     */
    sort?: ThreadType
  }
}
