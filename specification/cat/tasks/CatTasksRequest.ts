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

import { Names } from '@_types/common'
import { Duration, TimeUnit } from '@_types/Time'
import { CatRequestBase } from '@cat/_types/CatBase'

/**
 * Get task information.
 *
 * Get information about tasks currently running in the cluster.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the task management API.
 * @rest_spec_name cat.tasks
 * @availability stack since=5.0.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 * @doc_id cat-tasks
 * @cluster_privileges monitor
 */
export interface Request extends CatRequestBase {
  urls: [
    {
      path: '/_cat/tasks'
      methods: ['GET']
    }
  ]
  query_parameters: {
    /**
     * The task action names, which are used to limit the response.
     */
    actions?: string[]
    /**
     * If `true`, the response includes detailed information about shard recoveries.
     * @server_default false
     */
    detailed?: boolean
    /** Unique node identifiers, which are used to limit the response. */
    nodes?: string[]
    /** The parent task identifier, which is used to limit the response. */
    parent_task_id?: string
    /**
     * List of columns to appear in the response. Supports simple wildcards.
     */
    h?: Names
    /**
     * List of columns that determine how the table should be sorted.
     * Sorting defaults to ascending and can be changed by setting `:asc`
     * or `:desc` as a suffix to the column name.
     */
    s?: Names
    /**
     * Unit used to display time values.
     */
    time?: TimeUnit
    /**
     * Period to wait for a response.
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
