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
import { long } from '@_types/Numeric'
import { Duration } from '@_types/Time'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'


/**
 * Designed for indirect use by ECE/ESS and ECK, direct use is not supported.
 *
 * @rest_spec_name _internal.update_desired_nodes
 * @availability stack stability=experimental visibility=private
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_internal/desired_nodes/{history_id}/{version}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The history ID
     */
    history_id: string
    /**
     * The version number
     */
    version?: long
  }
  query_parameters: {
    /**
     * Simulate the update
     */
    dry_run?: boolean
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
  /** @codegen_name body */
  body: UserDefinedValue
}