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

import { Dictionary } from '@spec_utils/Dictionary'
import { AggregationContainer } from '@_types/aggregations/AggregationContainer'
import { RequestBase } from '@_types/Base'
import { Indices } from '@_types/common'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'

/**
 * Search rolled-up data.
 * The rollup search endpoint is needed because, internally, rolled-up documents utilize a different document structure than the original data.
 * It rewrites standard Query DSL into a format that matches the rollup documents then takes the response and rewrites it back to what a client would expect given the original query.
 *
 * The request body supports a subset of features from the regular search API.
 * The following functionality is not available:
 *
 * `size`: Because rollups work on pre-aggregated data, no search hits can be returned and so size must be set to zero or omitted entirely.
 * `highlighter`, `suggestors`, `post_filter`, `profile`, `explain`: These are similarly disallowed.
 *
 * **Searching both historical rollup and non-rollup data**
 *
 * The rollup search API has the capability to search across both "live" non-rollup data and the aggregated rollup data.
 * This is done by simply adding the live indices to the URI. For example:
 *
 * ```
 * GET sensor-1,sensor_rollup/_rollup_search
 * {
 *   "size": 0,
 *   "aggregations": {
 *      "max_temperature": {
 *       "max": {
 *         "field": "temperature"
 *       }
 *     }
 *   }
 * }
 * ```
 *
 * The rollup search endpoint does two things when the search runs:
 *
 * * The original request is sent to the non-rollup index unaltered.
 * * A rewritten version of the original request is sent to the rollup index.
 *
 * When the two responses are received, the endpoint rewrites the rollup response and merges the two together.
 * During the merging process, if there is any overlap in buckets between the two responses, the buckets from the non-rollup index are used.
 * @rest_spec_name rollup.rollup_search
 * @availability stack since=6.3.0 stability=experimental
 * @deprecated 8.11.0
 * @doc_id rollup-search
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * A comma-separated list of data streams and indices used to limit the request.
     * This parameter has the following rules:
     *
     * * At least one data stream, index, or wildcard expression must be specified. This target can include a rollup or non-rollup index. For data streams, the stream's backing indices can only serve as non-rollup indices. Omitting the parameter or using `_all` are not permitted.
     * * Multiple non-rollup indices may be specified.
     * * Only one rollup index may be specified. If more than one are supplied, an exception occurs.
     * * Wildcard expressions (`*`) may be used. If they match more than one rollup index, an exception occurs. However, you can use an expression to match multiple non-rollup indices or data streams.
     */
    index: Indices
  }
  query_parameters: {
    rest_total_hits_as_int?: boolean
    typed_keys?: boolean
  }
  body: {
    /**
     * Specifies aggregations.
     * @aliases aggs
     * @ext_doc_id rollup-agg-limitations
     */
    aggregations?: Dictionary<string, AggregationContainer>
    /**
     * Specifies a DSL query that is subject to some limitations.
     * @ext_doc_id rollup-search-limitations
     */
    query?: QueryContainer
    /**
     * Must be zero if set, as rollups work on pre-aggregated data.
     */
    size?: integer
  }
}
