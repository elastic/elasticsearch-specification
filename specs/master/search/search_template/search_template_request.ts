
/**namespace:Search.SearchTemplate */
interface SearchTemplateRequest extends Request {
	template: string;
	file: string;
	id: string;
	params: Map<string, any>;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Routing: string[];
	/**ambiguous_origin*/
	Scroll: Time;
	/**ambiguous_origin*/
	SearchType: SearchType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}