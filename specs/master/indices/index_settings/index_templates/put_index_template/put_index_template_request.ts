
/**namespace:Indices.IndexSettings.IndexTemplates.PutIndexTemplate */
interface put_index_template_request extends request {
	Template: string;
	Order: integer;
	Settings: map<string, any>[];
	Mappings: map<type_name, type_mapping>[];
	Warmers: map<type_name, warmer>[];
	Aliases: map<index_name, alias>[];
	/**ambiguous_origin*/
	Create: boolean;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}