@class_serializer("GeoDistanceQueryFormatter")
class GeoDistanceQuery extends QueryBase {
  distance: Distance;
  distance_type: GeoDistanceType;
  location: GeoLocation;
  validation_method: GeoValidationMethod;
}
