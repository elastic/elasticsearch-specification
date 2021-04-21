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

import { AggregateName } from '@_types/common'
import { LatLon } from '@_types/Geo'
import { double, integer, long } from '@_types/Numeric'
import { GeoCoordinate, GeoLocation } from '@_types/query_dsl/geo/GeoLocation'
import { DateMathTime } from '@_types/Time'
import { HitsMetadata } from '_global/search/hits/HitsMetadata'
import { AdditionalProperties } from '_spec_utils/behaviors'
import { Dictionary } from '_spec_utils/Dictionary'
import { UserDefinedValue } from '_spec_utils/UserDefinedValue'

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
export type Bucket =
  | CompositeBucket
  | DateHistogramBucket
  | FiltersBucketItem
  | IpRangeBucket
  | RangeBucket
  | RareTermsBucket<UserDefinedValue>
  | SignificantTermsBucket<UserDefinedValue>
  | KeyedBucket<UserDefinedValue>

export class CompositeBucket
  implements AdditionalProperties<AggregateName, Aggregate> {}
export class DateHistogramBucket
  implements AdditionalProperties<AggregateName, Aggregate> {}
export class FiltersBucketItem
  implements AdditionalProperties<AggregateName, Aggregate> {
  doc_count: long
}
export class IpRangeBucket
  implements AdditionalProperties<AggregateName, Aggregate> {}
export class RangeBucket
  implements AdditionalProperties<AggregateName, Aggregate> {}
export class RareTermsBucket<TKey>
  implements AdditionalProperties<AggregateName, Aggregate> {}
export class SignificantTermsBucket<TKey>
  implements AdditionalProperties<AggregateName, Aggregate> {}

export class KeyedBucket<TKey>
  implements AdditionalProperties<AggregateName, Aggregate> {
  doc_count: long
  key: TKey
  key_as_string: string
}

export type Aggregate =
  | SingleBucketAggregate
  | AutoDateHistogramAggregate
  | FiltersAggregate
  | SignificantTermsAggregate<UserDefinedValue>
  | TermsAggregate<UserDefinedValue>
  | BucketAggregate
  | CompositeBucketAggregate
  | MultiBucketAggregate<Bucket>
  | MatrixStatsAggregate
  | KeyedValueAggregate
  | MetricAggregate

export type MetricAggregate =
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

export class AggregateBase {
  meta?: Dictionary<string, UserDefinedValue>
}

export class MultiBucketAggregate<TBucket> extends AggregateBase {
  buckets: TBucket[]
}

export class ValueAggregate extends AggregateBase {
  value: double
  value_as_string?: string
}

export class SingleBucketAggregate
  extends AggregateBase
  implements AdditionalProperties<AggregateName, Aggregate> {
  doc_count: double
}
export class KeyedValueAggregate extends ValueAggregate {
  keys: string[]
}

export class AutoDateHistogramAggregate extends MultiBucketAggregate<
  KeyedBucket<long>
> {
  interval: DateMathTime
}

export class FiltersAggregate extends AggregateBase {
  buckets: FiltersBucketItem[] | Dictionary<string, FiltersBucketItem>
}

export class SignificantTermsAggregate<
  TKey
> extends MultiBucketAggregate<TKey> {
  bg_count: long
  doc_count: long
}

export class TermsAggregate<TKey> extends MultiBucketAggregate<TKey> {
  doc_count_error_upper_bound: long
  sum_other_doc_count: long
}

// TODO this is an intermediate type in NEST
export class BucketAggregate extends AggregateBase {
  after_key: Dictionary<string, UserDefinedValue>
  bg_count: long
  doc_count: long
  doc_count_error_upper_bound: long
  sum_other_doc_count: long
  interval: DateMathTime
  items: Bucket
}

export class CompositeBucketAggregate extends MultiBucketAggregate<
  Dictionary<string, UserDefinedValue>
> {
  after_key: Dictionary<string, UserDefinedValue>
}

export class MatrixStatsAggregate extends AggregateBase {
  correlation: Dictionary<string, double>
  covariance: Dictionary<string, double>
  count: integer
  kurtosis: double
  mean: double
  skewness: double
  variance: double
  name: string
}

export class BoxPlotAggregate extends AggregateBase {
  min: double
  max: double
  q1: double
  q2: double
  q3: double
}

export class StatsAggregate extends AggregateBase {
  count: double
  sum: double

  // not returned if count is 0
  avg?: double
  max?: double
  min?: double
}

// extended stats can return a completely empty object hence all optional "std_deviation_bounds": {},
export class StandardDeviationBounds {
  lower?: double
  upper?: double
  lower_population?: double
  upper_population?: double
  lower_sampling?: double
  upper_sampling?: double
}

export class ExtendedStatsAggregate extends StatsAggregate {
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
export class GeoBounds {
  bottom_right: LatLon
  top_left: LatLon
}
export class GeoBoundsAggregate extends AggregateBase {
  bounds: GeoBounds
}

export class GeoCentroidAggregate extends AggregateBase {
  count: long
  location: GeoLocation
}
export class GeoLineAggregate extends AggregateBase {
  type: string
  geometry: LineStringGeoShape
  properties: GeoLineProperties
}
export class GeoLineProperties {
  complete: boolean
  sort_values: double[]
}
export class LineStringGeoShape {
  coordinates: GeoCoordinate[]
}

export class PercentileItem {
  percentile: double
  value: double
}

export class PercentilesAggregate extends AggregateBase {
  items: PercentileItem[]
}
export class TDigestPercentilesAggregate extends AggregateBase {
  values: Dictionary<string, double>
}
export class HdrPercentileItem {
  key: double
  value: double
}
export class HdrPercentilesAggregate extends AggregateBase {
  values: HdrPercentileItem[]
}

export class ScriptedMetricAggregate extends AggregateBase {
  value: UserDefinedValue
}

export class StringStatsAggregate extends AggregateBase {
  count: long
  min_length: integer
  max_length: integer
  avg_length: double
  entropy: double
  distribution?: Dictionary<string, double>
}

//hard
export class TopHitsAggregate extends AggregateBase {
  hits: HitsMetadata<Dictionary<string, UserDefinedValue>>
}

export class TopMetricsAggregate extends AggregateBase {
  top: TopMetrics[]
}

export class TopMetrics {
  sort: Array<long | double | string>
  metrics: Dictionary<string, long | double | string>
}
