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
import { ExpandWildcards, Indices, MediaType, SearchType } from '@_types/common'
import { RankEvalMetric, RankEvalRequestItem } from './types'

/**
 * Evaluate ranked search results.
 *
 * Evaluate the quality of ranked search results over a set of typical search queries.
 * @rest_spec_name rank_eval
 * @availability stack since=6.2.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 * @doc_tag search
 * @doc_id search-rank-eval
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_rank_eval'
      methods: ['GET', 'POST']
    },
    {
      path: '/{index}/_rank_eval'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * A  comma-separated list of data streams, indices, and index aliases used to limit the request.
     * Wildcard (`*`) expressions are supported.
     * To target all data streams and indices in a cluster, omit this parameter or use `_all` or `*`.
     */
    index?: Indices
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `false`, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices. This behavior applies even if the request targets other open indices. For example, a request targeting `foo*,bar*` returns an error if an index starts with `foo` but no index starts with `bar`.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `true`, missing or closed indices are not included in the response.
     * @server_default false
     */
    ignore_unavailable?: boolean
    search_type?: SearchType
  }
  body: {
    /** A set of typical search requests, together with their provided ratings. */
    requests: RankEvalRequestItem[]
    /**
     * Definition of the evaluation metric to calculate.
     */
    metric?: RankEvalMetric
  }
}
