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
import { ExpandWildcards, Field, IndexName, Indices } from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { uint } from '@_types/Numeric'
import { FieldAndFormat, QueryContainer } from '@_types/query_dsl/abstractions'
import { Duration } from '@_types/Time'
import { ResultPosition } from './types'

/**
 * @rest_spec_name eql.search
 * @availability stack since=7.9.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    index: Indices
  }
  query_parameters: {
    /**
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If true, missing or closed indices are not included in the response.
     * @server_default true
     */
    ignore_unavailable?: boolean
    /**
     * Period for which the search and its results are stored on the cluster.
     * @server_default 5d
     */
    keep_alive?: Duration
    /**
     * If true, the search and its results are stored on the cluster.
     * @server_default false
     */
    keep_on_completion?: boolean
    /**
     * Timeout duration to wait for the request to finish. Defaults to no timeout, meaning the request waits for complete search results.
     */
    wait_for_completion_timeout?: Duration
  }
  body: {
    /**
     * EQL query you wish to run.
     * @doc_id eql-syntax
     */
    query: string
    case_sensitive?: boolean
    /**
     * Field containing the event classification, such as process, file, or network.
     * @server_default event.category
     */
    event_category_field?: Field
    /**
     * Field used to sort hits with the same timestamp in ascending order
     * @doc_id sort-tiebreaker
     */
    tiebreaker_field?: Field
    /**
     * Field containing event timestamp. Default "@timestamp"
     */
    timestamp_field?: Field
    /**
     * Maximum number of events to search at a time for sequence queries.
     * @server_default 1000
     */
    fetch_size?: uint
    /**
     * Query, written in Query DSL, used to filter the events on which the EQL query runs.
     */
    filter?: QueryContainer | QueryContainer[]
    keep_alive?: Duration
    keep_on_completion?: boolean
    wait_for_completion_timeout?: Duration
    /**
     * For basic queries, the maximum number of matching events to return. Defaults to 10
     * @doc_id eql-basic-syntax
     */
    size?: uint // doc says "integer of float" but it's really an int
    /**
     * Array of wildcard (*) patterns. The response returns values for field names matching these patterns in the fields property of each hit.
     */
    fields?: FieldAndFormat | FieldAndFormat[]
    /**
     * @server_default tail
     */
    result_position?: ResultPosition
    /**
     * @availability stack since=8.0.0
     * @availability serverless
     */
    runtime_mappings?: RuntimeFields
  }
}
