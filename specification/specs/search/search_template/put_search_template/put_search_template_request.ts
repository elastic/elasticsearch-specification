
/**namespace:Search.SearchTemplate.PutSearchTemplate */
/**custom_serialization*/
interface put_search_template_request extends request {
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