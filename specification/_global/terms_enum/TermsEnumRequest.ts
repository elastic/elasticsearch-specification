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
import { Field, IndexName } from '@_types/common'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Duration } from '@_types/Time'

/**
 * @rest_spec_name terms_enum
 * @availability stack since=7.14.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /** Comma-separated list of data streams, indices, and index aliases to search. Wildcard (*) expressions are supported. */
    index: IndexName
  }
  body: {
    /** The string to match at the start of indexed terms. If not provided, all terms in the field are considered. */
    field: Field
    /**
     * How many matching terms to return.
     * @server_default 10
     */
    size?: integer
    /**
     * The maximum length of time to spend collecting results. Defaults to "1s" (one second). If the timeout is exceeded the complete flag set to false in the response and the results may be partial or empty.
     * @server_default 1s
     */
    timeout?: Duration
    /**
     * When true the provided search string is matched against index terms without case sensitivity.
     * @server_default false
     */
    case_insensitive?: boolean
    /**
     * Allows to filter an index shard if the provided query rewrites to match_none.
     * @doc_id query-dsl
     */
    index_filter?: QueryContainer
    /**
     * The string after which terms in the index should be returned. Allows for a form of pagination if the last result from one request is passed as the search_after parameter for a subsequent request.
     */
    string?: string
    search_after?: string
  }
}
