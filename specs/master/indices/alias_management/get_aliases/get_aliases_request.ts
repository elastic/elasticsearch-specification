
/**namespace:Indices.AliasManagement.GetAliases */
interface get_aliases_request extends request {
	Alias: string;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}