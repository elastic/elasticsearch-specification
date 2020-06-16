class TypeMapping {
	all_field: AllField;
	date_detection: boolean;
	@prop_serializer("DynamicMappingFormatter")
	dynamic: Union<boolean, DynamicMapping>;
	dynamic_date_formats: string[];
	dynamic_templates: Dictionary<string, DynamicTemplate>;
	_field_names: FieldNamesField;
	index_field: IndexField;
	_meta: Dictionary<string, any>;
	numeric_detection: boolean;
	properties: Dictionary<PropertyName, IProperty>;
	_routing: RoutingField;
	_size: SizeField;
	_source: SourceField;
}
