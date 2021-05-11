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
import { Response as SearchResponse } from '@global/search/SearchResponse'
import { PointInTimeReference } from '@global/search/_types/PointInTimeReference'
import { SuggestContainer } from '@global/search/_types/suggester'
import { Dictionary } from '@spec_utils/Dictionary'
import { AggregationContainer } from '@_types/aggregations/AggregationContainer'
import { ExpandWildcards, Indices, SearchType } from '@_types/common'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'

/**
 * Contains parameters used to limit or change the subsequent search body request.
 */
export class Header {
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  index?: Indices
  preference?: string
  request_cache?: boolean
  routing?: string
  search_type?: SearchType
}

export class Body {
  aggregations?: Dictionary<string, AggregationContainer>
  aggs?: Dictionary<string, AggregationContainer>
  query?: QueryContainer
  from?: integer
  size?: integer
  pit?: PointInTimeReference
  track_total_hits?: boolean | integer
  suggest?: SuggestContainer | Dictionary<string, SuggestContainer>
}

export class SearchResult<TDocument> extends SearchResponse<TDocument> {
  status: integer
}
