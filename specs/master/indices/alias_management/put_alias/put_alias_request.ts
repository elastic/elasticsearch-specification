
/**namespace:Indices.AliasManagement.PutAlias */
interface put_alias_request extends request {
	routing: string;
	filter: query_container;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}