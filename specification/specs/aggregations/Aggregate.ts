//@class_serializer("AggregateFormatter")
type Bucket =
  CompositeBucket
  | DateHistogramBucket
  | FiltersBucketItem
  | IpRangeBucket
  | RangeBucket
  | RareTermsBucket<any>
  | SignificantTermsBucket<any>
  | KeyedBucket<any>

class BucketBase implements IDictionary<AggregateName, Aggregate> {}
class CompositeBucket extends BucketBase {}
class DateHistogramBucket extends BucketBase {}
class FiltersBucketItem extends BucketBase {
  doc_count: long;
}
class IpRangeBucket extends BucketBase {}
class RangeBucket extends BucketBase {}
class RareTermsBucket<TKey> extends BucketBase {}
class SignificantTermsBucket<TKey> extends BucketBase {}
class KeyedBucket<TKey> extends BucketBase {}

type Aggregate  =
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
  meta?: Dictionary<string, UserDefinedValue>;
}

class MultiBucketAggregate<TBucket> extends AggregateBase {
  buckets: TBucket[];
}

class ValueAggregate extends AggregateBase {
  value: double;
  value_as_string?: string;
}

class SingleBucketAggregate extends AggregateBase implements IDictionary<AggregateName, Aggregate> {
  doc_count: double;
}
class KeyedValueAggregate extends ValueAggregate {
  keys:string[]
}


class AutoDateHistogramAggregate extends AggregateBase {
  interval:DateMathTime
}

class FiltersAggregate extends AggregateBase {
  buckets: FiltersBucketItem[] | Dictionary<string, FiltersBucketItem>;
}

class SignificantTermsAggregate<TKey> extends MultiBucketAggregate<TKey> {
  bg_count:long;
  doc_count:long;
}

class TermsAggregate<TKey> extends MultiBucketAggregate<TKey> {
  doc_count_error_upper_bound: long;
  sum_other_doc_count: long;
}

// TODO this is an intermediate type in NEST
class BucketAggregate extends AggregateBase {
  after_key:Dictionary<string, UserDefinedValue>;
  bg_count:long;
  doc_count:long;
  doc_count_error_upper_bound: long;
  sum_other_doc_count: long;
  interval:DateMathTime;
  items: Bucket;
}

class CompositeBucketAggregate extends MultiBucketAggregate<Dictionary<string, UserDefinedValue>> {
  after_key:Dictionary<string, UserDefinedValue>;
}

class MatrixStatsAggregate extends AggregateBase {
  correlation: Dictionary<string, double>;
  covariance: Dictionary<string, double>;
  count: integer;
  kurtosis: double;
  mean: double;
  skewness: double;
  variance: double;
  name: string;
}

class BoxPlotAggregate extends AggregateBase {
  min:double;
  max:double;
  q1:double;
  q2:double;
  q3:double;
}

class StatsAggregate extends AggregateBase {
  avg: double;
  count: double;
  max: double;
  min: double;
  sum: double;
}

class StandardDeviationBounds {
  lower:double;
  upper:double;
  lower_population:double;
  upper_population:double;
  lower_sampling:double;
  upper_sampling:double;
}

class ExtendedStatsAggregate extends StatsAggregate {
  sum_of_squares:double;
  variance:double;
  variance_population:double;
  variance_sampling:double;
  std_deviation:double;
  std_deviation_population:double;
  std_deviation_sampling:double;
  std_deviation_bounds:StandardDeviationBounds;
}
class GeoBounds {
  bottom_right: LatLon;
  top_left: LatLon;
}
class GeoBoundsAggregate extends AggregateBase {
  bounds:GeoBounds;
}

class GeoCentroidAggregate extends AggregateBase {
  count:long;
  location: GeoLocation;
}

class PercentileItem {
  percentile:double;
  value:double;
}

class PercentilesAggregate extends AggregateBase {
  items:PercentileItem[];
}
class TDigestPercentilesAggregate extends AggregateBase {
  values:Dictionary<string, double>
}
class HdrPercentileItem {
  key:double;
  value:double;
}
class HdrPercentilesAggregate extends AggregateBase {
  values:HdrPercentileItem[]
}

//hard
class ScriptedMetricAggregate extends AggregateBase {}

class StringStatsAggregate extends AggregateBase {
  count:long;
  min_length:integer;
  max_length:integer;
  avg_length:double;
  entropy:long;
  distribution:Dictionary<string, double>;
}

//hard
class TopHitsAggregate extends AggregateBase {
}

//TODO wrong on purpose
class TopMetricsAggregate extends AggregateBase {
  sort: double[];
  metrics: double[];
}
