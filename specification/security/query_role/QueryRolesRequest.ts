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
import { RoleQueryContainer } from './types'

/**
 * Find roles with a query.
 *
 * Get roles in a paginated manner.
 * The role management APIs are generally the preferred way to manage roles, rather than using file-based role management.
 * The query roles API does not retrieve roles that are defined in roles files, nor built-in ones.
 * You can optionally filter the results with a query.
 * Also, the results can be paginated and sorted.
 * @rest_spec_name security.query_role
 * @availability stack since=8.15.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges read_security
 * @doc_id security-api-query-role
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/_query/role'
      methods: ['GET', 'POST']
    }
  ]
  body: {
    /**
     * A query to filter which roles to return.
     * If the query parameter is missing, it is equivalent to a `match_all` query.
     * The query supports a subset of query types, including `match_all`, `bool`, `term`, `terms`, `match`,
     * `ids`, `prefix`, `wildcard`, `exists`, `range`, and `simple_query_string`.
     * You can query the following information associated with roles: `name`, `description`, `metadata`,
     * `applications.application`, `applications.privileges`, and `applications.resources`.
     */
    query?: RoleQueryContainer
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
     * You can sort on `username`, `roles`, or `enabled`.
     * In addition, sort can also be applied to the `_doc` field to sort by index order.
     * @doc_id sort-search-results
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
     * The search after definition.
     * @ext_doc_id search-after
     */
    search_after?: SortResults
  }
}
