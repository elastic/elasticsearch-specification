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

/**
 * @rest_spec_name rank_eval
 * @since 6.2.0
 * @stability TODO
 */
interface RankEvalRequest extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and index aliases used to limit the request. Wildcard (*) expressions are supported.
     * To target all data streams and indices in a cluster, omit this parameter or use _all or *.
     */
     index: Indices
  }
  query_parameters?: {
    /**
     * If false, the request returns an error if any wildcard expression, index alias, or _all value targets only missing or closed indices. This behavior applies even if the request targets other open indices. For example, a request targeting foo*,bar* returns an error if an index starts with foo but no index starts with bar.
     * @server_default true
     */
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcardOptions
    /**
     * If true, missing or closed indices are not included in the response.
     * @server_default false
     */
     ignore_unavailable?: boolean
     search_type?: string
  }
  body: {
    /** A set of typical search requests, together with their provided ratings */
    requests: RankEvalRequestItem[]
    /**
     * Definition of the evaluation metric to calculate
     * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/search-rank-eval.html#_available_evaluation_metrics
     */
    metric?: RankEvalMetric
  }
}
