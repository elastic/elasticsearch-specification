
/**namespace:Indices.IndexSettings.UpdateIndexSettings */
/**custom_serialization*/
interface UpdateIndexSettingsRequest extends Request {
	IndexSettings: Map<string, any>;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}