@class_serializer("GeoDistanceQueryFormatter")
class GeoDistanceQuery {
	distance: Distance;
	distance_type: GeoDistanceType;
	location: GeoLocation;
	validation_method: GeoValidationMethod;
}
