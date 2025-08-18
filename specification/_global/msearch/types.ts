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

import { AggregationContainer } from '@_types/aggregations/AggregationContainer'
import { ErrorResponseBase } from '@_types/Base'
import {
  ExpandWildcards,
  Fields,
  IndexName,
  Indices,
  Routing,
  SearchType
} from '@_types/common'
import { KnnSearch } from '@_types/Knn'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { double, integer, long } from '@_types/Numeric'
import { FieldAndFormat, QueryContainer } from '@_types/query_dsl/abstractions'
import { ScriptField } from '@_types/Scripting'
import { Sort, SortResults } from '@_types/sort'
import { FieldCollapse } from '@global/search/_types/FieldCollapse'
import { Highlight } from '@global/search/_types/highlighting'
import { TrackHits } from '@global/search/_types/hits'
import { PointInTimeReference } from '@global/search/_types/PointInTimeReference'
import { Rescore } from '@global/search/_types/rescoring'
import { SourceConfig } from '@global/search/_types/SourceFilter'
import { Suggester } from '@global/search/_types/suggester'
import { ResponseBody as SearchResponse } from '@global/search/SearchResponse'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * @codegen_names header, body
 */
export type RequestItem = MultisearchHeader | MultisearchBody

/**
 * Contains parameters used to limit or change the subsequent search body request.
 */
export class MultisearchHeader {
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  index?: Indices
  preference?: string
  request_cache?: boolean
  routing?: Routing
  search_type?: SearchType
  ccs_minimize_roundtrips?: boolean
  allow_partial_search_results?: boolean
  ignore_throttled?: boolean
}

// We should keep this in sync with the normal search request body.
export class MultisearchBody {
  /**
   * @aliases aggs
   * @ext_doc_id search-aggregations
   */ // ES uses "aggregations" in serialization
  aggregations?: Dictionary<string, AggregationContainer>
  collapse?: FieldCollapse
  /**
   * Defines the search definition using the Query DSL.
   */
  query?: QueryContainer
  /**
   * If true, returns detailed information about score computation as part of a hit.
   * @server_default false
   */
  explain?: boolean
  /**
   * Configuration of search extensions defined by Elasticsearch plugins.
   */
  ext?: Dictionary<string, UserDefinedValue>
  /**
   * List of stored fields to return as part of a hit. If no fields are specified,
   * no stored fields are included in the response. If this field is specified, the _source
   * parameter defaults to false. You can pass _source: true to return both source fields
   * and stored fields in the search response.
   */
  stored_fields?: Fields
  /**
   * Array of wildcard (*) patterns. The request returns doc values for field
   * names matching these patterns in the hits.fields property of the response.
   */
  docvalue_fields?: FieldAndFormat[]
  /**
   * Defines the approximate kNN search to run.
   * @availability stack since=8.4.0
   * @availability serverless
   */
  knn?: KnnSearch | KnnSearch[]
  /**
   * Starting document offset. By default, you cannot page through more than 10,000
   * hits using the from and size parameters. To page through more hits, use the
   * search_after parameter.
   * @server_default 0
   */
  from?: integer
  highlight?: Highlight
  /**
   * Boosts the _score of documents from specified indices.
   */
  indices_boost?: Array<SingleKeyDictionary<IndexName, double>>
  /**
   * Minimum _score for matching documents. Documents with a lower _score are
   * not included in the search results.
   */
  min_score?: double
  post_filter?: QueryContainer
  profile?: boolean
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
  /**
   * Maximum number of documents to collect for each shard. If a query reaches this
   * limit, Elasticsearch terminates the query early. Elasticsearch collects documents
   * before sorting. Defaults to 0, which does not terminate query execution early.
   * @server_default 0
   */
  terminate_after?: long
  /**
   * Stats groups to associate with the search. Each group maintains a statistics
   * aggregation for its associated searches. You can retrieve these stats using
   * the indices stats API.
   */
  stats?: string[]
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
   * Number of hits matching the query to count accurately. If true, the exact
   * number of hits is returned at the cost of some performance. If false, the
   * response does not include the total number of hits matching the query.
   * Defaults to 10,000 hits.
   */
  track_total_hits?: TrackHits
  /**
   * If true, returns document version as part of a hit.
   * @server_default false
   */
  version?: boolean
  /**
   * Defines one or more runtime fields in the search request. These fields take
   * precedence over mapped fields with the same name.
   */
  runtime_mappings?: RuntimeFields
  /**
   * If true, returns sequence number and primary term of the last modification
   * of each hit. See Optimistic concurrency control.
   */
  seq_no_primary_term?: boolean
  /**
   * Limits the search to a point in time (PIT). If you provide a PIT, you
   * cannot specify an <index> in the request path.
   */
  pit?: PointInTimeReference
  suggest?: Suggester
}

export class MultiSearchResult<TDocument> {
  took: long
  responses: Array<ResponseItem<TDocument>>
}

/** @codegen_names result, failure */
export type ResponseItem<TDocument> =
  | MultiSearchItem<TDocument>
  | ErrorResponseBase

export class MultiSearchItem<TDocument> extends SearchResponse<TDocument> {
  // Not returned in MultiSearchTemplateResponse
  status?: integer
}
