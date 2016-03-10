
/**namespace:Aggregations.Bucket.GeoDistance */
interface GeoDistanceAggregation {
	field: Field;
	origin: GeoLocation;
	unit: DistanceUnit;
	distance_type: GeoDistanceType;
	ranges: Range[];
}