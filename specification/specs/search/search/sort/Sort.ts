@class_serializer("SortFormatter")
class Sort {
	missing: any;
	mode: SortMode;
	numeric_type: NumericType;
	nested: NestedSort;
	order: SortOrder;
	sort_key: Field;
}
