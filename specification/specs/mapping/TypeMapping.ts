class TypeMapping {
	dynamic_date_formats: string[];
	date_detection: boolean;
	numeric_detection: boolean;
	_source: SourceField;
	_all: AllField;
	_routing: RoutingField;
	_index: IndexField;
	_size: SizeField;
	_field_names: FieldNamesField;
	_meta: Dictionary<string, any>;
	dynamic_templates: Dictionary<string, DynamicTemplate>;
	dynamic: Union<boolean, DynamicMapping>;
	properties: Dictionary<PropertyName, IProperty>;
}
