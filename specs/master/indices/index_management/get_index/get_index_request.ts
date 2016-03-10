
/**namespace:Indices.IndexManagement.GetIndex */
interface GetIndexRequest extends Request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}