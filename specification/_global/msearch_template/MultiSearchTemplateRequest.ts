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
import { Indices, SearchType } from '@_types/common'
import { long } from '@_types/Numeric'
import { RequestItem } from './types'

/**
 * Runs multiple templated searches with a single request.
 * @rest_spec_name msearch_template
 * @availability stack since=5.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and aliases to search.
     * Supports wildcards (`*`).
     * To search all data streams and indices, omit this parameter or use `*`.
     */
    index?: Indices
  }
  query_parameters: {
    /**
     * If `true`, network round-trips are minimized for cross-cluster search requests.
     * @server_default true
     */
    ccs_minimize_roundtrips?: boolean
    /**
     * Maximum number of concurrent searches the API can run.
     */
    max_concurrent_searches?: long
    /**
     * The type of the search operation.
     * Available options: `query_then_fetch`, `dfs_query_then_fetch`.
     */
    search_type?: SearchType
    /**
     * If `true`, the response returns hits.total as an integer.
     * If `false`, it returns hits.total as an object.
     * @server_default false
     */
    rest_total_hits_as_int?: boolean
    /**
     * If `true`, the response prefixes aggregation and suggester names with their respective types.
     * @server_default false
     */
    typed_keys?: boolean
  }
  /** @codegen_name search_templates */
  body: Array<RequestItem>
}
