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
 * Returns the current status and available results for an async EQL search or a stored synchronous EQL search.
 * @doc_id eql-async-search-api
 * @rest_spec_name eql.get
 * @availability stack since=7.9.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Identifier for the search.
     */
    id: Id
  }
  query_parameters: {
    /**
     * Period for which the search and its results are stored on the cluster.
     * Defaults to the keep_alive value set by the search’s EQL search API request.
     */
    keep_alive?: Duration
    /**
     * Timeout duration to wait for the request to finish.
     * Defaults to no timeout, meaning the request waits for complete search results.
     */
    wait_for_completion_timeout?: Duration
  }
}
