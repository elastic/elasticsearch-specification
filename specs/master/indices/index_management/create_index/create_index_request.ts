
/**namespace:Indices.IndexManagement.CreateIndex */
/**custom_serialization*/
interface CreateIndexRequest extends Request {
	Settings: Map<string, any>;
	Mappings: Map<TypeName, TypeMapping>;
	Warmers: Map<TypeName, Warmer>;
	Aliases: Map<IndexName, Alias>;
	Similarity: Map<string, Similarity>;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	UpdateAllTypes: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}