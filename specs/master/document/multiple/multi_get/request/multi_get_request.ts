
/**namespace:Document.Multiple.MultiGet.Request */
/**custom_serialization*/
interface multi_get_request extends request {
	docs: multi_get_operation[];
	/**ambiguous_origin*/
	Fields: field[];
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Realtime: boolean;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	SourceEnabled: string[];
	/**ambiguous_origin*/
	SourceExclude: field[];
	/**ambiguous_origin*/
	SourceInclude: field[];
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}