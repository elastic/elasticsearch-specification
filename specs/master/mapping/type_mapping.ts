
/**namespace:Mapping */
/**custom_serialization*/
interface TypeMapping {
	_all: AllField;
	analyzer: string;
	date_detection: boolean;
	dynamic: DynamicMapping;
	dynamic_date_formats: string[];
	dynamic_templates: Map<string, DynamicTemplate>;
	_field_names: FieldNamesField;
	_index: IndexField;
	/**custom_serialization */
	_meta: Map<string, any>;
	numeric_detection: boolean;
	_parent: ParentField;
	properties: Map<PropertyName, Property>;
	_routing: RoutingField;
	search_analyzer: string;
	_size: SizeField;
	_source: SourceField;
	_timestamp: TimestampField;
	/**custom_serialization */
	transform: MappingTransform[];
	_ttl: TtlField;
}