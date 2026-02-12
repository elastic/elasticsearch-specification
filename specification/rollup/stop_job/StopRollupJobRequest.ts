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
import { Id, MediaType } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Stop rollup jobs.
 *
 * If you try to stop a job that does not exist, an exception occurs.
 * If you try to stop a job that is already stopped, nothing happens.
 *
 * Since only a stopped job can be deleted, it can be useful to block the API until the indexer has fully stopped.
 * This is accomplished with the `wait_for_completion` query parameter, and optionally a timeout. For example:
 *
 * ```
 * POST _rollup/job/sensor/_stop?wait_for_completion=true&timeout=10s
 * ```
 * The parameter blocks the API call from returning until either the job has moved to STOPPED or the specified time has elapsed.
 * If the specified time elapses without the job moving to STOPPED, a timeout exception occurs.
 * @rest_spec_name rollup.stop_job
 * @category management
 * @availability stack since=6.3.0 stability=experimental
 * @cluster_privileges manage_rollup
 * @deprecated 8.11.0
 * @doc_id rollup-stop-job
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_rollup/job/{id}/_stop'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the rollup job.
     */
    id: Id
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `wait_for_completion` is `true`, the API blocks for (at maximum) the specified duration while waiting for the job to stop.
     * If more than `timeout` time has passed, the API throws a timeout exception.
     * NOTE: Even if a timeout occurs, the stop request is still processing and eventually moves the job to STOPPED.
     * The timeout simply means the API call itself timed out while waiting for the status change.
     * @server_default 30s
     */
    timeout?: Duration
    /**
     * If set to `true`, causes the API to block until the indexer state completely stops.
     * If set to `false`, the API returns immediately and the indexer is stopped asynchronously in the background.
     * @server_default false
     */
    wait_for_completion?: boolean
  }
}
