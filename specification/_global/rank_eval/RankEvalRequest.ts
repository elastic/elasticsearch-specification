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
 * @ext_doc_id evaluate-ranked-search-results
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
     * A setting that does two separate checks on the index expression.
     * If `false`, the request returns an error (1) if any wildcard expression
     * (including `_all` and `*`) resolves to zero matching indices or (2) if the
     * complete set of resolved indices, aliases or data streams is empty after all
     * expressions are evaluated. If `true`, index expressions that resolve to no
     * indices are allowed and the request returns an empty result.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * Whether to expand wildcard expression to concrete indices that are open, closed or both.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `false`, the request returns an error if it targets a concrete (non-wildcarded)
     * index, alias, or data stream that is missing, closed, or otherwise unavailable.
     * If `true`, unavailable concrete targets are silently ignored.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * Search operation type
     */
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
