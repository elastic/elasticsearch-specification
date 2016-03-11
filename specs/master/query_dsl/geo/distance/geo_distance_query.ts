
/**namespace:QueryDsl.Geo.Distance */
/**custom_serialization*/
interface geo_distance_query {
	Location: geo_location;
	distance: distance;
	optimize_bbox: GeoOptimizeBBox;
	distance_type: GeoDistanceType;
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}