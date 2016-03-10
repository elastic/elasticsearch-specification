
/**namespace:Search.Search */
/**custom_serialization*/
interface SearchRequest extends Request {
	timeout: string;
	from: integer;
	size: integer;
	explain: boolean;
	version: boolean;
	track_scores: boolean;
	min_score: double;
	terminate_after: long;
	fields: Field[];
	fielddata_fields: Field[];
	script_fields: Map<string, ScriptField>;
	/**custom_serialization */
	_source: SourceFilter;
	sort: Sort[];
	/**custom_serialization */
	indices_boost: Map<IndexName, double>;
	post_filter: QueryContainer;
	inner_hits: Map<string, InnerHitsContainer>;
	query: QueryContainer;
	rescore: Rescore;
	suggest: Map<string, SuggestBucket>;
	highlight: Highlight;
	aggs: Map<string, AggregationContainer>;
	/**ambiguous_origin*/
	Analyzer: string;
	/**ambiguous_origin*/
	AnalyzeWildcard: boolean;
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
	Lenient: boolean;
	/**ambiguous_origin*/
	LowercaseExpandedTerms: boolean;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Routing: string[];
	/**ambiguous_origin*/
	Scroll: Time;
	/**ambiguous_origin*/
	SearchType: SearchType;
	/**ambiguous_origin*/
	Stats: string[];
	/**ambiguous_origin*/
	SuggestField: Field;
	/**ambiguous_origin*/
	SuggestMode: SuggestMode;
	/**ambiguous_origin*/
	SuggestSize: long;
	/**ambiguous_origin*/
	SuggestText: string;
	/**ambiguous_origin*/
	RequestCache: boolean;
	/**ambiguous_origin*/
	FilterPath: string;
}