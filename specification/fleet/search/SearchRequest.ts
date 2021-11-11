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

import { Request as SearchRequest } from '@global/search/SearchRequest'
import { IndexName, IndexAlias } from '@_types/common'
import { Checkpoint } from '../_types/Checkpoints'

/**
 * @rest_spec_name fleet.search
 * @since 7.16.0
 * @stability experimental
 */
export interface Request extends SearchRequest {
  path_parts: {
    /**
     * A single index or index alias that resolves to a single index.
     */
    index: IndexName | IndexAlias
  }
  query_parameters: {
    /**
     * If `true`, returns partial results if there are shard request timeouts or shard failures. If `false`,
     * returns an error with no partial results. Defaults to the configured cluster setting
     * `search.default_allow_partial_results` which is `true` by default.
     * @server_default true
     */
    allow_partial_search_results?: boolean
    /**
     * A comma separated list of checkpoints. When configured, the search API will only be executed on
     * a shard after the relevant checkpoint has become visible for search. Defaults to an empty list
     * which will cause Elasticsearch to immediately execute the search.
     * @server_default []
     */
    wait_for_checkpoints?: Checkpoint[]
  }
}
