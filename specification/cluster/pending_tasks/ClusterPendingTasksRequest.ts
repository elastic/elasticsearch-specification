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
import { Duration } from '@_types/Time'
import { MediaType } from '@_types/common'

/**
 * Get the pending cluster tasks.
 *
 * Get information about cluster-level changes (such as create index, update mapping, allocate or fail shard) that have not yet taken effect.
 *
 * NOTE: This API returns a list of any pending updates to the cluster state.
 * These are distinct from the tasks reported by the task management API which include periodic tasks and tasks initiated by the user, such as node stats, search queries, or create index requests.
 * However, if a user-initiated task such as a create index command causes a cluster state update, the activity of this task might be reported by both task api and pending cluster tasks API.
 * @rest_spec_name cluster.pending_tasks
 * @category management
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor
 * @doc_id cluster-pending
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_cluster/pending_tasks'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `true`, the request retrieves information from the local node only.
     * If `false`, information is retrieved from the master node.
     * @server_default false
     */
    local?: boolean
    /**
     * Period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s */
    master_timeout?: Duration
  }
}
