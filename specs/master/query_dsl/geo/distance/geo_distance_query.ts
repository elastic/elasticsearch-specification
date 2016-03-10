
/**namespace:QueryDsl.Geo.Distance */
/**custom_serialization*/
interface GeoDistanceQuery {
	Location: GeoLocation;
	distance: Distance;
	optimize_bbox: GeoOptimizeBBox;
	distance_type: GeoDistanceType;
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}