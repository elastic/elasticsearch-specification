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
import { MediaType, NodeId } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Cancel node shutdown preparations.
 *
 * Remove a node from the shutdown list so it can resume normal operations.
 * You must explicitly clear the shutdown request when a node rejoins the cluster or when a node has permanently left the cluster.
 * Shutdown requests are never removed automatically by Elasticsearch.
 *
 * NOTE: This feature is designed for indirect use by Elastic Cloud, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes.
 * Direct use is not supported.
 *
 * If the operator privileges feature is enabled, you must be an operator to use this API.
 * @rest_spec_name shutdown.delete_node
 * @availability stack since=7.13.0 stability=stable
 * @cluster_privileges manage
 * @doc_id nodes-api-shutdown-delete
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_nodes/{node_id}/shutdown'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /** The node id of node to be removed from the shutdown state */
    node_id: NodeId
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
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
  }
}
