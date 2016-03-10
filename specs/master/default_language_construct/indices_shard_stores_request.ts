
/**namespace:DefaultLanguageConstruct */
interface IndicesShardStoresRequest extends Request {
	/**ambiguous_origin*/
	Status: string[];
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	OperationThreading: string;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}