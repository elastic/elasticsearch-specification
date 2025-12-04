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
import { Field, Indices } from '@_types/common'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Duration } from '@_types/Time'

/**
 * Get terms in an index.
 *
 * Discover terms that match a partial string in an index.
 * This API is designed for low-latency look-ups used in auto-complete scenarios.
 *
 * > info
 * > The terms enum API may return terms from deleted documents. Deleted documents are initially only marked as deleted. It is not until their segments are merged that documents are actually deleted. Until that happens, the terms enum API will return terms from these documents.
 * @rest_spec_name terms_enum
 * @availability stack since=7.14.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_tag search
 * @doc_id search-terms-enum
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_terms_enum'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of data streams, indices, and index aliases to search.
     * Wildcard (`*`) expressions are supported.
     * To search all data streams or indices, omit this parameter or use `*`  or `_all`.
     */
    index: Indices
  }
  body: {
    /** The string to match at the start of indexed terms. If not provided, all terms in the field are considered. */
    field: Field
    /**
     * The number of matching terms to return.
     * @server_default 10
     */
    size?: integer
    /**
     * The maximum length of time to spend collecting results.
     * If the timeout is exceeded the `complete` flag set to `false` in the response and the results may be partial or empty.
     * @server_default 1s
     */
    timeout?: Duration
    /**
     * When `true`, the provided search string is matched against index terms without case sensitivity.
     * @server_default false
     */
    case_insensitive?: boolean
    /**
     * Filter an index shard if the provided query rewrites to `match_none`.
     * @doc_id query-dsl
     */
    index_filter?: QueryContainer
    /**
     * The string to match at the start of indexed terms.
     * If it is not provided, all terms in the field are considered.
     *
     * > info
     * > The prefix string cannot be larger than the largest possible keyword value, which is Lucene's term byte-length limit of 32766.
     */
    string?: string
    /**
     * The string after which terms in the index should be returned.
     * It allows for a form of pagination if the last result from one request is passed as the `search_after` parameter for a subsequent request.
     */
    search_after?: string
  }
}
