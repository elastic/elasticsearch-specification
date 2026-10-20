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
import { MediaType, Metadata } from '@_types/common'
import { DateTime, Duration } from '@_types/Time'
import { RecoveryMode, RenameStrategy } from './types'

/**
 * Start a recovery.
 *
 * Start recovering indices and data streams from a recovery point.
 * This API is intended for internal operator use.
 * Depending on the mode, the sources are either replaced with their state at the recovery point, over the data that currently exists,
 * or recovered under new names.
 * The recovery runs in the background, so the API returns with a `202 Accepted` status once it has started.
 * @rest_spec_name data_recovery.start_recovery
 * @availability serverless visibility=private
 * @doc_id data-recovery-start-recovery
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_data_recovery/recoveries'
      methods: ['POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The period to wait for the master node.
     * If the master node is not available before the timeout expires, the request fails and returns an error.
     * To indicate that the request should never timeout, set it to `-1`.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
  body: {
    /**
     * The exact end time of the recovery point to recover from, as a date or epoch milliseconds.
     * An `end_time` returned when listing recovery points can be passed back as it is.
     */
    recovery_point_end_time: DateTime
    /**
     * The sources to recover. Each value is an index or data stream expression. Wildcards and exclusions prefixed with `-` are supported.
     * The list must not be empty and must not contain blank values.
     */
    sources: string[]
    /** How to recover the sources: `replace` recovers them in place, over the data that currently exists, and `rename` recovers them under new names. */
    mode: RecoveryMode
    /**
     * How to derive the new name of each recovered source from its name.
     * Required when `mode` is `rename`, and not allowed when `mode` is `replace`.
     */
    rename_strategy?: RenameStrategy
    /** Custom metadata for the recovery. */
    metadata?: Metadata
  }
}
