
/**namespace:Indices.AliasManagement.Alias */
interface BulkAliasRequest extends Request {
	actions: AliasAction[];
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}