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
import {
  ExpandWildcards,
  Field,
  Fields,
  IndexName,
  Indices,
  Routing,
  SearchType,
  SuggestMode,
  VersionString
} from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { double, integer, long } from '@_types/Numeric'
import { FieldAndFormat, QueryContainer } from '@_types/query_dsl/abstractions'
import { ScriptField } from '@_types/Scripting'
import { SlicedScroll } from '@_types/SlicedScroll'
import { Time } from '@_types/Time'
import { FieldCollapse } from './_types/FieldCollapse'
import { Highlight } from './_types/highlighting'
import { PointInTimeReference } from './_types/PointInTimeReference'
import { Rescore } from './_types/rescoring'
import { SourceConfigParam, SourceConfig } from './_types/SourceFilter'
import { Suggester } from './_types/suggester'
import { TrackHits } from '@global/search/_types/hits'
import { Operator } from '@_types/query_dsl/Operator'
import { Sort, SortResults } from '@_types/sort'

/**
 * @rest_spec_name search
 * @since 0.0.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    index?: Indices
  }
  query_parameters: {
    allow_no_indices?: boolean
    allow_partial_search_results?: boolean
    analyzer?: string
    analyze_wildcard?: boolean
    batched_reduce_size?: long
    ccs_minimize_roundtrips?: boolean
    default_operator?: Operator
    df?: string
    docvalue_fields?: Fields
    expand_wildcards?: ExpandWildcards
    explain?: boolean
    ignore_throttled?: boolean
    ignore_unavailable?: boolean
    lenient?: boolean
    max_concurrent_shard_requests?: long
    min_compatible_shard_node?: VersionString
    preference?: string
    pre_filter_shard_size?: long
    request_cache?: boolean
    routing?: Routing
    scroll?: Time
    search_type?: SearchType
    stats?: string[]
    stored_fields?: Fields
    /**
     * Specifies which field to use for suggestions.
     */
    suggest_field?: Field
    suggest_mode?: SuggestMode
    suggest_size?: long
    /**
     * The source text for which the suggestions should be returned.
     */
    suggest_text?: string
    terminate_after?: long
    timeout?: Time
    track_total_hits?: TrackHits
    track_scores?: boolean
    typed_keys?: boolean
    rest_total_hits_as_int?: boolean
    version?: boolean
    _source?: SourceConfigParam
    _source_excludes?: Fields
    _source_includes?: Fields
    seq_no_primary_term?: boolean
    q?: string
    size?: integer
    from?: integer
    sort?: string | string[]
  }
  // We should keep this in sync with the multi search request body.
  body: {
    /** @aliases aggs */ // ES uses "aggregations" in serialization
    aggregations?: Dictionary<string, AggregationContainer>
    collapse?: FieldCollapse
    /**
     * If true, returns detailed information about score computation as part of a hit.
     * @server_default false
     */
    explain?: boolean
    /**
     * Starting document offset. By default, you cannot page through more than 10,000
     * hits using the from and size parameters. To page through more hits, use the
     * search_after parameter.
     * @server_default 0
     */
    from?: integer
    highlight?: Highlight
    /**
     * Number of hits matching the query to count accurately. If true, the exact
     * number of hits is returned at the cost of some performance. If false, the
     * response does not include the total number of hits matching the query.
     * Defaults to 10,000 hits.
     */
    track_total_hits?: TrackHits
    /**
     * Boosts the _score of documents from specified indices.
     */
    indices_boost?: Array<Dictionary<IndexName, double>>
    /**
     * Array of wildcard (*) patterns. The request returns doc values for field
     * names matching these patterns in the hits.fields property of the response.
     */
    docvalue_fields?: FieldAndFormat[]
    /**
     * Minimum _score for matching documents. Documents with a lower _score are
     * not included in the search results.
     */
    min_score?: double
    post_filter?: QueryContainer
    profile?: boolean
    /**
     * Defines the search definition using the Query DSL.
     */
    query?: QueryContainer
    rescore?: Rescore | Rescore[]
    /**
     * Retrieve a script evaluation (based on different fields) for each hit.
     */
    script_fields?: Dictionary<string, ScriptField>
    search_after?: SortResults
    /**
     * The number of hits to return. By default, you cannot page through more
     * than 10,000 hits using the from and size parameters. To page through more
     * hits, use the search_after parameter.
     * @server_default 10
     */
    size?: integer
    slice?: SlicedScroll
    /** @doc_id sort-search-results */
    sort?: Sort
    /**
     * Indicates which source fields are returned for matching documents. These
     * fields are returned in the hits._source property of the search response.
     */
    _source?: SourceConfig
    /**
     * Array of wildcard (*) patterns. The request returns values for field names
     * matching these patterns in the hits.fields property of the response.
     */
    fields?: Array<FieldAndFormat>
    suggest?: Suggester
    /**
     * Maximum number of documents to collect for each shard. If a query reaches this
     * limit, Elasticsearch terminates the query early. Elasticsearch collects documents
     * before sorting. Defaults to 0, which does not terminate query execution early.
     * @server_default 0
     */
    terminate_after?: long
    /**
     * Specifies the period of time to wait for a response from each shard. If no response
     * is received before the timeout expires, the request fails and returns an error.
     * Defaults to no timeout.
     */
    timeout?: string
    /**
     * If true, calculate and return document scores, even if the scores are not used for sorting.
     * @server_default false
     */
    track_scores?: boolean
    /**
     * If true, returns document version as part of a hit.
     * @server_default false
     */
    version?: boolean
    /**
     * If true, returns sequence number and primary term of the last modification
     * of each hit. See Optimistic concurrency control.
     */
    seq_no_primary_term?: boolean
    /**
     * List of stored fields to return as part of a hit. If no fields are specified,
     * no stored fields are included in the response. If this field is specified, the _source
     * parameter defaults to false. You can pass _source: true to return both source fields
     * and stored fields in the search response.
     */
    stored_fields?: Fields
    /**
     * Limits the search to a point in time (PIT). If you provide a PIT, you
     * cannot specify an <index> in the request path.
     */
    pit?: PointInTimeReference
    /**
     * Defines one or more runtime fields in the search request. These fields take
     * precedence over mapped fields with the same name.
     */
    runtime_mappings?: RuntimeFields
    /**
     * Stats groups to associate with the search. Each group maintains a statistics
     * aggregation for its associated searches. You can retrieve these stats using
     * the indices stats API.
     */
    stats?: string[]
  }
}
