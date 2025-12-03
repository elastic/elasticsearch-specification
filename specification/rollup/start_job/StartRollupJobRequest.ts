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

/**
 * Start rollup jobs.
 *
 * If you try to start a job that does not exist, an exception occurs.
 * If you try to start a job that is already started, nothing happens.
 * @rest_spec_name rollup.start_job
 * @availability stack since=6.3.0 stability=experimental
 * @cluster_privileges manage_rollup
 * @deprecated 8.11.0
 * @doc_id rollup-start-job
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_rollup/job/{id}/_start'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the rollup job.
     */
    id: Id
  }
}
