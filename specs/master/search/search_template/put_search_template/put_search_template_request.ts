
/**namespace:Search.SearchTemplate.PutSearchTemplate */
/**custom_serialization*/
interface PutSearchTemplateRequest extends Request {
	template: string;
	/**ambiguous_origin*/
	OpType: OpType;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}