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
 * Get async SQL search results.
 * Get the current status and available results for an async SQL search or stored synchronous SQL search.
 *
 * If the Elasticsearch security features are enabled, only the user who first submitted the SQL search can retrieve the search using this API.
 * @rest_spec_name sql.get_async
 * @availability stack since=7.15.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id sql-async-search-api
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_sql/async/{id}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * The identifier for the search.
     */
    id: Id
  }
  query_parameters: {
    /**
     * The separator for CSV results.
     * The API supports this parameter only for CSV responses.
     * @server_default ,
     */
    delimiter?: string
    /**
     * The format for the response.
     * You must specify a format using this parameter or the `Accept` HTTP header.
     * If you specify both, the API uses this parameter.
     */
    format?: string
    /**
     * The retention period for the search and its results.
     * It defaults to the `keep_alive` period for the original SQL search.
     * @server_default 5d
     */
    keep_alive?: Duration
    /**
     * The period to wait for complete results.
     * It defaults to no timeout, meaning the request waits for complete search results.
     */
    wait_for_completion_timeout?: Duration
  }
}
