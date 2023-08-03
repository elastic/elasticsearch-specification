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

import { SortOrder } from '@_types/sort'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { EmptyObject, FieldValue } from '@_types/common'
import { Field, RelationName, Fields } from '@_types/common'
import {
  GeoDistanceType,
  DistanceUnit,
  GeoHashPrecision,
  GeoTilePrecision,
  GeoLocation,
  GeoBounds
} from '@_types/Geo'
import { integer, float, long, double } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Script } from '@_types/Scripting'
import { DateTime, Duration, DateMath, TimeZone } from '@_types/Time'
import { Buckets } from './Aggregate'
import { Aggregation } from './Aggregation'
import { Missing, MissingOrder } from './AggregationContainer'

/**
 * Base type for bucket aggregations. These aggregations also accept sub-aggregations.
 */
// Note: since sub-aggregations exist only for bucket aggregations, this empty base class is a placeholder for client
// code generators that would want to lift the 'AggregationContainer.aggregations' container property here.
export class BucketAggregationBase extends Aggregation {}

export class AdjacencyMatrixAggregation extends BucketAggregationBase {
  filters?: Dictionary<string, QueryContainer>
}

export class AutoDateHistogramAggregation extends BucketAggregationBase {
  buckets?: integer
  field?: Field
  format?: string
  minimum_interval?: MinimumInterval
  missing?: DateTime
  offset?: string
  params?: Dictionary<string, UserDefinedValue>
  script?: Script
  time_zone?: TimeZone
}

export enum MinimumInterval {
  second = 0,
  minute = 1,
  hour = 2,
  day = 3,
  month = 4,
  year = 5
}

export class ChildrenAggregation extends BucketAggregationBase {
  type?: RelationName
}

export type CompositeAggregateKey = Dictionary<Field, FieldValue>

export class CompositeAggregation extends BucketAggregationBase {
  // Must be consistent with CompositeAggregate.after_key
  after?: CompositeAggregateKey
  size?: integer
  sources?: Array<Dictionary<string, CompositeAggregationSource>>
}

export class CompositeAggregationSource {
  terms?: TermsAggregation
  histogram?: HistogramAggregation
  date_histogram?: DateHistogramAggregation
  geotile_grid?: GeoTileGridAggregation
}

export class DateHistogramAggregation extends BucketAggregationBase {
  calendar_interval?: CalendarInterval
  extended_bounds?: ExtendedBounds<FieldDateMath>
  hard_bounds?: ExtendedBounds<FieldDateMath>
  field?: Field
  fixed_interval?: Duration
  format?: string
  /** @deprecated 7.2.0 use `fixed_interval` or `calendar_interval` */
  interval?: Duration
  min_doc_count?: integer
  missing?: DateTime
  offset?: Duration
  order?: AggregateOrder
  params?: Dictionary<string, UserDefinedValue>
  script?: Script
  time_zone?: TimeZone
  keyed?: boolean
}

export enum CalendarInterval {
  /** @aliases 1s */
  second,
  /** @aliases 1m */
  minute,
  /** @aliases 1h */
  hour,
  /** @aliases 1d */
  day,
  /** @aliases 1w */
  week,
  /** @aliases 1M */
  month,
  /** @aliases 1q */
  quarter,
  /** @aliases 1Y */
  year
}

export class DateRangeAggregation extends BucketAggregationBase {
  field?: Field
  format?: string
  missing?: Missing
  ranges?: DateRangeExpression[]
  time_zone?: TimeZone
  keyed?: boolean
}

/**
 * A date range limit, represented either as a DateMath expression or a number expressed
 * according to the target field's precision.
 *
 * @codegen_names expr, value
 */
// ES: DateRangeAggregationBuilder.innerBuild()
export type FieldDateMath = DateMath | double

export class DateRangeExpression {
  from?: FieldDateMath
  key?: string
  to?: FieldDateMath
}

export class DiversifiedSamplerAggregation extends BucketAggregationBase {
  execution_hint?: SamplerAggregationExecutionHint
  max_docs_per_value?: integer
  script?: Script
  shard_size?: integer
  field?: Field
}

export enum SamplerAggregationExecutionHint {
  map = 0,
  global_ordinals = 1,
  bytes_hash = 2
}

export class FiltersAggregation extends BucketAggregationBase {
  filters?: Buckets<QueryContainer>
  other_bucket?: boolean
  other_bucket_key?: string
  keyed?: boolean
}

export class GeoDistanceAggregation extends BucketAggregationBase {
  distance_type?: GeoDistanceType
  field?: Field
  origin?: GeoLocation
  ranges?: AggregationRange[]
  unit?: DistanceUnit
}

export class GeoHashGridAggregation extends BucketAggregationBase {
  bounds?: GeoBounds
  field?: Field
  precision?: GeoHashPrecision
  shard_size?: integer
  size?: integer
}

export class GeoTileGridAggregation extends BucketAggregationBase {
  field?: Field
  precision?: GeoTilePrecision
  shard_size?: integer
  size?: integer
  bounds?: GeoBounds
}

export class GeohexGridAggregation extends BucketAggregationBase {
  /**
   * Field containing indexed geo-point values. Must be explicitly
   * mapped as a `geo_point` field. If the field contains an array
   * `geohex_grid` aggregates all array values.
   */
  field: Field
  /**
   * Integer zoom of the key used to defined cells or buckets
   * in the results. Value should be between 0-15.
   * @server_default 6
   */
  precision?: integer
  /**
   * Bounding box used to filter the geo-points in each bucket.
   */
  bounds?: GeoBounds
  /**
   * Maximum number of buckets to return.
   * @server_default 10000
   */
  size?: integer
  /**
   * Number of buckets returned from each shard.
   */
  shard_size?: integer
}

export class GlobalAggregation extends BucketAggregationBase {}

export class ExtendedBounds<T> {
  max: T
  min: T
}

export class HistogramAggregation extends BucketAggregationBase {
  extended_bounds?: ExtendedBounds<double>
  hard_bounds?: ExtendedBounds<double>
  field?: Field
  interval?: double
  min_doc_count?: integer
  missing?: double
  offset?: double
  order?: AggregateOrder
  script?: Script
  format?: string
  keyed?: boolean
}

export class IpRangeAggregation extends BucketAggregationBase {
  field?: Field
  ranges?: IpRangeAggregationRange[]
}

export class IpRangeAggregationRange {
  from?: string | null
  mask?: string
  to?: string | null
}

export class MissingAggregation extends BucketAggregationBase {
  field?: Field
  missing?: Missing
}

export class MultiTermsAggregation extends BucketAggregationBase {
  collect_mode?: TermsAggregationCollectMode
  order?: AggregateOrder
  min_doc_count?: long
  shard_min_doc_count?: long
  shard_size?: integer
  show_term_doc_count_error?: boolean
  size?: integer
  terms: MultiTermLookup[]
}

export class MultiTermLookup {
  field: Field
  missing?: Missing
}

export class NestedAggregation extends BucketAggregationBase {
  path?: Field
}

export class ParentAggregation extends BucketAggregationBase {
  type?: RelationName
}

export class RangeAggregation extends BucketAggregationBase {
  field?: Field
  missing?: integer
  ranges?: AggregationRange[]
  script?: Script
  keyed?: boolean
  format?: string
}

export class AggregationRange {
  from?: double | string | null
  key?: string
  to?: double | string | null
}

export class RareTermsAggregation extends BucketAggregationBase {
  exclude?: TermsExclude
  field?: Field
  include?: TermsInclude
  max_doc_count?: long
  missing?: Missing
  precision?: double
  value_type?: string
}

export class ReverseNestedAggregation extends BucketAggregationBase {
  path?: Field
}

export class SamplerAggregation extends BucketAggregationBase {
  shard_size?: integer
}

export class ChiSquareHeuristic {
  background_is_superset: boolean
  include_negatives: boolean
}

export class GoogleNormalizedDistanceHeuristic {
  background_is_superset?: boolean
}

export class MutualInformationHeuristic {
  background_is_superset?: boolean
  include_negatives?: boolean
}

export class PercentageScoreHeuristic {}

export class ScriptedHeuristic {
  script: Script
}

export class SignificantTermsAggregation extends BucketAggregationBase {
  background_filter?: QueryContainer
  chi_square?: ChiSquareHeuristic
  exclude?: TermsExclude
  execution_hint?: TermsAggregationExecutionHint
  field?: Field
  gnd?: GoogleNormalizedDistanceHeuristic
  include?: TermsInclude
  jlh?: EmptyObject
  min_doc_count?: long
  mutual_information?: MutualInformationHeuristic
  percentage?: PercentageScoreHeuristic
  script_heuristic?: ScriptedHeuristic
  shard_min_doc_count?: long
  shard_size?: integer
  size?: integer
}

export class SignificantTextAggregation extends BucketAggregationBase {
  background_filter?: QueryContainer
  chi_square?: ChiSquareHeuristic
  exclude?: TermsExclude
  execution_hint?: TermsAggregationExecutionHint
  field?: Field
  filter_duplicate_text?: boolean
  gnd?: GoogleNormalizedDistanceHeuristic
  include?: string | string[]
  jlh?: EmptyObject
  min_doc_count?: long
  mutual_information?: MutualInformationHeuristic
  percentage?: PercentageScoreHeuristic
  script_heuristic?: ScriptedHeuristic
  shard_min_doc_count?: long
  shard_size?: integer
  size?: integer
  source_fields?: Fields
}

export class TermsAggregation extends BucketAggregationBase {
  collect_mode?: TermsAggregationCollectMode
  exclude?: TermsExclude
  execution_hint?: TermsAggregationExecutionHint
  field?: Field
  include?: TermsInclude
  min_doc_count?: integer
  missing?: Missing
  missing_order?: MissingOrder
  missing_bucket?: boolean
  value_type?: string
  order?: AggregateOrder
  script?: Script
  shard_size?: integer
  shard_min_doc_count?: integer
  show_term_doc_count_error?: boolean
  sum_other_doc_count?: integer
  size?: integer
  format?: string
}

// Note: ES is very lazy when parsing this data type: it accepts any number of properties in the objects below,
// but will only keep the *last* property in JSON document order and ignore others.
// This means that something like `"order": { "downloads": "desc", "_key": "asc" }` will actually be interpreted
// as `"order": [ { "_key": "asc" } ]`
export type AggregateOrder =
  | SingleKeyDictionary<Field, SortOrder>
  | SingleKeyDictionary<Field, SortOrder>[]

export enum TermsAggregationCollectMode {
  depth_first = 0,
  breadth_first = 1
}

export enum TermsAggregationExecutionHint {
  map = 0,
  global_ordinals = 1,
  global_ordinals_hash = 2,
  global_ordinals_low_cardinality = 3
}

/** @codegen_names regexp, terms, partition */
export type TermsInclude = string | string[] | TermsPartition

/** @codegen_names regexp, terms */
export type TermsExclude = string | string[]

export class TermsPartition {
  num_partitions: long
  partition: long
}

export class VariableWidthHistogramAggregation {
  field?: Field
  buckets?: integer
  shard_size?: integer
  initial_buffer?: integer
}

/**
 * A multi-bucket aggregation that groups semi-structured text into buckets. Each text
 * field is re-analyzed using a custom analyzer. The resulting tokens are then categorized
 * creating buckets of similarly formatted text values. This aggregation works best with machine
 * generated text like system logs. Only the first 100 analyzed tokens are used to categorize the text.
 */
export class CategorizeTextAggregation extends Aggregation {
  /**
   * The semi-structured text field to categorize.
   */
  field: Field
  /**
   * The maximum number of unique tokens at any position up to max_matched_tokens. Must be larger than 1.
   * Smaller values use less memory and create fewer categories. Larger values will use more memory and
   * create narrower categories. Max allowed value is 100.
   * @server_default 50
   */
  max_unique_tokens?: integer
  /**
   * The maximum number of token positions to match on before attempting to merge categories. Larger
   * values will use more memory and create narrower categories. Max allowed value is 100.
   * @server_default 5
   */
  max_matched_tokens?: integer
  /**
   * The minimum percentage of tokens that must match for text to be added to the category bucket. Must
   * be between 1 and 100. The larger the value the narrower the categories. Larger values will increase memory
   * usage and create narrower categories.
   * @server_default 50
   */
  similarity_threshold?: integer
  /**
   * This property expects an array of regular expressions. The expressions are used to filter out matching
   * sequences from the categorization field values. You can use this functionality to fine tune the categorization
   * by excluding sequences from consideration when categories are defined. For example, you can exclude SQL
   * statements that appear in your log files. This property cannot be used at the same time as categorization_analyzer.
   * If you only want to define simple regular expression filters that are applied prior to tokenization, setting
   * this property is the easiest method. If you also want to customize the tokenizer or post-tokenization filtering,
   * use the categorization_analyzer property instead and include the filters as pattern_replace character filters.
   */
  categorization_filters?: string[]
  /**
   * The categorization analyzer specifies how the text is analyzed and tokenized before being categorized.
   * The syntax is very similar to that used to define the analyzer in the [Analyze endpoint](https://www.elastic.co/guide/en/elasticsearch/reference/8.0/indices-analyze.html). This property
   * cannot be used at the same time as categorization_filters.
   */
  categorization_analyzer?: CategorizeTextAnalyzer
  /**
   * The number of categorization buckets to return from each shard before merging all the results.
   */
  shard_size?: integer
  /**
   * The number of buckets to return.
   * @server_default 10
   */
  size?: integer
  /**
   * The minimum number of documents for a bucket to be returned to the results.
   */
  min_doc_count?: integer
  /**
   * The minimum number of documents for a bucket to be returned from the shard before merging.
   */
  shard_min_doc_count?: integer
}

/**
 * @codegen_names builtin, custom
 */
export type CategorizeTextAnalyzer = string | CustomCategorizeTextAnalyzer

export class CustomCategorizeTextAnalyzer {
  char_filter?: string[]
  tokenizer?: string
  filter?: string[]
}

export class IpPrefixAggregation extends BucketAggregationBase {
  /**
   * The document IP address field to aggregation on. The field mapping type must be `ip`
   */
  field: Field
  /**
   * Length of the network prefix. For IPv4 addresses the accepted range is [0, 32].
   * For IPv6 addresses the accepted range is [0, 128].
   */
  prefix_length: integer
  /**
   * Defines whether the prefix applies to IPv6 addresses.
   * @server_default false
   */
  is_ipv6?: boolean
  /**
   * Defines whether the prefix length is appended to IP address keys in the response.
   * @server_default false
   */
  append_prefix_length?: boolean
  /**
   * Defines whether buckets are returned as a hash rather than an array in the response.
   */
  keyed?: boolean
  /**
   * Minimum number of documents for buckets to be included in the response.
   * @server_default 1
   */
  min_doc_count?: long
}

export class FrequentItemSetsField {
  field: Field
  exclude?: string | string[]
  include?: string | string[]
}

export class FrequentItemSetsAggregation {
  /**
   * Fields to analyze
   */
  fields: FrequentItemSetsField[]
  /**
   * The minimum size of one item set.
   * @server_default 1
   */
  minimum_set_size?: integer
  /**
   * The minimum support of one item set.
   * @server_default 0.1
   */
  minimum_support?: double
  /**
   * The number of top item sets to return.
   * @server_default 10
   */
  size?: integer
  /**
   * Query that filters documents from analysis.
   */
  filter?: QueryContainer
}
