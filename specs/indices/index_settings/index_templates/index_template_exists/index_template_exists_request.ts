
/**namespace:Indices.IndexSettings.IndexTemplates.IndexTemplateExists */
interface index_template_exists_request extends request {
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}