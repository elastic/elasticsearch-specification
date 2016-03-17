
/**namespace:Indices.StatusManagement.ClearCache */
interface clear_cache_request extends request {
	/**ambiguous_origin*/
	FieldData: boolean;
	/**ambiguous_origin*/
	Fields: field[];
	/**ambiguous_origin*/
	Query: boolean;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Recycler: boolean;
	/**ambiguous_origin*/
	Request: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}