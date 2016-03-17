
/**namespace:Search.Explain */
interface explain_request<t_document> extends request {
	query: query_container;
	/**ambiguous_origin*/
	AnalyzeWildcard: boolean;
	/**ambiguous_origin*/
	Analyzer: string;
	/**ambiguous_origin*/
	DefaultOperator: DefaultOperator;
	/**ambiguous_origin*/
	Df: string;
	/**ambiguous_origin*/
	Fields: field[];
	/**ambiguous_origin*/
	Lenient: boolean;
	/**ambiguous_origin*/
	LowercaseExpandedTerms: boolean;
	/**ambiguous_origin*/
	Parent: string;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	QueryOnQueryString: string;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	SourceEnabled: string[];
	/**ambiguous_origin*/
	SourceExclude: field[];
	/**ambiguous_origin*/
	SourceInclude: field[];
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}