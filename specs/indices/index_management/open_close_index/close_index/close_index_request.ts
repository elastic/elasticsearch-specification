
/**namespace:Indices.IndexManagement.OpenCloseIndex.CloseIndex */
interface close_index_request extends request {
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
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