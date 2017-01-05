
/**namespace:Aggregations.Bucket.GeoDistance */
interface geo_distance_aggregation {
	field: field;
	origin: geo_location;
	unit: DistanceUnit;
	distance_type: GeoDistanceType;
	ranges: range[];
}