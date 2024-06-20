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
 * Stops an existing, started rollup job.
 * @rest_spec_name rollup.stop_job
 * @availability stack since=6.3.0 stability=experimental
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Identifier for the rollup job.
     */
    id: Id
  }
  query_parameters: {
    /**
     * If `wait_for_completion` is `true`, the API blocks for (at maximum) the specified duration while waiting for the job to stop.
     * If more than `timeout` time has passed, the API throws a timeout exception.
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
