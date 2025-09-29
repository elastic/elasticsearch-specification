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

import { ValueType } from '@_types/aggregations/metric'
import {
  EmptyObject,
  Field,
  Fields,
  FieldValue,
  RelationName
} from '@_types/common'
import {
  DistanceUnit,
  GeoBounds,
  GeoDistanceType,
  GeoHashPrecision,
  GeoLocation,
  GeoTilePrecision
} from '@_types/Geo'
import { double, integer, long } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Script } from '@_types/Scripting'
import { SortOrder } from '@_types/sort'
import {
  DateMath,
  DateTime,
  Duration,
  DurationLarge,
  TimeZone
} from '@_types/Time'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
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
  /**
   * Filters used to create buckets.
   * At least one filter is required.
   */
  filters?: Dictionary<string, QueryContainer>
  /**
   * Separator used to concatenate filter names. Defaults to &.
   */
  separator?: string
}

/**
 * @ext_doc_id search-aggregations-bucket-autodatehistogram-aggregation
 */
export class AutoDateHistogramAggregation extends BucketAggregationBase {
  /**
   * The target number of buckets.
   * @server_default 10
   */
  buckets?: integer
  /**
   * The field on which to run the aggregation.
   */
  field?: Field
  /**
   * The date format used to format `key_as_string` in the response.
   * If no `format` is specified, the first date format specified in the field mapping is used.
   */
  format?: string
  /**
   * The minimum rounding interval.
   * This can make the collection process more efficient, as the aggregation will not attempt to round at any interval lower than `minimum_interval`.
   */
  minimum_interval?: MinimumInterval
  /**
   * The value to apply to documents that do not have a value.
   * By default, documents without a value are ignored.
   */
  missing?: DateTime
  /**
   * Time zone specified as a ISO 8601 UTC offset.
   */
  offset?: string
  params?: Dictionary<string, UserDefinedValue>
  script?: Script
  /**
   * Time zone ID.
   */
  time_zone?: TimeZone
}

export enum MinimumInterval {
  second,
  minute,
  hour,
  day,
  month,
  year
}

export class ChildrenAggregation extends BucketAggregationBase {
  /**
   * The child type that should be selected.
   */
  type?: RelationName
}

export type CompositeAggregateKey = Dictionary<Field, FieldValue>

/**
 * @ext_doc_id search-aggregations-bucket-composite-aggregation
 */
export class CompositeAggregation extends BucketAggregationBase {
  // Must be consistent with CompositeAggregate.after_key
  /**
   * When paginating, use the `after_key` value returned in the previous response to retrieve the next page.
   */
  after?: CompositeAggregateKey
  /**
   * The number of composite buckets that should be returned.
   * @server_default 10
   */
  size?: integer
  /**
   * The value sources used to build composite buckets.
   * Keys are returned in the order of the `sources` definition.
   */
  sources?: Array<Dictionary<string, CompositeAggregationSource>>
}

export class CompositeAggregationSource {
  /**
   * A terms aggregation.
   */
  terms?: CompositeTermsAggregation
  /**
   * A histogram aggregation.
   */
  histogram?: CompositeHistogramAggregation
  /**
   * A date histogram aggregation.
   */
  date_histogram?: CompositeDateHistogramAggregation
  /**
   * A geotile grid aggregation.
   */
  geotile_grid?: CompositeGeoTileGridAggregation
}

export class CompositeAggregationBase {
  /** Either `field` or `script` must be present */
  field?: Field
  missing_bucket?: boolean
  missing_order?: MissingOrder
  /** Either `field` or `script` must be present */
  script?: Script
  value_type?: ValueType
  order?: SortOrder
}

export class CompositeTermsAggregation extends CompositeAggregationBase {}

export class CompositeHistogramAggregation extends CompositeAggregationBase {
  interval: double
}

export class CompositeDateHistogramAggregation extends CompositeAggregationBase {
  format?: string
  /** Either `calendar_interval` or `fixed_interval` must be present */
  calendar_interval?: DurationLarge
  /** Either `calendar_interval` or `fixed_interval` must be present */
  fixed_interval?: DurationLarge
  offset?: Duration
  time_zone?: TimeZone
}

export class CompositeGeoTileGridAggregation extends CompositeAggregationBase {
  precision?: integer
  bounds?: GeoBounds
}

export class DateHistogramAggregation extends BucketAggregationBase {
  /**
   * Calendar-aware interval.
   * Can be specified using the unit name, such as `month`, or as a single unit quantity, such as `1M`.
   */
  calendar_interval?: CalendarInterval
  /**
   * Enables extending the bounds of the histogram beyond the data itself.
   */
  extended_bounds?: ExtendedBounds<FieldDateMath>
  /**
   * Limits the histogram to specified bounds.
   */
  hard_bounds?: ExtendedBounds<FieldDateMath>
  /**
   * The date field whose values are use to build a histogram.
   */
  field?: Field
  /**
   * Fixed intervals: a fixed number of SI units and never deviate, regardless of where they fall on the calendar.
   */
  fixed_interval?: Duration
  /**
   * The date format used to format `key_as_string` in the response.
   * If no `format` is specified, the first date format specified in the field mapping is used.
   */
  format?: string
  /** @deprecated 7.2.0 use `fixed_interval` or `calendar_interval` */
  interval?: Duration
  /**
   * Only returns buckets that have `min_doc_count` number of documents.
   * By default, all buckets between the first bucket that matches documents and the last one are returned.
   */
  min_doc_count?: integer
  /**
   * The value to apply to documents that do not have a value.
   * By default, documents without a value are ignored.
   */
  missing?: DateTime
  /**
   * Changes the start value of each bucket by the specified positive (`+`) or negative offset (`-`) duration.
   */
  offset?: Duration
  /**
   * The sort order of the returned buckets.
   */
  order?: AggregateOrder
  params?: Dictionary<string, UserDefinedValue>
  script?: Script
  /**
   * Time zone used for bucketing and rounding.
   * Defaults to Coordinated Universal Time (UTC).
   */
  time_zone?: TimeZone
  /**
   * Set to `true` to associate a unique string key with each bucket and return the ranges as a hash rather than an array.
   */
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
  /** @aliases 1y */
  year
}

export class DateRangeAggregation extends BucketAggregationBase {
  /**
   * The date field whose values are use to build ranges.
   */
  field?: Field
  /**
   * The date format used to format `from` and `to` in the response.
   */
  format?: string
  /**
   * The value to apply to documents that do not have a value.
   * By default, documents without a value are ignored.
   */
  missing?: Missing
  /**
   * Array of date ranges.
   */
  ranges?: DateRangeExpression[]
  /**
   * Time zone used to convert dates from another time zone to UTC.
   */
  time_zone?: TimeZone
  /**
   * Set to `true` to associate a unique string key with each bucket and returns the ranges as a hash rather than an array.
   */
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
  /**
   * Start of the range (inclusive).
   */
  from?: FieldDateMath
  /**
   * Custom key to return the range with.
   */
  key?: string
  /**
   * End of the range (exclusive).
   */
  to?: FieldDateMath
}

/**
 * @ext_doc_id search-aggregations-bucket-diversified-sampler-aggregation
 */
export class DiversifiedSamplerAggregation extends BucketAggregationBase {
  /**
   * The type of value used for de-duplication.
   * @server_default global_ordinals
   */
  execution_hint?: SamplerAggregationExecutionHint
  /**
   * Limits how many documents are permitted per choice of de-duplicating value.
   * @server_default 1
   */
  max_docs_per_value?: integer
  script?: Script
  /**
   * Limits how many top-scoring documents are collected in the sample processed on each shard.
   * @server_default 100
   */
  shard_size?: integer
  /**
   * The field used to provide values used for de-duplication.
   */
  field?: Field
}

export enum SamplerAggregationExecutionHint {
  /**
   * Hold field values directly.
   */
  map,
  /**
   * Hold ordinals of the field as determined by the Lucene index.
   */
  global_ordinals,
  /**
   * Hold hashes of the field values - with potential for hash collisions.
   */
  bytes_hash
}

export class FiltersAggregation extends BucketAggregationBase {
  /**
   * Collection of queries from which to build buckets.
   */
  filters?: Buckets<QueryContainer>
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

export class GeoDistanceAggregation extends BucketAggregationBase {
  /**
   * The distance calculation type.
   * @server_default arc
   */
  distance_type?: GeoDistanceType
  /**
   * A field of type `geo_point` used to evaluate the distance.
   */
  field?: Field
  /**
   * The origin  used to evaluate the distance.
   */
  origin?: GeoLocation
  /**
   * An array of ranges used to bucket documents.
   */
  ranges?: AggregationRange[]
  /**
   * The distance unit.
   * @server_default m
   */
  unit?: DistanceUnit
}

/**
 * @ext_doc_id search-aggregations-bucket-geohashgrid-aggregation
 */
export class GeoHashGridAggregation extends BucketAggregationBase {
  /**
   * The bounding box to filter the points in each bucket.
   */
  bounds?: GeoBounds
  /**
   * Field containing indexed `geo_point` or `geo_shape` values.
   * If the field contains an array, `geohash_grid` aggregates all array values.
   */
  field?: Field
  /**
   * The string length of the geohashes used to define cells/buckets in the results.
   * @server_default 5
   */
  precision?: GeoHashPrecision
  /**
   * Allows for more accurate counting of the top cells returned in the final result the aggregation.
   * Defaults to returning `max(10,(size x number-of-shards))` buckets from each shard.
   */
  shard_size?: integer
  /**
   * The maximum number of geohash buckets to return.
   * @server_default 10000
   */
  size?: integer
}

export class GeoTileGridAggregation extends BucketAggregationBase {
  /**
   * Field containing indexed `geo_point` or `geo_shape` values.
   * If the field contains an array, `geotile_grid` aggregates all array values.
   */
  field?: Field
  /**
   * Integer zoom of the key used to define cells/buckets in the results.
   * Values outside of the range [0,29] will be rejected.
   * @server_default 7
   */
  precision?: GeoTilePrecision
  /**
   * Allows for more accurate counting of the top cells returned in the final result the aggregation.
   * Defaults to returning `max(10,(size x number-of-shards))` buckets from each shard.
   */
  shard_size?: integer
  /**
   * The maximum number of buckets to return.
   * @server_default 10000
   */
  size?: integer
  /**
   * A bounding box to filter the geo-points or geo-shapes in each bucket.
   */
  bounds?: GeoBounds
}

export class GeohexGridAggregation extends BucketAggregationBase {
  /**
   * Field containing indexed `geo_point` or `geo_shape` values.
   * If the field contains an array, `geohex_grid` aggregates all array values.
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
  /**
   * Maximum value for the bound.
   */
  max?: T
  /**
   * Minimum value for the bound.
   */
  min?: T
}

export class HistogramAggregation extends BucketAggregationBase {
  /**
   * Enables extending the bounds of the histogram beyond the data itself.
   */
  extended_bounds?: ExtendedBounds<double>
  /**
   * Limits the range of buckets in the histogram.
   * It is particularly useful in the case of open data ranges that can result in a very large number of buckets.
   */
  hard_bounds?: ExtendedBounds<double>
  /**
   * The name of the field to aggregate on.
   */
  field?: Field
  /**
   * The interval for the buckets.
   * Must be a positive decimal.
   */
  interval?: double
  /**
   * Only returns buckets that have `min_doc_count` number of documents.
   * By default, the response will fill gaps in the histogram with empty buckets.
   */
  min_doc_count?: integer
  /**
   * The value to apply to documents that do not have a value.
   * By default, documents without a value are ignored.
   */
  missing?: double
  /**
   * By default, the bucket keys start with 0 and then continue in even spaced steps of `interval`.
   * The bucket boundaries can be shifted by using the `offset` option.
   */
  offset?: double
  /**
   * The sort order of the returned buckets.
   * By default, the returned buckets are sorted by their key ascending.
   */
  order?: AggregateOrder
  script?: Script
  format?: string
  /**
   * If `true`, returns buckets as a hash instead of an array, keyed by the bucket keys.
   * @server_default false
   */
  keyed?: boolean
}

export class IpRangeAggregation extends BucketAggregationBase {
  /**
   * The date field whose values are used to build ranges.
   */
  field?: Field
  /**
   * Array of IP ranges.
   */
  ranges?: IpRangeAggregationRange[]
}

export class IpRangeAggregationRange {
  /**
   * Start of the range.
   */
  from?: string | null
  /**
   * IP range defined as a CIDR mask.
   */
  mask?: string
  /**
   * End of the range.
   */
  to?: string | null
}

export class MissingAggregation extends BucketAggregationBase {
  /**
   * The name of the field.
   */
  field?: Field
  missing?: Missing
}

export class MultiTermsAggregation extends BucketAggregationBase {
  /**
   * Specifies the strategy for data collection.
   * @server_default breadth_first
   */
  collect_mode?: TermsAggregationCollectMode
  /**
   * Specifies the sort order of the buckets.
   * Defaults to sorting by descending document count.
   */
  order?: AggregateOrder
  /**
   * The minimum number of documents in a bucket for it to be returned.
   * @server_default 1
   */
  min_doc_count?: long
  /**
   * The minimum number of documents in a bucket on each shard for it to be returned.
   * @server_default 1
   */
  shard_min_doc_count?: long
  /**
   * The number of candidate terms produced by each shard.
   * By default, `shard_size` will be automatically estimated based on the number of shards and the `size` parameter.
   */
  shard_size?: integer
  /**
   * Calculates the doc count error on per term basis.
   * @server_default false
   */
  show_term_doc_count_error?: boolean
  /**
   * The number of term buckets should be returned out of the overall terms list.
   * @server_default 10
   */
  size?: integer
  /**
   * The field from which to generate sets of terms.
   */
  terms: MultiTermLookup[]
}

export class MultiTermLookup {
  /**
   * A fields from which to retrieve terms.
   */
  field: Field
  /**
   * The value to apply to documents that do not have a value.
   * By default, documents without a value are ignored.
   */
  missing?: Missing
}

export class NestedAggregation extends BucketAggregationBase {
  /**
   * The path to the field of type `nested`.
   */
  path?: Field
}

export class ParentAggregation extends BucketAggregationBase {
  /**
   * The child type that should be selected.
   */
  type?: RelationName
}

export class RangeAggregation extends BucketAggregationBase {
  /**
   * The date field whose values are use to build ranges.
   */
  field?: Field
  /**
   * The value to apply to documents that do not have a value.
   * By default, documents without a value are ignored.
   */
  missing?: integer
  /**
   * An array of ranges used to bucket documents.
   */
  ranges?: AggregationRange[]
  script?: Script
  /**
   * Set to `true` to associate a unique string key with each bucket and return the ranges as a hash rather than an array.
   */
  keyed?: boolean
  format?: string
}

export class AggregationRange {
  /**
   * Start of the range (inclusive).
   */
  from?: double | null
  /**
   * Custom key to return the range with.
   */
  key?: string
  /**
   * End of the range (exclusive).
   */
  to?: double | null
}

/**
 * @ext_doc_id search-aggregations-bucket-rare-terms-aggregation
 */
export class RareTermsAggregation extends BucketAggregationBase {
  /**
   * Terms that should be excluded from the aggregation.
   */
  exclude?: TermsExclude
  /**
   * The field from which to return rare terms.
   */
  field?: Field
  /**
   * Terms that should be included in the aggregation.
   */
  include?: TermsInclude
  /**
   * The maximum number of documents a term should appear in.
   * @server_default 1
   */
  max_doc_count?: long
  /**
   * The value to apply to documents that do not have a value.
   * By default, documents without a value are ignored.
   */
  missing?: Missing
  /**
   * The precision of the internal CuckooFilters.
   * Smaller precision leads to better approximation, but higher memory usage.
   * @server_default 0.001
   */
  precision?: double
  value_type?: string
}

export class ReverseNestedAggregation extends BucketAggregationBase {
  /**
   * Defines the nested object field that should be joined back to.
   * The default is empty, which means that it joins back to the root/main document level.
   */
  path?: Field
}

/**
 * @ext_doc_id search-aggregations-random-sampler-aggregation
 */
export class RandomSamplerAggregation extends BucketAggregationBase {
  /**
   * The probability that a document will be included in the aggregated data.
   * Must be greater than 0, less than 0.5, or exactly 1.
   * The lower the probability, the fewer documents are matched.
   */
  probability: double
  /**
   * The seed to generate the random sampling of documents.
   * When a seed is provided, the random subset of documents is the same between calls.
   */
  seed?: integer
  /**
   * When combined with seed, setting shard_seed ensures 100% consistent sampling over shards where data is exactly the same.
   * @availability stack since=8.14.0
   */
  shard_seed?: integer
}

/**
 * @ext_doc_id search-aggregations-bucket-sampler-aggregation
 */
export class SamplerAggregation extends BucketAggregationBase {
  /**
   * Limits how many top-scoring documents are collected in the sample processed on each shard.
   * @server_default 100
   */
  shard_size?: integer
}

export class ChiSquareHeuristic {
  /**
   * Set to `false` if you defined a custom background filter that represents a different set of documents that you want to compare to.
   */
  background_is_superset: boolean
  /**
   * Set to `false` to filter out the terms that appear less often in the subset than in documents outside the subset.
   */
  include_negatives: boolean
}

export class GoogleNormalizedDistanceHeuristic {
  /**
   * Set to `false` if you defined a custom background filter that represents a different set of documents that you want to compare to.
   */
  background_is_superset?: boolean
}

export class MutualInformationHeuristic {
  /**
   * Set to `false` if you defined a custom background filter that represents a different set of documents that you want to compare to.
   */
  background_is_superset?: boolean
  /**
   * Set to `false` to filter out the terms that appear less often in the subset than in documents outside the subset.
   */
  include_negatives?: boolean
}

export class PercentageScoreHeuristic {}

export class ScriptedHeuristic {
  script: Script
}

export class PValueHeuristic {
  /*
   * Set to false to indicate that the background set does
   * not contain the counts of the foreground set as they are filtered out.
   * @server_default true
   */
  background_is_superset?: boolean
  /**
   * Should the results be normalized when above the given value.
   * Allows for consistent significance results at various scales.
   * Note: `0` is a special value which means no normalization
   * @server_default 0
   */
  normalize_above?: long
}

/**
 * @ext_doc_id search-aggregations-bucket-significanttext-aggregation
 */
export class SignificantTermsAggregation extends BucketAggregationBase {
  /**
   * A background filter that can be used to focus in on significant terms within a narrower context, instead of the entire index.
   */
  background_filter?: QueryContainer
  /**
   * Use Chi square, as described in "Information Retrieval", Manning et al., Chapter 13.5.2, as the significance score.
   */
  chi_square?: ChiSquareHeuristic
  /**
   * Terms to exclude.
   */
  exclude?: TermsExclude
  /**
   * Mechanism by which the aggregation should be executed: using field values directly or using global ordinals.
   */
  execution_hint?: TermsAggregationExecutionHint
  /**
   * The field from which to return significant terms.
   */
  field?: Field
  /**
   * Use Google normalized distance as described in "The Google Similarity Distance", Cilibrasi and Vitanyi, 2007, as the significance score.
   */
  gnd?: GoogleNormalizedDistanceHeuristic
  /**
   * Terms to include.
   */
  include?: TermsInclude
  /**
   * Use JLH score as the significance score.
   */
  jlh?: EmptyObject
  /**
   * Only return terms that are found in more than `min_doc_count` hits.
   * @server_default 3
   */
  min_doc_count?: long
  /**
   * Use mutual information as described in "Information Retrieval", Manning et al., Chapter 13.5.1, as the significance score.
   */
  mutual_information?: MutualInformationHeuristic
  /**
   * A simple calculation of the number of documents in the foreground sample with a term divided by the number of documents in the background with the term.
   */
  percentage?: PercentageScoreHeuristic
  /**
   * Customized score, implemented via a script.
   */
  script_heuristic?: ScriptedHeuristic
  /**
   * Significant terms heuristic that calculates the p-value between the term existing in foreground and background sets.
   *
   * The p-value is the probability of obtaining test results at least as extreme as
   * the results actually observed, under the assumption that the null hypothesis is
   * correct. The p-value is calculated assuming that the foreground set and the
   * background set are independent https://en.wikipedia.org/wiki/Bernoulli_trial, with the null
   * hypothesis that the probabilities are the same.
   */
  p_value?: PValueHeuristic
  /**
   * Regulates the certainty a shard has if the term should actually be added to the candidate list or not with respect to the `min_doc_count`.
   * Terms will only be considered if their local shard frequency within the set is higher than the `shard_min_doc_count`.
   */
  shard_min_doc_count?: long
  /**
   * Can be used to control the volumes of candidate terms produced by each shard.
   * By default, `shard_size` will be automatically estimated based on the number of shards and the `size` parameter.
   */
  shard_size?: integer
  /**
   * The number of buckets returned out of the overall terms list.
   */
  size?: integer
}

/**
 * @ext_doc_id search-aggregations-bucket-significanttext-aggregation
 */
export class SignificantTextAggregation extends BucketAggregationBase {
  /**
   * A background filter that can be used to focus in on significant terms within a narrower context, instead of the entire index.
   */
  background_filter?: QueryContainer
  /**
   * Use Chi square, as described in "Information Retrieval", Manning et al., Chapter 13.5.2, as the significance score.
   */
  chi_square?: ChiSquareHeuristic
  /**
   * Values to exclude.
   */
  exclude?: TermsExclude
  /**
   * Determines whether the aggregation will use field values directly or global ordinals.
   */
  execution_hint?: TermsAggregationExecutionHint
  /**
   * The field from which to return significant text.
   */
  field?: Field
  /**
   * Whether to out duplicate text to deal with noisy data.
   */
  filter_duplicate_text?: boolean
  /**
   * Use Google normalized distance as described in "The Google Similarity Distance", Cilibrasi and Vitanyi, 2007, as the significance score.
   */
  gnd?: GoogleNormalizedDistanceHeuristic
  /**
   * Values to include.
   */
  include?: TermsInclude
  /**
   * Use JLH score as the significance score.
   */
  jlh?: EmptyObject
  /**
   * Only return values that are found in more than `min_doc_count` hits.
   * @server_default 3
   */
  min_doc_count?: long
  /**
   * Use mutual information as described in "Information Retrieval", Manning et al., Chapter 13.5.1, as the significance score.
   */
  mutual_information?: MutualInformationHeuristic
  /**
   * A simple calculation of the number of documents in the foreground sample with a term divided by the number of documents in the background with the term.
   */
  percentage?: PercentageScoreHeuristic
  /**
   * Customized score, implemented via a script.
   */
  script_heuristic?: ScriptedHeuristic
  /**
   * Regulates the certainty a shard has if the values should actually be added to the candidate list or not with respect to the min_doc_count.
   * Values will only be considered if their local shard frequency within the set is higher than the `shard_min_doc_count`.
   */
  shard_min_doc_count?: long
  /**
   * The number of candidate terms produced by each shard.
   * By default, `shard_size` will be automatically estimated based on the number of shards and the `size` parameter.
   */
  shard_size?: integer
  /**
   * The number of buckets returned out of the overall terms list.
   */
  size?: integer
  /**
   * Overrides the JSON `_source` fields from which text will be analyzed.
   */
  source_fields?: Fields
}

/**
 * @ext_doc_id search-aggregations-bucket-terms-aggregation
 */
export class TermsAggregation extends BucketAggregationBase {
  /**
   * Determines how child aggregations should be calculated: breadth-first or depth-first.
   */
  collect_mode?: TermsAggregationCollectMode
  /**
   * Values to exclude.
   * Accepts regular expressions and partitions.
   */
  exclude?: TermsExclude
  /**
   * Determines whether the aggregation will use field values directly or global ordinals.
   */
  execution_hint?: TermsAggregationExecutionHint
  /**
   * The field from which to return terms.
   */
  field?: Field
  /**
   * Values to include.
   * Accepts regular expressions and partitions.
   */
  include?: TermsInclude
  /**
   * Only return values that are found in more than `min_doc_count` hits.
   * @server_default 1
   */
  min_doc_count?: integer
  /**
   * The value to apply to documents that do not have a value.
   * By default, documents without a value are ignored.
   */
  missing?: Missing
  missing_order?: MissingOrder
  missing_bucket?: boolean
  /**
   * Coerced unmapped fields into the specified type.
   */
  value_type?: string
  /**
   * Specifies the sort order of the buckets.
   * Defaults to sorting by descending document count.
   */
  order?: AggregateOrder
  script?: Script
  /**
   * Regulates the certainty a shard has if the term should actually be added to the candidate list or not with respect to the `min_doc_count`.
   * Terms will only be considered if their local shard frequency within the set is higher than the `shard_min_doc_count`.
   */
  shard_min_doc_count?: long
  /**
   * The number of candidate terms produced by each shard.
   * By default, `shard_size` will be automatically estimated based on the number of shards and the `size` parameter.
   */
  shard_size?: integer
  /**
   * Set to `true` to return the `doc_count_error_upper_bound`, which is an upper bound to the error on the `doc_count` returned by each shard.
   */
  show_term_doc_count_error?: boolean
  /**
   * The number of buckets returned out of the overall terms list.
   * @server_default 10
   */
  size?: integer
  format?: string
}

/**
 * @ext_doc_id search-aggregations-bucket-time-series-aggregation
 */
export class TimeSeriesAggregation extends BucketAggregationBase {
  /**
   * The maximum number of results to return.
   * @server_default 10000
   */
  size?: integer
  /**
   * Set to `true` to associate a unique string key with each bucket and returns the ranges as a hash rather than an array.
   */
  keyed?: boolean
}

// Note: ES is very lazy when parsing this data type: it accepts any number of properties in the objects below,
// but will only keep the *last* property in JSON document order and ignore others.
// This means that something like `"order": { "downloads": "desc", "_key": "asc" }` will actually be interpreted
// as `"order": [ { "_key": "asc" } ]`
export type AggregateOrder =
  | SingleKeyDictionary<Field, SortOrder>
  | SingleKeyDictionary<Field, SortOrder>[]

export enum TermsAggregationCollectMode {
  /**
   * Expands all branches of the aggregation tree in one depth-first pass, before any pruning occurs.
   */
  depth_first,
  /**
   * Caches the set of documents that fall into the uppermost buckets for subsequent replay.
   */
  breadth_first
}

export enum TermsAggregationExecutionHint {
  map,
  global_ordinals,
  global_ordinals_hash,
  global_ordinals_low_cardinality
}

/** @codegen_names regexp, terms, partition */
export type TermsInclude = string | string[] | TermsPartition

/** @codegen_names regexp, terms */
export type TermsExclude = string | string[]

export class TermsPartition {
  /**
   * The number of partitions.
   */
  num_partitions: long
  /**
   * The partition number for this request.
   */
  partition: long
}

/**
 * @ext_doc_id search-aggregations-bucket-variablewidthhistogram-aggregation
 */
export class VariableWidthHistogramAggregation {
  /**
   * The name of the field.
   */
  field?: Field
  /**
   * The target number of buckets.
   * @server_default 10
   */
  buckets?: integer
  /**
   * The number of buckets that the coordinating node will request from each shard.
   * Defaults to `buckets * 50`.
   */
  shard_size?: integer
  /**
   * Specifies the number of individual documents that will be stored in memory on a shard before the initial bucketing algorithm is run.
   * Defaults to `min(10 * shard_size, 50000)`.
   */
  initial_buffer?: integer
  script?: Script
}

/**
 * A multi-bucket aggregation that groups semi-structured text into buckets. Each text
 * field is re-analyzed using a custom analyzer. The resulting tokens are then categorized
 * creating buckets of similarly formatted text values. This aggregation works best with machine
 * generated text like system logs. Only the first 100 analyzed tokens are used to categorize the text.
 * @ext_doc_id search-aggregations-bucket-categorize-text-aggregation
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
   * The syntax is very similar to that used to define the analyzer in the analyze API. This property
   * cannot be used at the same time as `categorization_filters`.
   * @ext_doc_id indices-analyze
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
   * The minimum number of documents in a bucket to be returned to the results.
   */
  min_doc_count?: integer
  /**
   * The minimum number of documents in a bucket to be returned from the shard before merging.
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
   * The IP address field to aggregation on. The field mapping type must be `ip`.
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
   * Minimum number of documents in a bucket for it to be included in the response.
   * @server_default 1
   */
  min_doc_count?: long
}

export class FrequentItemSetsField {
  field: Field
  /**
   * Values to exclude.
   * Can be regular expression strings or arrays of strings of exact terms.
   */
  exclude?: TermsExclude
  /**
   * Values to include.
   * Can be regular expression strings or arrays of strings of exact terms.
   */
  include?: TermsInclude
}

/**
 * @ext_doc_id search-aggregations-bucket-frequent-item-sets-aggregation
 */
export class FrequentItemSetsAggregation {
  /**
   * Fields to analyze.
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
