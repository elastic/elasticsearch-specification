
/**namespace:Search.Percolator.MultiPercolate */
/**custom_serialization*/
interface MultiPercolateRequest extends Request {
	Percolations: PercolateOperation[];
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}