
/**namespace:Search.SearchTemplate.GetSearchTemplate */
interface GetSearchTemplateRequest extends Request {
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}