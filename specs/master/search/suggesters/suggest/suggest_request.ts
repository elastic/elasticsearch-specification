
/**namespace:Search.Suggesters.Suggest */
/**custom_serialization*/
interface SuggestRequest extends Request {
	GlobalText: string;
	Suggest: Map<string, SuggestBucket>;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}