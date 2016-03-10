
/**namespace:Search.Percolator.Percolate */
interface PercolateRequest<TDocument> extends Request {
	MultiPercolateName: string;
	Highlight: Highlight;
	Query: QueryContainer;
	Filter: QueryContainer;
	Aggregations: Map<string, AggregationContainer>;
	Size: integer;
	TrackScores: boolean;
	doc: TDocument;
	Sort: Sort[];
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