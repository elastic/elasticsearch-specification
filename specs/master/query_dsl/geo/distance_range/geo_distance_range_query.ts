
/**namespace:QueryDsl.Geo.DistanceRange */
/**custom_serialization*/
interface geo_distance_range_query {
	Location: geo_location;
	gte: distance;
	lte: distance;
	gt: distance;
	lt: distance;
	distance_type: GeoDistanceType;
	optimize_bbox: GeoOptimizeBBox;
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}