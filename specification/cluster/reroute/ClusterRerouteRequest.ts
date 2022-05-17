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
import { Metrics } from '@_types/common'
import { TimeSpan } from '@_types/Time'
import { Command } from './types'

/**
 * @rest_spec_name cluster.reroute
 * @since 5.0.0
 * @stability stable
 * @doc_id cluster-reroute
 */
export interface Request extends RequestBase {
  query_parameters: {
    /**
     * If true, then the request simulates the operation only and returns the resulting state.
     * @server_default false
     */
    dry_run?: boolean
    /**
     * If true, then the response contains an explanation of why the commands can or cannot be executed.
     * @server_default false
     */
    explain?: boolean
    /**
     * Limits the information returned to the specified metrics.
     * @server_default all
     */
    metric?: Metrics
    /**
     * If true, then retries allocation of shards that are blocked due to too many subsequent allocation failures.
     * @server_default false
     */
    retry_failed?: boolean
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: TimeSpan
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: TimeSpan
  }
  body: {
    /**
     * Defines the commands to perform.
     */
    commands?: Command[]
  }
}
