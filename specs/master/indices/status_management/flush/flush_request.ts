
/**namespace:Indices.StatusManagement.Flush */
interface FlushRequest extends Request {
	/**ambiguous_origin*/
	Force: boolean;
	/**ambiguous_origin*/
	WaitIfOngoing: boolean;
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