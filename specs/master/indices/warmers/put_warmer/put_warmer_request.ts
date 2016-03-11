
/**namespace:Indices.Warmers.PutWarmer */
/**custom_serialization*/
interface put_warmer_request extends request {
	Search: search_request;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	RequestCache: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}