
/**namespace:Search.MultiSearch */
/**custom_serialization*/
interface multi_search_request extends request {
	Operations: map<string, search_request>[];
	/**ambiguous_origin*/
	SearchType: SearchType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}