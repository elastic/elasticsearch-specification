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
import { Id, MediaType, NodeIds } from '@_types/common'
import { Duration } from '@_types/Time'
import { GroupBy } from '@tasks/_types/GroupBy'

/**
 * Get all tasks.
 *
 * Get information about the tasks currently running on one or more nodes in the cluster.
 *
 * WARNING: The task management API is new and should still be considered a beta feature.
 * The API may change in ways that are not backwards compatible.
 *
 * **Identifying running tasks**
 *
 * The `X-Opaque-Id header`, when provided on the HTTP request header, is going to be returned as a header in the response as well as in the headers field for in the task information.
 * This enables you to track certain calls or associate certain tasks with the client that started them.
 * For example:
 *
 * ```
 * curl -i -H "X-Opaque-Id: 123456" "http://localhost:9200/_tasks?group_by=parents"
 * ```
 *
 * The API returns the following result:
 *
 * ```
 * HTTP/1.1 200 OK
 * X-Opaque-Id: 123456
 * content-type: application/json; charset=UTF-8
 * content-length: 831
 *
 * {
 *   "tasks" : {
 *     "u5lcZHqcQhu-rUoFaqDphA:45" : {
 *       "node" : "u5lcZHqcQhu-rUoFaqDphA",
 *       "id" : 45,
 *       "type" : "transport",
 *       "action" : "cluster:monitor/tasks/lists",
 *       "start_time_in_millis" : 1513823752749,
 *       "running_time_in_nanos" : 293139,
 *       "cancellable" : false,
 *       "headers" : {
 *         "X-Opaque-Id" : "123456"
 *       },
 *       "children" : [
 *         {
 *           "node" : "u5lcZHqcQhu-rUoFaqDphA",
 *           "id" : 46,
 *           "type" : "direct",
 *           "action" : "cluster:monitor/tasks/lists[n]",
 *           "start_time_in_millis" : 1513823752750,
 *           "running_time_in_nanos" : 92133,
 *           "cancellable" : false,
 *           "parent_task_id" : "u5lcZHqcQhu-rUoFaqDphA:45",
 *           "headers" : {
 *             "X-Opaque-Id" : "123456"
 *           }
 *         }
 *       ]
 *     }
 *   }
 *  }
 * ```
 * In this example, `X-Opaque-Id: 123456` is the ID as a part of the response header.
 * The `X-Opaque-Id` in the task `headers` is the ID for the task that was initiated by the REST request.
 * The `X-Opaque-Id` in the children `headers` is the child task of the task that was initiated by the REST request.
 * @rest_spec_name tasks.list
 * @availability stack since=2.3.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 * @cluster_privileges monitor
 * @doc_id tasks
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_tasks'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * A comma-separated list or wildcard expression of actions used to limit the request.
     * For example, you can use `cluser:*` to retrieve all cluster-related tasks.
     */
    actions?: string | string[]
    /**
     * If `true`, the response includes detailed information about the running tasks.
     * This information is useful to distinguish tasks from each other but is more costly to run.
     * @server_default false
     */
    detailed?: boolean
    /**
     * A key that is used to group tasks in the response.
     * The task lists can be grouped either by nodes or by parent tasks.
     * @server_default nodes
     */
    group_by?: GroupBy
    /**
     * A comma-separated list of node IDs or names that is used to limit the returned information.
     */
    nodes?: NodeIds
    /**
     * A parent task identifier that is used to limit returned information.
     * To return all tasks, omit this parameter or use a value of `-1`.
     * If the parent task is not found, the API does not return a 404 response code.
     */
    parent_task_id?: Id
    /**
     * The period to wait for each node to respond.
     * If a node does not respond before its timeout expires, the response does not include its information.
     * However, timed out nodes are included in the `node_failures` property.
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
