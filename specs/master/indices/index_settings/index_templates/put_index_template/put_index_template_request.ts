
/**namespace:Indices.IndexSettings.IndexTemplates.PutIndexTemplate */
interface PutIndexTemplateRequest extends Request {
	Template: string;
	Order: integer;
	Settings: Map<string, any>;
	Mappings: Map<TypeName, TypeMapping>;
	Warmers: Map<TypeName, Warmer>;
	Aliases: Map<IndexName, Alias>;
	/**ambiguous_origin*/
	Create: boolean;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}