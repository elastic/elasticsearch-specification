@class_serializer("GeoBoundingBoxQueryFormatter")
class GeoBoundingBoxQuery {
	bounding_box: BoundingBox;
	type: GeoExecution;
	validation_method: GeoValidationMethod;
}
