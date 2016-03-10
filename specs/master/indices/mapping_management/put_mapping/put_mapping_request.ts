
/**namespace:Indices.MappingManagement.PutMapping */
/**custom_serialization*/
interface PutMappingRequest extends Request {
	AllField: AllField;
	DateDetection: boolean;
	DynamicDateFormats: string[];
	DynamicTemplates: Map<string, DynamicTemplate>;
	Dynamic: DynamicMapping;
	Analyzer: string;
	SearchAnalyzer: string;
	FieldNamesField: FieldNamesField;
	IndexField: IndexField;
	Meta: Map<string, any>;
	NumericDetection: boolean;
	ParentField: ParentField;
	Properties: Map<PropertyName, Property>;
	RoutingField: RoutingField;
	SizeField: SizeField;
	SourceField: SourceField;
	TimestampField: TimestampField;
	Transform: MappingTransform[];
	TtlField: TtlField;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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