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
import { NodeIds } from '@_types/common'
import { TimeUnit } from '@_types/Time'

/**
 * Get the shutdown status.
 *
 * Get information about nodes that are ready to be shut down, have shut down preparations still in progress, or have stalled.
 * The API returns status information for each part of the shut down process.
 *
 * NOTE: This feature is designed for indirect use by Elasticsearch Service, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported.
 *
 * If the operator privileges feature is enabled, you must be an operator to use this API.
 * @rest_spec_name shutdown.get_node
 * @availability stack since=7.13.0 stability=stable visibility=private
 * @cluster_privileges manage
 * @doc_id nodes-api-shutdown-status
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_nodes/shutdown'
      methods: ['GET']
    },
    {
      path: '/_nodes/{node_id}/shutdown'
      methods: ['GET']
    }
  ]
  path_parts: {
    node_id?: NodeIds
  }
  query_parameters: {
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: TimeUnit
  }
}
