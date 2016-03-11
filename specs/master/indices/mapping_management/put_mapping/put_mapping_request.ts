
/**namespace:Indices.MappingManagement.PutMapping */
/**custom_serialization*/
interface put_mapping_request extends request {
	AllField: all_field;
	DateDetection: boolean;
	DynamicDateFormats: string[];
	DynamicTemplates: map<string, dynamic_template>[];
	Dynamic: DynamicMapping;
	Analyzer: string;
	SearchAnalyzer: string;
	FieldNamesField: field_names_field;
	IndexField: index_field;
	Meta: map<string, any>[];
	NumericDetection: boolean;
	ParentField: parent_field;
	Properties: map<property_name, property>[];
	RoutingField: routing_field;
	SizeField: size_field;
	SourceField: source_field;
	TimestampField: timestamp_field;
	Transform: mapping_transform[];
	TtlField: ttl_field;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	UpdateAllTypes: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}