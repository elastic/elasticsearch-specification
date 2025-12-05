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
import { MediaType } from '@_types/common'
import { integer } from '@_types/Numeric'
import { Sort, SortResults } from '@_types/sort'
import { Dictionary } from '@spec_utils/Dictionary'
import { ApiKeyAggregationContainer, ApiKeyQueryContainer } from './types'

/**
 * Find API keys with a query.
 *
 * Get a paginated list of API keys and their information.
 * You can optionally filter the results with a query.
 *
 * To use this API, you must have at least the `manage_own_api_key` or the `read_security` cluster privileges.
 * If you have only the `manage_own_api_key` privilege, this API returns only the API keys that you own.
 * If you have the `read_security`, `manage_api_key`, or greater privileges (including `manage_security`), this API returns all API keys regardless of ownership.
 * Refer to the linked documentation for examples of how to find API keys:
 * @rest_spec_name security.query_api_keys
 * @availability stack since=7.15.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_own_api_key, read_security
 * @ext_doc_id security-query-api-keys
 * @doc_id security-api-query-api-key
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/_query/api_key'
      methods: ['GET', 'POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Return the snapshot of the owner user's role descriptors associated with the API key.
     * An API key's actual permission is the intersection of its assigned role descriptors and the owner user's role descriptors (effectively limited by it).
     * An API key cannot retrieve any API key’s limited-by role descriptors (including itself) unless it has `manage_api_key` or higher privileges.
     * @server_default false
     * @availability stack since=8.5.0
     * @availability serverless
     */
    with_limited_by?: boolean
    /**
     * Determines whether to also retrieve the profile UID for the API key owner principal.
     * If it exists, the profile UID is returned under the `profile_uid` response field for each API key.
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
  body?: {
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
     *
     * NOTE: The queryable string values associated with API keys are internally mapped as keywords.
     * Consequently, if no `analyzer` parameter is specified for a `match` query, then the provided match query string is interpreted as a single keyword value.
     * Such a match query is hence equivalent to a `term` query.
     */
    query?: ApiKeyQueryContainer
    /**
     * The starting document offset.
     * It must not be negative.
     * By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters.
     * To page through more hits, use the `search_after` parameter.
     * @server_default 0
     */
    from?: integer
    /**
     * The sort definition.
     * Other than `id`, all public fields of an API key are eligible for sorting.
     * In addition, sort can also be applied to the `_doc` field to sort by index order.
     * @ext_doc_id sort-search-results */
    sort?: Sort
    /**
     * The number of hits to return.
     * It must not be negative.
     * The `size` parameter can be set to `0`, in which case no API key matches are returned, only the aggregation results.
     * By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters.
     * To page through more hits, use the `search_after` parameter.
     * @server_default 10
     */
    size?: integer
    /**
     * The search after definition.
     * @ext_doc_id search-after
     */
    search_after?: SortResults
  }
}
