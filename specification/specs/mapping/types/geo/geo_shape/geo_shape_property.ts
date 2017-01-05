
/**namespace:Mapping.Types.Geo.GeoShape */
interface geo_shape_property extends property_base {
	tree: GeoTree;
	precision: distance;
	orientation: GeoOrientation;
	tree_levels: integer;
	distance_error_pct: double;
	points_only: boolean;
}