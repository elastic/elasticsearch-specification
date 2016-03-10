
/**namespace:Document.Multiple.DeleteByQuery */
interface DeleteByQueryRequest extends Request {
	query: QueryContainer;
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
	Timeout: Time;
	/**ambiguous_origin*/
	FilterPath: string;
}