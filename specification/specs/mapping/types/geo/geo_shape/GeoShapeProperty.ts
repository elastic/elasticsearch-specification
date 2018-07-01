class GeoShapeProperty extends DocValuesPropertyBase {
	tree: GeoTree;
	precision: Distance;
	orientation: GeoOrientation;
	tree_levels: integer;
	strategy: GeoStrategy;
	distance_error_pct: double;
	points_only: boolean;
}
