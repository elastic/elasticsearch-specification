
/**namespace:QueryDsl.Geo.DistanceRange */
/**custom_serialization*/
interface GeoDistanceRangeQuery {
	Location: GeoLocation;
	gte: Distance;
	lte: Distance;
	gt: Distance;
	lt: Distance;
	distance_type: GeoDistanceType;
	optimize_bbox: GeoOptimizeBBox;
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}