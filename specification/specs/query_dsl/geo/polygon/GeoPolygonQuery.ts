@class_serializer("GeoPolygonQueryFormatter")
class GeoPolygonQuery extends QueryBase {
  points?: GeoLocation[];
  validation_method?: GeoValidationMethod;
}
