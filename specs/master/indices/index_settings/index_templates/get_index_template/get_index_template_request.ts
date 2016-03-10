
/**namespace:Indices.IndexSettings.IndexTemplates.GetIndexTemplate */
interface GetIndexTemplateRequest extends Request {
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}