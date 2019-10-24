class GeoShapeProperty extends DocValuesPropertyBase {
	ignore_malformed: boolean;
	ignore_z_value: boolean;
	orientation: GeoOrientation;
	strategy: GeoStrategy;
	coerce: boolean;
}
