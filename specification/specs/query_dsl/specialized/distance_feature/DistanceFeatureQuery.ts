@class_serializer("DistanceFeatureQueryFormatter")
class DistanceFeatureQuery extends QueryBase {
	origin: Union<GeoCoordinate, DateMath>;
	pivot: Union<Distance, Time>;
}
