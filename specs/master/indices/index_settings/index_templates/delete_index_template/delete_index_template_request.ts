
/**namespace:Indices.IndexSettings.IndexTemplates.DeleteIndexTemplate */
interface delete_index_template_request extends request {
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}