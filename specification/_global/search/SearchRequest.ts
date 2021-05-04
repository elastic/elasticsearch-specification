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
import { DefaultOperator, ExpandWildcards, Field, Fields, IndexName, Indices, Routing, SearchType, SuggestMode, Types, VersionString } from '@_types/common'
import { RuntimeFields } from '@_types/mapping/runtime_fields/RuntimeFields'
import { double, integer, long } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions/container/QueryContainer'
import { ScriptField } from '@_types/Scripting'
import { SlicedScroll } from '@_types/SlicedScroll'
import { DateField, Time } from '@_types/Time'
import { FieldCollapse } from './_types/FieldCollapse'
import { Highlight } from './_types/highlighting'
import { PointInTimeReference } from './_types/PointInTimeReference'
import { Rescore } from './_types/rescoring'
import { Sort } from './_types/sort'
import { DocValueField, SourceFilter } from './_types/SourceFilter'
import { SuggestContainer } from './_types/suggester'

/**
 * @rest_spec_name search
 * @since 0.0.0
 * @stability TODO
 */
export interface Request extends RequestBase {
  path_parts?: {
    index?: Indices
    type?: Types
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
    suggest_field?: Field
    suggest_mode?: SuggestMode
    suggest_size?: long
    suggest_text?: string
    terminate_after?: long
    timeout?: Time
    track_total_hits?: boolean | integer
    track_scores?: boolean
    typed_keys?: boolean
    rest_total_hits_as_int?: boolean
    version?: boolean
    _source?: boolean | Fields
    _source_excludes?: Fields
    _source_includes?: Fields
    seq_no_primary_term?: boolean
    q?: string
    size?: integer
    from?: integer
    sort?: string | string[]
  }
  body?: {
    aggs?: Dictionary<string, AggregationContainer>
    aggregations?: Dictionary<string, AggregationContainer>
    collapse?: FieldCollapse
    explain?: boolean
    from?: integer
    highlight?: Highlight
    track_total_hits?: boolean | integer
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
    sort?: Sort
    _source?: boolean | Fields | SourceFilter
    fields?: Array<Field | DateField>
    suggest?: SuggestContainer | Dictionary<string, SuggestContainer>
    terminate_after?: long
    timeout?: string
    track_scores?: boolean
    version?: boolean
    seq_no_primary_term?: boolean
    stored_fields?: Fields
    pit?: PointInTimeReference
    runtime_mappings?: RuntimeFields
    stats?: string[]
  }
}
