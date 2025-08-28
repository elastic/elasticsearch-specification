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
import { Id } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Get task information.
 * Get information about a task currently running in the cluster.
 *
 * WARNING: The task management API is new and should still be considered a beta feature.
 * The API may change in ways that are not backwards compatible.
 *
 * If the task identifier is not found, a 404 response code indicates that there are no resources that match the request.
 * @rest_spec_name tasks.get
 * @availability stack since=5.0.0 stability=experimental
 * @availability serverless stability=experimental visibility=public
 * @cluster_privileges monitor
 * @doc_id tasks
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_tasks/{task_id}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * The task identifier.
     */
    task_id: Id
  }
  query_parameters: {
    /**
     * The period to wait for a response.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
    /**
     * If `true`, the request blocks until the task has completed.
     * @server_default false
     */
    wait_for_completion?: boolean
  }
}
