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
import { ServiceAccountQueryContainer } from './types'

/**
 * Find user-managed service accounts with a query.
 *
 * Get a paginated list of user-managed service accounts and their information.
 * You can optionally filter the results with a query.
 *
 * NOTE: Built-in service accounts are not stored in the security index, so this API never returns them.
 * Use the get service accounts API to list them.
 * @rest_spec_name security.query_service_accounts
 * @availability stack since=9.6.0 stability=experimental visibility=private
 * @cluster_privileges read_security, manage_service_account
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/_query/service'
      methods: ['GET', 'POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `true`, each service account also includes the profile UIDs of the users who created and last replaced it, under the `created_by_profile_uid` and `updated_by_profile_uid` fields.
     * A profile UID is included only for a user who has an activated user profile.
     * @server_default false
     */
    with_profile_uid?: boolean
  }
  body?: {
    /**
     * A query to filter which service accounts to return.
     * If the query parameter is missing, it is equivalent to a `match_all` query.
     * The query supports a subset of query types, including `match_all`, `bool`, `term`, `terms`, `match`,
     * `ids`, `prefix`, `wildcard`, `exists`, `range`, and `simple_query_string`.
     * You can query the following information associated with a service account: `username`, `roles`, `enabled`, `description`,
     * `created_by.username`, `created_by.realm`, `created_by.realm_type`, `created_by.api_key.id`, `created_by.api_key.name`, `created_at`,
     * `updated_by.username`, `updated_by.realm`, `updated_by.realm_type`, `updated_by.api_key.id`, `updated_by.api_key.name`, and `updated_at`.
     *
     * NOTE: The `username` of a service account is its `namespace/service` pair, so use a `prefix` query on `username` to select a namespace.
     */
    query?: ServiceAccountQueryContainer
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
     * All the fields that you can query on, other than `description`, are eligible for sorting.
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
     * The search after definition.
     * @ext_doc_id search-after
     */
    search_after?: SortResults
  }
}
