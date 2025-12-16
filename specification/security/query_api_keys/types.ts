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

import {
  Buckets,
  CardinalityAggregate,
  CompositeAggregate,
  DateRangeAggregate,
  DoubleTermsAggregate,
  FilterAggregate,
  FiltersAggregate,
  LongTermsAggregate,
  MissingAggregate,
  MultiTermsAggregate,
  RangeAggregate,
  StringTermsAggregate,
  UnmappedTermsAggregate,
  ValueCountAggregate
} from '@_types/aggregations/Aggregate'
import {
  BucketAggregationBase,
  CompositeAggregation,
  DateRangeAggregation,
  MissingAggregation,
  RangeAggregation,
  TermsAggregation
} from '@_types/aggregations/bucket'
import {
  CardinalityAggregation,
  ValueCountAggregation
} from '@_types/aggregations/metric'
import { Field, Metadata } from '@_types/common'
import { BoolQuery } from '@_types/query_dsl/compound'
import { MatchQuery, SimpleQueryStringQuery } from '@_types/query_dsl/fulltext'
import { MatchAllQuery } from '@_types/query_dsl/MatchAllQuery'
import {
  ExistsQuery,
  IdsQuery,
  PrefixQuery,
  RangeQuery,
  TermQuery,
  TermsQuery,
  WildcardQuery
} from '@_types/query_dsl/term'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'

/**
 * @variants container
 * @non_exhaustive
 */
export class ApiKeyAggregationContainer {
  /**
   * Sub-aggregations for this aggregation.
   * Only applies to bucket aggregations.
   * @variant container_property
   * @aliases aggs
   */
  aggregations?: Dictionary<string, ApiKeyAggregationContainer>
  /**
   * @variant container_property
   */
  meta?: Metadata
  /**
   * A single-value metrics aggregation that calculates an approximate count of distinct values.
   * @doc_id search-aggregations-metrics-cardinality-aggregation
   */
  cardinality?: CardinalityAggregation
  /**
   * A multi-bucket aggregation that creates composite buckets from different sources.
   * Unlike the other multi-bucket aggregations, you can use the `composite` aggregation to paginate *all* buckets from a multi-level aggregation efficiently.
   */
  composite?: CompositeAggregation
  /**
   * A multi-bucket value source based aggregation that enables the user to define a set of date ranges - each representing a bucket.
   * @doc_id search-aggregations-bucket-daterange-aggregation
   */
  date_range?: DateRangeAggregation
  /**
   * A single bucket aggregation that narrows the set of documents to those that match a query.
   * @doc_id search-aggregations-bucket-filter-aggregation
   */
  filter?: ApiKeyQueryContainer
  /**
   * A multi-bucket aggregation where each bucket contains the documents that match a query.
   * @doc_id search-aggregations-bucket-filters-aggregation
   */
  filters?: ApiKeyFiltersAggregation
  missing?: MissingAggregation
  /**
   * A multi-bucket value source based aggregation that enables the user to define a set of ranges - each representing a bucket.
   * @doc_id search-aggregations-bucket-range-aggregation
   */
  range?: RangeAggregation
  /**
   * A multi-bucket value source based aggregation where buckets are dynamically built - one per unique value.
   * @doc_id search-aggregations-bucket-terms-aggregation
   */
  terms?: TermsAggregation
  /**
   * A single-value metrics aggregation that counts the number of values that are extracted from the aggregated documents.
   * @doc_id search-aggregations-metrics-valuecount-aggregation
   */
  value_count?: ValueCountAggregation
}

/**
 * @variants typed_keys_quirk
 * @non_exhaustive
 */
export type ApiKeyAggregate =
  | CardinalityAggregate
  | ValueCountAggregate
  | StringTermsAggregate
  | LongTermsAggregate
  | DoubleTermsAggregate
  | UnmappedTermsAggregate
  | MultiTermsAggregate
  | MissingAggregate
  | FilterAggregate
  | FiltersAggregate
  | RangeAggregate
  | DateRangeAggregate
  | CompositeAggregate

/**
 * @variants container
 * @non_exhaustive
 */
export class ApiKeyQueryContainer {
  /**
   * Matches documents matching boolean combinations of other queries.
   * @doc_id query-dsl-bool-query
   */
  bool?: BoolQuery
  /**
   * Returns documents that contain an indexed value for a field.
   * @doc_id query-dsl-exists-query
   */
  exists?: ExistsQuery
  /**
   * Returns documents based on their IDs.
   * This query uses document IDs stored in the `_id` field.
   * @doc_id query-dsl-ids-query
   */
  ids?: IdsQuery
  /**
   * Returns documents that match a provided text, number, date or boolean value.
   * The provided text is analyzed before matching.
   * @doc_id query-dsl-match-query
   */
  match?: SingleKeyDictionary<Field, MatchQuery>
  /**
   * Matches all documents, giving them all a `_score` of 1.0.
   * @doc_id query-dsl-match-all-query
   */
  match_all?: MatchAllQuery
  /**
   * Returns documents that contain a specific prefix in a provided field.
   * @doc_id query-dsl-prefix-query
   */
  prefix?: SingleKeyDictionary<Field, PrefixQuery>
  /**
   * Returns documents that contain terms within a provided range.
   * @doc_id query-dsl-range-query
   */
  range?: SingleKeyDictionary<Field, RangeQuery>
  /**
   * Returns documents based on a provided query string, using a parser with a limited but fault-tolerant syntax.
   * @doc_id query-dsl-simple-query-string-query
   */
  simple_query_string?: SimpleQueryStringQuery
  /**
   * Returns documents that contain an exact term in a provided field.
   * To return a document, the query term must exactly match the queried field's value, including whitespace and capitalization.
   * @doc_id query-dsl-term-query
   */
  term?: SingleKeyDictionary<Field, TermQuery>
  /**
   * Returns documents that contain one or more exact terms in a provided field.
   * To return a document, one or more terms must exactly match a field value, including whitespace and capitalization.
   * @doc_id query-dsl-terms-query
   */
  terms?: TermsQuery
  /**
   * Returns documents that contain terms matching a wildcard pattern.
   * @doc_id query-dsl-wildcard-query
   */
  wildcard?: SingleKeyDictionary<Field, WildcardQuery>
}

export class ApiKeyFiltersAggregation extends BucketAggregationBase {
  /**
   * Collection of queries from which to build buckets.
   */
  filters?: Buckets<ApiKeyQueryContainer>
  /**
   * Set to `true` to add a bucket to the response which will contain all documents that do not match any of the given filters.
   */
  other_bucket?: boolean
  /**
   * The key with which the other bucket is returned.
   * @server_default _other_
   */
  other_bucket_key?: string
  /**
   * By default, the named filters aggregation returns the buckets as an object.
   * Set to `false` to return the buckets as an array of objects.
   * @server_default true
   */
  keyed?: boolean
}
