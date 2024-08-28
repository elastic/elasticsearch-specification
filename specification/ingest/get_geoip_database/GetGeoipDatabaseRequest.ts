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
import { Ids } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Returns information about one or more geoip database configurations.
 * @rest_spec_name ingest.get_geoip_database
 * @availability stack since=8.15.0 stability=stable
 * @availability serverless visibility=private
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of database configuration IDs to retrieve.
     * Wildcard (`*`) expressions are supported.
     * To get all database configurations, omit this parameter or use `*`.
     */
    id?: Ids
  }
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s */
    master_timeout?: Duration
  }
}
