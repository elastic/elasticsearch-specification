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

import { TimeSpan } from '@_types/Time'
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'

/**
 * @rest_spec_name sql.get_async
 * @since 7.15.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    id: Id
  }
  query_parameters: {
    /**
     * Separator for CSV results. The API only supports this parameter for CSV responses.
     * @server_default ,
     */
    delimiter?: string
    /**
     * Format for the response. You must specify a format using this parameter or the
     * Accept HTTP header. If you specify both, the API uses this parameter.
     */
    format?: string
    /**
     * Retention period for the search and its results. Defaults
     * to the `keep_alive` period for the original SQL search.
     */
    keep_alive?: TimeSpan
    /**
     * Period to wait for complete results. Defaults to no timeout,
     * meaning the request waits for complete search results.
     */
    wait_for_completion_timeout?: TimeSpan
  }
}
