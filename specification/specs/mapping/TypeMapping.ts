class TypeMapping {
	all_field: AllField;
	date_detection: boolean;
	dynamic: Union<boolean, DynamicMapping>;
	dynamic_date_formats: string[];
	dynamic_templates: Dictionary<string, DynamicTemplate>;
	field_names_field: FieldNamesField;
	index_field: IndexField;
	meta: Dictionary<string, any>;
	numeric_detection: boolean;
	properties: Dictionary<PropertyName, IProperty>;
	routing_field: RoutingField;
	size_field: SizeField;
	source_field: SourceField;
}
