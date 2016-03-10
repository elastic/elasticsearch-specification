
/**namespace:Search.MultiSearch */
/**custom_serialization*/
interface MultiSearchRequest extends Request {
	Operations: Map<string, SearchRequest>;
	/**ambiguous_origin*/
	SearchType: SearchType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}