
/**namespace:Search.Percolator.Percolate */
interface percolate_request<t_document> extends request {
	MultiPercolateName: string;
	Highlight: highlight;
	Query: query_container;
	Filter: query_container;
	Aggregations: map<string, aggregation_container>[];
	Size: integer;
	TrackScores: boolean;
	doc: t_document;
	Sort: sort[];
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
	PercolateRouting: string;
	/**ambiguous_origin*/
	PercolatePreference: string;
	/**ambiguous_origin*/
	PercolateFormat: PercolateFormat;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}