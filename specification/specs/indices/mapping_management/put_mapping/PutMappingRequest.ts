@rest_spec_name("indices.put_mapping")
class PutMappingRequest extends RequestBase {
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
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	include_type_name: boolean;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
}
