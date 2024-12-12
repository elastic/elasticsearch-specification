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

import { GroupBy } from '@tasks/_types/GroupBy'
import { RequestBase } from '@_types/Base'
import { Id, NodeIds } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * The task management API returns information about tasks currently executing on one or more nodes in the cluster.
 * @rest_spec_name tasks.list
 * @availability stack since=2.3.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 * @cluster_privileges monitor, manage
 * @doc_id tasks
 */
export interface Request extends RequestBase {
  query_parameters: {
    /**
     * Comma-separated list or wildcard expression of actions used to limit the request.
     */
    actions?: string | string[]
    /**
     * If `true`, the response includes detailed information about shard recoveries.
     * @server_default false
     */
    detailed?: boolean
    /**
     * Key used to group tasks in the response.
     */
    group_by?: GroupBy
    /**
     * Comma-separated list of node IDs or names used to limit returned information.
     */
    nodes?: NodeIds
    /**
     * Parent task ID used to limit returned information. To return all tasks, omit this parameter or use a value of `-1`.
     */
    parent_task_id?: Id
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
    /**
     * If `true`, the request blocks until the operation is complete.
     * @server_default false
     */
    wait_for_completion?: boolean
  }
}
