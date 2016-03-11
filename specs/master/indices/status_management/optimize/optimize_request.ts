
/**namespace:Indices.StatusManagement.Optimize */
interface optimize_request extends request {
	/**ambiguous_origin*/
	Flush: boolean;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	MaxNumSegments: long;
	/**ambiguous_origin*/
	OnlyExpungeDeletes: boolean;
	/**ambiguous_origin*/
	OperationThreading: string;
	/**ambiguous_origin*/
	WaitForMerge: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}