
/**namespace:Indices.Monitoring.IndicesSegments */
interface segments_request extends request {
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	OperationThreading: string;
	/**ambiguous_origin*/
	Verbose: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}