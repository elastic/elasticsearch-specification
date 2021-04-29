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

import { FieldCollapse } from '@global/search/collapsing/FieldCollapse'
import { Highlight } from '@global/search/highlighting/Highlight'
import { PointInTimeReference } from '@global/search/point_in_time/PointInTimeReference'
import { Rescore } from '@global/search/rescoring/Rescore'
import { Sort } from '@global/search/sort/Sort'
import { SourceFilter } from '@global/search/source_filtering/SourceFilter'
import { SuggestContainer } from '@global/search/suggesters/SuggestContainer'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { AggregationContainer } from '@_types/aggregations/AggregationContainer'
import { RequestBase } from '@_types/Base'
import {
  DefaultOperator,
  ExpandWildcards,
  Field,
  Fields,
  IndexName,
  Indices,
  Routing,
  SearchType,
  SuggestMode
} from '@_types/common'
import { double, integer, long } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions/container/QueryContainer'
import { ScriptField } from '@_types/Scripting'
import { DateField, Time } from '@_types/Time'

/**
 * @rest_spec_name async_search.submit
 * @since 7.7.0
 * @stability TODO
 */
export interface Request extends RequestBase {
  path_parts?: {
    index?: Indices
  }
  query_parameters?: {
    batched_reduce_size?: long
    wait_for_completion_timeout?: Time
    keep_on_completion?: boolean
    typed_keys?: boolean
  }
  body?: {
    aggs?: Dictionary<string, AggregationContainer>
    allow_no_indices?: boolean
    allow_partial_search_results?: boolean
    analyzer?: string
    analyze_wildcard?: boolean
    batched_reduce_size?: long
    collapse?: FieldCollapse
    default_operator?: DefaultOperator
    df?: string
    docvalue_fields?: Fields
    expand_wildcards?: ExpandWildcards
    explain?: boolean
    from?: integer
    highlight?: Highlight
    ignore_throttled?: boolean
    ignore_unavailable?: boolean
    indices_boost?: Dictionary<IndexName, double>[]
    keep_alive?: Time
    keep_on_completion?: boolean
    lenient?: boolean
    max_concurrent_shard_requests?: long
    min_score?: double
    post_filter?: QueryContainer
    preference?: string
    profile?: boolean
    pit?: PointInTimeReference
    query?: QueryContainer
    query_on_query_string?: string
    request_cache?: boolean
    rescore?: Rescore[]
    routing?: Routing
    script_fields?: Dictionary<string, ScriptField>
    search_after?: UserDefinedValue[]
    search_type?: SearchType
    sequence_number_primary_term?: boolean
    size?: integer
    sort?: Sort
    _source?: boolean | SourceFilter
    stats?: string[]
    stored_fields?: Fields
    suggest?: Dictionary<string, SuggestContainer>
    suggest_field?: Field
    suggest_mode?: SuggestMode
    suggest_size?: long
    suggest_text?: string
    terminate_after?: long
    timeout?: string
    track_scores?: boolean
    track_total_hits?: boolean
    typed_keys?: boolean
    version?: boolean
    wait_for_completion_timeout?: Time
    fields?: Array<Field | DateField>
  }
}
