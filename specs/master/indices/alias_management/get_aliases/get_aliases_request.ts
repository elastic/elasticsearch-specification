
/**namespace:Indices.AliasManagement.GetAliases */
interface GetAliasesRequest extends Request {
	Alias: string;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}