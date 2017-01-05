
/**namespace:Search.Percolator.PercolateCount */
interface percolate_count_request<t_document> extends request {
	MultiPercolateName: string;
	Size: integer;
	TrackScores: boolean;
	Sort: sort[];
	Highlight: highlight;
	Query: query_container;
	Filter: query_container;
	Aggregations: map<string, aggregation_container>[];
	doc: t_document;
	/**ambiguous_origin*/
	Routing: string[];
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	PercolateIndex: string;
	/**ambiguous_origin*/
	PercolateType: string;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}