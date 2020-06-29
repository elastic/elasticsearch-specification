@class_serializer("SortFormatter")
class Sort {
	missing: any;
	mode: SortMode;
	nested: NestedSort;
	numeric_type: NumericType;
	order: SortOrder;
	sort_key: Field;
}
