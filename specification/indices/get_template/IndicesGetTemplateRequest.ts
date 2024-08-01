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
import { Names } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Get index templates.
 * Retrieves information about one or more index templates.
 * @rest_spec_name indices.get_template
 * @availability stack stability=stable
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of index template names used to limit the request.
     * Wildcard (`*`) expressions are supported.
     * To return all index templates, omit this parameter or use a value of `_all` or `*`.
     */
    name?: Names
  }
  query_parameters: {
    /**
     * If `true`, returns settings in flat format.
     * @server_default false
     */
    flat_settings?: boolean
    /**
     * If `true`, the request retrieves information from the local node only.
     * @server_default false
     */
    local?: boolean
    /**
     * Period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
