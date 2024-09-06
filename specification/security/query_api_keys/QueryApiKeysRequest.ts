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
import { RequestBase } from '@_types/Base'
import { integer } from '@_types/Numeric'
import { Sort, SortResults } from '@_types/sort'
import { ApiKeyAggregationContainer, ApiKeyQueryContainer } from './types'

/**
 * Retrieves information for API keys in a paginated manner. You can optionally filter the results with a query.
 * @rest_spec_name security.query_api_keys
 * @availability stack since=7.15.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_own_api_key, read_security
 */
export interface Request extends RequestBase {
  query_parameters: {
    /**
     * Return the snapshot of the owner user's role descriptors associated with the API key.
     * An API key's actual permission is the intersection of its assigned role descriptors and the owner user's role descriptors.
     * @availability stack since=8.5.0
     * @availability serverless
     */
    with_limited_by?: boolean
    /**
     * Determines whether to also retrieve the profile uid, for the API key owner principal, if it exists.
     * @server_default false
     * @availability stack since=8.14.0
     * @availability serverless
     */
    with_profile_uid?: boolean
    /**
     * Determines whether aggregation names are prefixed by their respective types in the response.
     * @server_default false
     * @availability stack since=8.14.0
     * @availability serverless
     */
    typed_keys?: boolean
  }
  body: {
    /**
     * Any aggregations to run over the corpus of returned API keys.
     * Aggregations and queries work together. Aggregations are computed only on the API keys that match the query.
     * This supports only a subset of aggregation types, namely: `terms`, `range`, `date_range`, `missing`,
     * `cardinality`, `value_count`, `composite`, `filter`, and `filters`.
     * Additionally, aggregations only run over the same subset of fields that query works with.
     * @aliases aggs */
    aggregations?: Dictionary<string, ApiKeyAggregationContainer>
    /**
     * A query to filter which API keys to return.
     * If the query parameter is missing, it is equivalent to a `match_all` query.
     * The query supports a subset of query types, including `match_all`, `bool`, `term`, `terms`, `match`,
     * `ids`, `prefix`, `wildcard`, `exists`, `range`, and `simple_query_string`.
     * You can query the following public information associated with an API key: `id`, `type`, `name`,
     * `creation`, `expiration`, `invalidated`, `invalidation`, `username`, `realm`, and `metadata`.
     */
    query?: ApiKeyQueryContainer
    /**
     * Starting document offset.
     * By default, you cannot page through more than 10,000 hits using the from and size parameters.
     * To page through more hits, use the `search_after` parameter.
     * @server_default 0
     */
    from?: integer
    /**
     * Other than `id`, all public fields of an API key are eligible for sorting.
     * In addition, sort can also be applied to the `_doc` field to sort by index order.
     * @doc_id sort-search-results */
    sort?: Sort
    /**
     * The number of hits to return.
     * By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters.
     * To page through more hits, use the `search_after` parameter.
     * @server_default 10
     */
    size?: integer
    /**
     * Search after definition
     */
    search_after?: SortResults
  }
}
