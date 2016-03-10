
/**namespace:QueryDsl.Geo.Polygon */
/**custom_serialization*/
interface GeoPolygonQuery {
	Points: GeoLocation[];
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}