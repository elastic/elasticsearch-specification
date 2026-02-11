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

/**
 * Get rollup job information.
 *
 * Get the configuration, stats, and status of rollup jobs.
 *
 * NOTE: This API returns only active (both `STARTED` and `STOPPED`) jobs.
 * If a job was created, ran for a while, then was deleted, the API does not return any details about it.
 * For details about a historical rollup job, the rollup capabilities API may be more useful.
 * @rest_spec_name rollup.get_jobs
 * @category management
 * @availability stack since=6.3.0 stability=experimental
 * @cluster_privileges monitor_rollup
 * @deprecated 8.11.0
 * @doc_id rollup-get-job
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_rollup/job/{id}'
      methods: ['GET']
    },
    {
      path: '/_rollup/job'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Identifier for the rollup job.
     * If it is `_all` or omitted, the API returns all rollup jobs.
     */
    id?: Id
  }
  response_media_type: MediaType.Json
}
