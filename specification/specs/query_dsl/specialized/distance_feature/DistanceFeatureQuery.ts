@class_serializer("DistanceFeatureQueryFormatter")
class DistanceFeatureQuery {
	origin: Union<GeoCoordinate, DateMath>;
	pivot: Union<Distance, Time>;
}
