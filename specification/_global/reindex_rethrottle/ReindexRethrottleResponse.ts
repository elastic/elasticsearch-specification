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

import { ErrorCause, TaskFailure } from '@_types/Errors'
import { Dictionary } from '@spec_utils/Dictionary'
import { ReindexNode, ReindexTasks } from './types'

export class Response {
  body: {
    /**
     * Node-level failures encountered while applying the rethrottle request.
     * Will return a `failed_node_exception` wrapping a `no_such_node_exception`,
     * if a node handling the task either never existed, or has left the cluster, and one of the following is true:
     * 1. The task has completed.
     * 2. The task cannot be found.
     *
     * Note: Rethrottle handles relocations, so it should succeed if the task can be found and has not completed.
     */
    node_failures?: ErrorCause[]
    /**
     * Per-task failures encountered while applying the rethrottle.
     * If a rethrottle is attempted during a relocation handoff, the failure object reports `status: SERVICE_UNAVAILABLE` (the HTTP response itself is still `200 OK`).
     * In this case, the request can be retried until success.
     */
    task_failures?: TaskFailure[]
    /**
     * Tasks grouped by node, returned only when `group_by=nodes` (the default).
     * @availability stack
     */
    nodes?: Dictionary<string, ReindexNode>
    /**
     * The tasks that were successfully rethrottled.
     * Always returned in serverless.
     * Returned with `group_by=none` or `group_by=parents` in stateful.
     */
    tasks?: ReindexTasks
  }
}
