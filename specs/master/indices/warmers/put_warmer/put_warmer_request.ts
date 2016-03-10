
/**namespace:Indices.Warmers.PutWarmer */
/**custom_serialization*/
interface PutWarmerRequest extends Request {
	Search: SearchRequest;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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