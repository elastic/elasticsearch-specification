
/**namespace:Indices.IndexManagement.OpenCloseIndex.OpenIndex */
interface OpenIndexRequest extends Request {
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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