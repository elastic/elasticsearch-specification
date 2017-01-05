
/**namespace:Mapping.Types.Geo.GeoPoint */
interface geo_point_property extends property_base {
	lat_lon: boolean;
	geohash: boolean;
	geohash_prefix: boolean;
	geohash_precision: integer;
	validate: boolean;
	validate_lat: boolean;
	validate_lon: boolean;
	normalize: boolean;
	normalize_lat: boolean;
	normalize_lon: boolean;
	precision_step: integer;
	fielddata: geo_point_fielddata;
}