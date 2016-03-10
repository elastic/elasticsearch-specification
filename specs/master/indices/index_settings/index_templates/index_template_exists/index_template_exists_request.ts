
/**namespace:Indices.IndexSettings.IndexTemplates.IndexTemplateExists */
interface IndexTemplateExistsRequest extends Request {
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}