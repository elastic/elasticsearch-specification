@class_serializer('DistanceFeatureQueryFormatter')
class DistanceFeatureQuery extends QueryBase {
  origin?: Array<number> | GeoCoordinate | DateMath
  pivot?: Union<Distance, Time>
  field?: Field
}
