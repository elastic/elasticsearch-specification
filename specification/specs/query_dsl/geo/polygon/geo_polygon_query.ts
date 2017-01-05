
/**namespace:QueryDsl.Geo.Polygon */
/**custom_serialization*/
interface geo_polygon_query {
	Points: geo_location[];
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}