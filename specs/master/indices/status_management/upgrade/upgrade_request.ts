
/**namespace:Indices.StatusManagement.Upgrade */
interface UpgradeRequest extends Request {
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	WaitForCompletion: boolean;
	/**ambiguous_origin*/
	OnlyAncientSegments: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}