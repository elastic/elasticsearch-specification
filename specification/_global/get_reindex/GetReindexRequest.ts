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
 * Get a reindex task.
 *
 * Get the status and progress of a specific reindex task.
 * @rest_spec_name get_reindex
 * @availability stack since=9.4.0 stability=experimental visibility=feature_flag feature_flag=reindex_management_api
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
