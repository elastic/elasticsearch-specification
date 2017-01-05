
/**namespace:Mapping */
/**custom_serialization*/
interface type_mapping {
	dynamic_date_formats: string[];
	date_detection: boolean;
	numeric_detection: boolean;
	/**custom_serialization */
	transform: mapping_transform[];
	analyzer: string;
	search_analyzer: string;
	_source: source_field;
	_all: all_field;
	_parent: parent_field;
	_routing: routing_field;
	_index: index_field;
	_size: size_field;
	_timestamp: timestamp_field;
	_field_names: field_names_field;
	_ttl: ttl_field;
	/**custom_serialization */
	_meta: map<string, any>[];
	dynamic_templates: map<string, dynamic_template>[];
	dynamic: DynamicMapping;
	properties: map<property_name, property>[];
}