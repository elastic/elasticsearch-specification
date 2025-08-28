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
import { integer } from '@_types/Numeric'
import { Sort, SortResults } from '@_types/sort'
import { UserQueryContainer } from './types'

/**
 * Find users with a query.
 *
 * Get information for users in a paginated manner.
 * You can optionally filter the results with a query.
 *
 * NOTE: As opposed to the get user API, built-in users are excluded from the result.
 * This API is only for native users.
 * @rest_spec_name security.query_user
 * @availability stack since=8.14.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges read_security
 * @doc_id security-api-query-user
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/_query/user'
      methods: ['GET', 'POST']
    }
  ]
  body: {
    /**
     * A query to filter which users to return.
     * If the query parameter is missing, it is equivalent to a `match_all` query.
     * The query supports a subset of query types, including `match_all`, `bool`, `term`, `terms`, `match`,
     * `ids`, `prefix`, `wildcard`, `exists`, `range`, and `simple_query_string`.
     * You can query the following information associated with user: `username`, `roles`, `enabled`, `full_name`, and `email`.
     */
    query?: UserQueryContainer
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
     * Fields eligible for sorting are: `username`, `roles`, `enabled`.
     * In addition, sort can also be applied to the `_doc` field to sort by index order.
     * @ext_doc_id sort-search-results
     */
    sort?: Sort
    /**
     * The number of hits to return.
     * It must not be negative.
     * By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters.
     * To page through more hits, use the `search_after` parameter.
     * @server_default 10
     */
    size?: integer
    /**
     * The search after definition
     * @ext_doc_id search-after
     */
    search_after?: SortResults
  }
  query_parameters: {
    /**
     * Determines whether to retrieve the user profile UID, if it exists, for the users.
     * @server_default false
     */
    with_profile_uid?: boolean
  }
}
