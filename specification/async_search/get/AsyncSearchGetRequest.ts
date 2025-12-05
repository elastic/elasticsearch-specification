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
 * Get async search results.
 *
 * Retrieve the results of a previously submitted asynchronous search request.
 * If the Elasticsearch security features are enabled, access to the results of a specific async search is restricted to the user or API key that submitted it.
 * @rest_spec_name async_search.get
 * @availability stack since=7.7.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id async-search
 * @doc_tag search
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_async_search/{id}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /** A unique identifier for the async search. */
    id: Id
  }
  query_parameters: {
    /**
     * The length of time that the async search should be available in the cluster.
     * When not specified, the `keep_alive` set with the corresponding submit async request will be used.
     * Otherwise, it is possible to override the value and extend the validity of the request.
     * When this period expires, the search, if still running, is cancelled.
     * If the search is completed, its saved results are deleted.
     */
    keep_alive?: Duration
    /**
     * Specify whether aggregation and suggester names should be prefixed by their respective types in the response
     */
    typed_keys?: boolean
    /**
     * Specifies to wait for the search to be completed up until the provided timeout.
     * Final results will be returned if available before the timeout expires, otherwise the currently available results will be returned once the timeout expires.
     * By default no timeout is set meaning that the currently available results will be returned without any additional wait.
     */
    wait_for_completion_timeout?: Duration
  }
}
