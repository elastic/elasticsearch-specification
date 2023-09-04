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
import { TaskId } from '@_types/common'

/**
 * @rest_spec_name tasks.cancel
 * @availability stack since=2.3.0 stability=experimental
 * @doc_id tasks
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * ID of the task.
     */
    task_id?: TaskId
  }
  query_parameters: {
    /**
     * Comma-separated list or wildcard expression of actions used to limit the request.
     */
    actions?: string | string[]
    /**
     * Comma-separated list of node IDs or names used to limit the request.
     */
    nodes?: string[]
    /**
     * Parent task ID used to limit the tasks.
     */
    parent_task_id?: string
    wait_for_completion?: boolean
  }
}
