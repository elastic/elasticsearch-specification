
/**namespace:Indices.AliasManagement.PutAlias */
interface PutAliasRequest extends Request {
	routing: string;
	filter: QueryContainer;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}