
/**namespace:Document.Single.Get */
interface get_request extends request {
	/**ambiguous_origin*/
	Fields: field[];
	/**ambiguous_origin*/
	Parent: string;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Realtime: boolean;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	SourceEnabled: string[];
	/**ambiguous_origin*/
	SourceExclude: field[];
	/**ambiguous_origin*/
	SourceInclude: field[];
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}