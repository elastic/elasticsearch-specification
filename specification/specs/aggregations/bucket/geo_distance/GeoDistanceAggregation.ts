class GeoDistanceAggregation {
  distance_type?: GeoDistanceType
  field?: Field
  origin?: GeoLocation | string
  ranges?: AggregationRange[]
  unit?: DistanceUnit
}
