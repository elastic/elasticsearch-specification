
/**namespace:Indices.IndexSettings.IndexTemplates.GetIndexTemplate */
interface get_index_template_request extends request {
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}