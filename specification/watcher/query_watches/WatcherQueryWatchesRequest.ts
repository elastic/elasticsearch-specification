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
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Sort, SortResults } from '@_types/sort'

/**
 * Query watches.
 *
 * Get all registered watches in a paginated manner and optionally filter watches by a query.
 *
 * Note that only the `_id` and `metadata.*` fields are queryable or sortable.
 * @rest_spec_name watcher.query_watches
 * @availability stack since=7.11.0 stability=stable
 * @cluster_privileges monitor_watcher
 * @doc_id watcher-api-query-watches
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_watcher/_query/watches'
      methods: ['GET', 'POST']
    }
  ]
  body?: {
    /**
     * The offset from the first result to fetch.
     * It must be non-negative.
     * @server_default 0
     */
    from?: integer
    /**
     * The number of hits to return.
     * It must be non-negative.
     * @server_default 10
     */
    size?: integer
    /**
     * A query that filters the watches to be returned.
     */
    query?: QueryContainer
    /**
     * One or more fields used to sort the search results.
     * @ext_doc_id sort-search-results
     */
    sort?: Sort
    /**
     * Retrieve the next page of hits using a set of sort values from the previous page.
     * @ext_doc_id search-after
     */
    search_after?: SortResults
  }
}
