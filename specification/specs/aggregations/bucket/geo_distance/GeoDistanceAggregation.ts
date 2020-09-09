class GeoDistanceAggregation {
  distance_type: GeoDistanceType;
  field: Field;
  origin: GeoLocation;
  ranges: AggregationRange[];
  unit: DistanceUnit;
}
