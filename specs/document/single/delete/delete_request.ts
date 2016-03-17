
/**namespace:Document.Single.Delete */
interface delete_request extends request {
	/**ambiguous_origin*/
	Consistency: Consistency;
	/**ambiguous_origin*/
	Parent: string;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}