
/**namespace:Search.Count */
/**custom_serialization*/
interface CountRequest extends Request {
	query: QueryContainer;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	MinScore: double;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	QueryOnQueryString: string;
	/**ambiguous_origin*/
	Analyzer: string;
	/**ambiguous_origin*/
	AnalyzeWildcard: boolean;
	/**ambiguous_origin*/
	DefaultOperator: DefaultOperator;
	/**ambiguous_origin*/
	Df: string;
	/**ambiguous_origin*/
	Lenient: boolean;
	/**ambiguous_origin*/
	LowercaseExpandedTerms: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}