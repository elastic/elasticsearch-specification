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
import { Metadata } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import {
  CompositeAggregation,
  DateRangeAggregation,
  FiltersAggregation,
  MissingAggregation,
  RangeAggregation,
  TermsAggregation,
} from '@_types/aggregations/bucket'
import {
  CardinalityAggregation,
  ValueCountAggregation,
} from '@_types/aggregations/metric'

/**
 * @variants container
 * @non_exhaustive
 */
export class APIKeyAggregationContainer {
  /**
   * Sub-aggregations for this aggregation.
   * Only applies to bucket aggregations.
   * @variant container_property
   * @aliases aggs
   */
  aggregations?: Dictionary<string, APIKeyAggregationContainer>
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
  filter?: QueryContainer
  /**
   * A multi-bucket aggregation where each bucket contains the documents that match a query.
   * @doc_id search-aggregations-bucket-filters-aggregation
   */
  filters?: FiltersAggregation
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
