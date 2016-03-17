
/**namespace:Indices.IndexManagement.CreateIndex */
/**custom_serialization*/
interface create_index_request extends request {
	Settings: map<string, any>[];
	Mappings: map<type_name, type_mapping>[];
	Warmers: map<type_name, warmer>[];
	Aliases: map<index_name, alias>[];
	Similarity: map<string, similarity>[];
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	UpdateAllTypes: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}