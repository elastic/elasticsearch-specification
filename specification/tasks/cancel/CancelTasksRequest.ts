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
import { MediaType, TaskId } from '@_types/common'

/**
 * Cancel a task.
 *
 * WARNING: The task management API is new and should still be considered a beta feature.
 * The API may change in ways that are not backwards compatible.
 *
 * A task may continue to run for some time after it has been cancelled because it may not be able to safely stop its current activity straight away.
 * It is also possible that Elasticsearch must complete its work on other tasks before it can process the cancellation.
 * The get task information API will continue to list these cancelled tasks until they complete.
 * The cancelled flag in the response indicates that the cancellation command has been processed and the task will stop as soon as possible.
 *
 * To troubleshoot why a cancelled task does not complete promptly, use the get task information API with the `?detailed` parameter to identify the other tasks the system is running.
 * You can also use the node hot threads API to obtain detailed information about the work the system is doing instead of completing the cancelled task.
 * @rest_spec_name tasks.cancel
 * @availability stack since=2.3.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 * @cluster_privileges manage
 * @doc_id tasks
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_tasks/_cancel'
      methods: ['POST']
    },
    {
      path: '/_tasks/{task_id}/_cancel'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The task identifier.
     */
    task_id?: TaskId
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * A comma-separated list or wildcard expression of actions that is used to limit the request.
     */
    actions?: string | string[]
    /**
     * A comma-separated list of node IDs or names that is used to limit the request.
     */
    nodes?: string[]
    /**
     * A parent task ID that is used to limit the tasks.
     */
    parent_task_id?: string
    /**
     * If true, the request blocks until all found tasks are complete.
     * @server_default false
     */
    wait_for_completion?: boolean
  }
}
