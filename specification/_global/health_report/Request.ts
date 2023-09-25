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
import { integer } from '@_types/Numeric'
import { Duration } from '@_types/Time'

/**
 * @rest_spec_name health_report
 * @availability stack since=8.7.0 stability=stable
 * @availability serverless stability=stable visibility=private
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * A feature of the cluster, as returned by the top-level health report API.
     */
    feature?: string | string[]
  }
  query_parameters: {
    /**
     * Explicit operation timeout.
     */
    timeout?: Duration
    /**
     * Opt-in for more information about the health of the system.
     * @server_default true
     */
    verbose?: boolean
    /**
     * Limit the number of affected resources the health report API returns.
     * @server_default 1000
     */
    size?: integer
  }
}
