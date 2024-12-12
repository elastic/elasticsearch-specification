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

import { CatRequestBase } from '@cat/_types/CatBase'
import { Duration } from '@_types/Time'

/**
 * Get task information.
 * Get information about tasks currently running in the cluster.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the task management API.
 * @rest_spec_name cat.tasks
 * @availability stack since=5.0.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 * @doc_id tasks
 * @cluster_privileges monitor
 */
export interface Request extends CatRequestBase {
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
     * Unit used to display time values.
     */
    time?: Duration
  }
}
