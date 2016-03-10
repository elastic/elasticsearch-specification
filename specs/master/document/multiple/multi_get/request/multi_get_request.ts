
/**namespace:Document.Multiple.MultiGet.Request */
/**custom_serialization*/
interface MultiGetRequest extends Request {
	docs: MultiGetOperation[];
	/**ambiguous_origin*/
	Fields: Field[];
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Realtime: boolean;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	SourceEnabled: string[];
	/**ambiguous_origin*/
	SourceExclude: Field[];
	/**ambiguous_origin*/
	SourceInclude: Field[];
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}