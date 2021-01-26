class AggregationProfileDebug {}
class AggregationProfile {
  breakdown: AggregationBreakdown
  description: string
  time_in_nanos: long
  type: string
  debug: AggregationProfileDebug
  children?: AggregationProfileDebug[]
}
