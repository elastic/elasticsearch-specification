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
import { ExpandWildcards, Field, Indices, MediaType } from '@_types/common'
import { integer } from '@_types/Numeric'
import { KnnEvalQuerySource, KnnEvalSettings } from './types'

/**
 * Evaluate kNN search settings.
 *
 * Estimate the recall and cost of approximate kNN search configurations on a `dense_vector` field against a more thorough baseline.
 * The field must use the `bbq_disk` index type, and must not be inside a nested object.
 *
 * Each `knn_settings` entry reports the mean recall of the baseline's top `k`, not of relevance judgments, plus included and excluded query counts and cost totals.
 * A query is excluded from the mean recall when the candidate finds a document scoring above the baseline's lowest top `k` score.
 * A baseline returning fewer than `k` hits fails that query, because recall at `k` is undefined.
 * All configurations run against one point in time.
 *
 * The default baseline uses a `visit_percentage` of 20 and a `rescore_vector.oversample` of 100.
 * An exact full-precision baseline must be requested explicitly with `allow_exact_baseline`, and is limited to 100 million vector-by-query comparisons.
 *
 * The request is refused when the `search.knn_eval.enabled` cluster setting or the `index.knn_eval.enabled` index setting is `false`.
 * @rest_spec_name knn_eval
 * @availability stack since=9.6.0 stability=experimental visibility=public
 * @availability serverless stability=experimental visibility=public
 * @index_privileges read, view_index_metadata
 * @doc_id knn-eval
 * @doc_tag search
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_knn_eval'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of index names to search.
     */
    index: Indices
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `false`, the request returns an error if it targets a missing or closed index.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * If `false`, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices.
     * This behavior applies even if the request targets other open indices.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * The type of index that wildcard patterns can match.
     * It supports comma-separated values, such as `open,hidden`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `true`, the request waits for the evaluation to complete.
     * A large evaluation can run for minutes, and closing the connection, for example because of a client or proxy timeout, cancels it.
     * If `false`, the request returns a task identifier, and stores the completed response for retrieval through the task management API.
     * @server_default true
     */
    wait_for_completion?: boolean
  }
  body: {
    /**
     * The `dense_vector` field to evaluate.
     */
    field: Field
    /**
     * The number of nearest neighbors to compute the recall for, from 1 to 1000.
     */
    k: integer
    /**
     * The source of the query vectors.
     */
    query_source: KnnEvalQuerySource
    /**
     * The settings of the search that the `knn_settings` entries are compared with.
     * If not specified, it uses a `visit_percentage` of 20 and a `rescore_vector.oversample` of 100.
     */
    baseline?: KnnEvalSettings
    /**
     * The kNN search settings to evaluate, from 1 to 32 unique entries.
     */
    knn_settings: KnnEvalSettings[]
    /**
     * If `true`, the `baseline` can be `exact`.
     * An exact baseline compares every vector at full precision, and can severely slow down other searches.
     * @server_default false
     */
    allow_exact_baseline?: boolean
  }
}
