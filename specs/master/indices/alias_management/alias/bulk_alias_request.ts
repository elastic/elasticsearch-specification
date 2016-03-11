
/**namespace:Indices.AliasManagement.Alias */
interface bulk_alias_request extends request {
	actions: alias_action[];
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}