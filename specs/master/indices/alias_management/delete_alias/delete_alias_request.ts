
/**namespace:Indices.AliasManagement.DeleteAlias */
interface DeleteAliasRequest extends Request {
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}