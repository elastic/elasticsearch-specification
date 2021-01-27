@class_serializer('GeoBoundingBoxQueryFormatter')
class GeoBoundingBoxQuery extends QueryBase {
  bounding_box?: BoundingBox
  type?: GeoExecution
  validation_method?: GeoValidationMethod
}
