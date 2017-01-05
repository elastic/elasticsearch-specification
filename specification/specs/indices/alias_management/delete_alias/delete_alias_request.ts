
/**namespace:Indices.AliasManagement.DeleteAlias */
interface delete_alias_request extends request {
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}