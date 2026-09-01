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
import { Duration } from '@_types/Time'

/**
 * Get the status and progress of a specific reindex task.
 *
 * This API follows reindex tasks across node-shutdown relocations, so callers can
 * keep using the original task ID throughout the lifetime of the operation.
 * Returned task IDs and timings reflect the original task, not its relocated successor.
 * Relocated task IDs are also supported. They are followed transparently and return the task ID and timings of the original task.
 *
 * When the task ID cannot be resolved, the API returns the response below with a 404 status code.
 * This response is used whether the ID is unknown, refers to a non-reindex task, refers to a sliced child subtask, or refers to a task whose node left the cluster with no stored result (e.g. a non-graceful shutdown).
 * ```
 * {
 *   "error": {
 *     "type": "resource_not_found_exception",
 *     "reason": "Reindex operation [r1A2WoRbTwKZ516z6NEs5A:36619] not found"
 *   },
 *   "status": 404
 * }
 * ```
 * @rest_spec_name get_reindex
 * @availability stack since=9.5.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @doc_id docs-get-reindex
 * @doc_tag reindex
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_reindex/{task_id}'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
  path_parts: {
    /**
     * The ID of the reindex task to retrieve.
     */
    task_id: TaskId
  }
  query_parameters: {
    /**
     * If `true`, the request blocks until the reindex task completes, then returns the result.
     * @server_default false
     */
    wait_for_completion?: boolean
    /**
     * The period to wait for the reindex task to complete when `wait_for_completion` is `true`.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
