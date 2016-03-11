
/**namespace:QueryDsl.Geo.BoundingBox */
/**custom_serialization*/
interface geo_bounding_box_query {
	BoundingBox: bounding_box;
	type: GeoExecution;
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}