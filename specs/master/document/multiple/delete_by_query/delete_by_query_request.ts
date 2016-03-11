
/**namespace:Document.Multiple.DeleteByQuery */
interface delete_by_query_request extends request {
	query: query_container;
	/**ambiguous_origin*/
	Analyzer: string;
	/**ambiguous_origin*/
	DefaultOperator: DefaultOperator;
	/**ambiguous_origin*/
	Df: string;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	QueryOnQueryString: string;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	FilterPath: string;
}