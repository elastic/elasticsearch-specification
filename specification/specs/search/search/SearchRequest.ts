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

/**
 * @type_stability stable
 */
@rest_spec_name('search')
class SearchRequest extends RequestBase {
  path_parts?: {
    index?: Indices
    type?: TypeNames
  }
  query_parameters?: {
    allow_no_indices?: boolean
    allow_partial_search_results?: boolean
    analyzer?: string
    analyze_wildcard?: boolean
    batched_reduce_size?: long
    ccs_minimize_roundtrips?: boolean
    default_operator?: DefaultOperator
    df?: string
    docvalue_fields?: Fields
    expand_wildcards?: ExpandWildcards
    ignore_throttled?: boolean
    ignore_unavailable?: boolean
    lenient?: boolean
    max_concurrent_shard_requests?: long
    preference?: string
    pre_filter_shard_size?: long
    query_on_query_string?: string
    request_cache?: boolean
    routing?: Routing
    scroll?: Time
    search_type?: SearchType
    sequence_number_primary_term?: boolean
    stats?: string[]
    stored_fields?: Field[]
    suggest_field?: Field
    suggest_mode?: SuggestMode
    suggest_size?: long
    suggest_text?: string
    total_hits_as_integer?: boolean
    track_total_hits?: boolean | integer
    typed_keys?: boolean
    rest_total_hits_as_int?: boolean
    _source_excludes?: Fields
    _source_includes?: Fields
    seq_no_primary_term?: boolean
    q?: string
    size?: integer
    from?: integer
    sort?: SortOptions | SortOptions[]
  }
  body?: {
    aggs?: Dictionary<string, AggregationContainer>
    aggregations?: Dictionary<string, AggregationContainer>
    collapse?: FieldCollapse
    explain?: boolean
    from?: integer
    highlight?: Highlight
    track_total_hits?: boolean | integer
    /** @prop_serializer IndicesBoostFormatter */
    indices_boost?: Array<Dictionary<IndexName, double>>
    docvalue_fields?: DocValueField | Array<Field | DocValueField>
    min_score?: double
    post_filter?: QueryContainer
    profile?: boolean
    query?: QueryContainer
    rescore?: Rescore | Rescore[]
    script_fields?: Dictionary<string, ScriptField>
    search_after?: Array<integer | string>
    size?: integer
    slice?: SlicedScroll
    sort?: SortOptions | SortOptions[]
    _source?: boolean | Fields | SourceFilter
    fields?: Array<Field | DateField>
    suggest?: Dictionary<string, SuggestBucket>
    terminate_after?: long
    timeout?: string
    track_scores?: boolean
    version?: boolean
    seq_no_primary_term?: boolean
    stored_fields?: Fields
    pit?: PointInTimeReference
  }
}
