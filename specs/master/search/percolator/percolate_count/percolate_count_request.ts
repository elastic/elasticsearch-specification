
/**namespace:Search.Percolator.PercolateCount */
interface PercolateCountRequest<TDocument> extends Request {
	MultiPercolateName: string;
	Size: integer;
	TrackScores: boolean;
	Sort: Sort[];
	Highlight: Highlight;
	Query: QueryContainer;
	Filter: QueryContainer;
	Aggregations: Map<string, AggregationContainer>;
	doc: TDocument;
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