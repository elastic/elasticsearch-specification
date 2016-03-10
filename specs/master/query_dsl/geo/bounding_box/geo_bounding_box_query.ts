
/**namespace:QueryDsl.Geo.BoundingBox */
/**custom_serialization*/
interface GeoBoundingBoxQuery {
	BoundingBox: BoundingBox;
	type: GeoExecution;
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}