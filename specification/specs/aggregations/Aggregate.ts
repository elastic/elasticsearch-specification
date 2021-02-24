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

//@class_serializer("AggregateFormatter")

type Bucket =
  | CompositeBucket
  | DateHistogramBucket
  | FiltersBucketItem
  | IpRangeBucket
  | RangeBucket
  | RareTermsBucket<UserDefinedValue>
  | SignificantTermsBucket<UserDefinedValue>
  | KeyedBucket<UserDefinedValue>

class CompositeBucket
  implements AdditionalProperties<AggregateName, Aggregate> {}
class DateHistogramBucket
  implements AdditionalProperties<AggregateName, Aggregate> {}
class FiltersBucketItem
  implements AdditionalProperties<AggregateName, Aggregate> {
  doc_count: long
}
class IpRangeBucket implements AdditionalProperties<AggregateName, Aggregate> {}
class RangeBucket implements AdditionalProperties<AggregateName, Aggregate> {}
class RareTermsBucket<TKey>
  implements AdditionalProperties<AggregateName, Aggregate> {}
class SignificantTermsBucket<TKey>
  implements AdditionalProperties<AggregateName, Aggregate> {}

class KeyedBucket<TKey>
  implements AdditionalProperties<AggregateName, Aggregate> {
  doc_count: long
  key: TKey
  key_as_string: string
}

type Aggregate =
  | SingleBucketAggregate
  | AutoDateHistogramAggregate
  | FiltersAggregate
  | SignificantTermsAggregate<any>
  | TermsAggregate<any>
  | BucketAggregate
  | CompositeBucketAggregate
  | MultiBucketAggregate<any>
  | MatrixStatsAggregate
  | KeyedValueAggregate
  | MetricAggregate

type MetricAggregate =
  | ValueAggregate
  | BoxPlotAggregate
  | GeoBoundsAggregate
  | GeoCentroidAggregate
  | GeoLineAggregate
  | PercentilesAggregate
  | ScriptedMetricAggregate
  | StatsAggregate
  | StringStatsAggregate
  | TopHitsAggregate
  | TopMetricsAggregate
  | ExtendedStatsAggregate
  | TDigestPercentilesAggregate
  | HdrPercentilesAggregate

class AggregateBase {
  meta?: Dictionary<string, UserDefinedValue>
}

class MultiBucketAggregate<TBucket> extends AggregateBase {
  buckets: TBucket[]
}

class ValueAggregate extends AggregateBase {
  value: double
  value_as_string?: string
}

class SingleBucketAggregate
  extends AggregateBase
  implements AdditionalProperties<AggregateName, Aggregate> {
  doc_count: double
}
class KeyedValueAggregate extends ValueAggregate {
  keys: string[]
}

class AutoDateHistogramAggregate extends MultiBucketAggregate<
  KeyedBucket<long>
> {
  interval: DateMathTime
}

class FiltersAggregate extends AggregateBase {
  buckets: FiltersBucketItem[] | Dictionary<string, FiltersBucketItem>
}

class SignificantTermsAggregate<TKey> extends MultiBucketAggregate<TKey> {
  bg_count: long
  doc_count: long
}

class TermsAggregate<TKey> extends MultiBucketAggregate<TKey> {
  doc_count_error_upper_bound: long
  sum_other_doc_count: long
}

// TODO this is an intermediate type in NEST
class BucketAggregate extends AggregateBase {
  after_key: Dictionary<string, UserDefinedValue>
  bg_count: long
  doc_count: long
  doc_count_error_upper_bound: long
  sum_other_doc_count: long
  interval: DateMathTime
  items: Bucket
}

class CompositeBucketAggregate extends MultiBucketAggregate<
  Dictionary<string, UserDefinedValue>
> {
  after_key: Dictionary<string, UserDefinedValue>
}

class MatrixStatsAggregate extends AggregateBase {
  correlation: Dictionary<string, double>
  covariance: Dictionary<string, double>
  count: integer
  kurtosis: double
  mean: double
  skewness: double
  variance: double
  name: string
}

class BoxPlotAggregate extends AggregateBase {
  min: double
  max: double
  q1: double
  q2: double
  q3: double
}

class StatsAggregate extends AggregateBase {
  count: double
  sum: double

  // not returned if count is 0
  avg?: double
  max?: double
  min?: double
}

// extended stats can return a completely empty object hence all optional "std_deviation_bounds": {},
class StandardDeviationBounds {
  lower?: double
  upper?: double
  lower_population?: double
  upper_population?: double
  lower_sampling?: double
  upper_sampling?: double
}

class ExtendedStatsAggregate extends StatsAggregate {
  // if count is 0 this is an empty object
  std_deviation_bounds: StandardDeviationBounds

  sum_of_squares?: double
  variance?: double
  variance_population?: double
  variance_sampling?: double
  std_deviation?: double
  std_deviation_population?: double
  std_deviation_sampling?: double
}
class GeoBounds {
  bottom_right: LatLon
  top_left: LatLon
}
class GeoBoundsAggregate extends AggregateBase {
  bounds: GeoBounds
}

class GeoCentroidAggregate extends AggregateBase {
  count: long
  location: GeoLocation
}
class GeoLineAggregate extends AggregateBase {
  type: string
  geometry: LineStringGeoShape
  properties: GeoLineProperties
}
class GeoLineProperties {
  complete: boolean
  sort_values: double[]
}
class LineStringGeoShape {
  coordinates: GeoCoordinate[]
}

class PercentileItem {
  percentile: double
  value: double
}

class PercentilesAggregate extends AggregateBase {
  items: PercentileItem[]
}
class TDigestPercentilesAggregate extends AggregateBase {
  values: Dictionary<string, double>
}
class HdrPercentileItem {
  key: double
  value: double
}
class HdrPercentilesAggregate extends AggregateBase {
  values: HdrPercentileItem[]
}

class ScriptedMetricAggregate extends AggregateBase {
  value: UserDefinedValue
}

class StringStatsAggregate extends AggregateBase {
  count: long
  min_length: integer
  max_length: integer
  avg_length: double
  entropy: double
  distribution?: Dictionary<string, double>
}

//hard
class TopHitsAggregate extends AggregateBase {
  hits: HitsMetadata<Dictionary<string, UserDefinedValue>>
}

class TopMetricsAggregate extends AggregateBase {
  top: TopMetrics[]
}

class TopMetrics {
  sort: Array<long | double | string>
  metrics: Dictionary<string, long | double | string>
}
