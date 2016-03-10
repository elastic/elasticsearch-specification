
/**namespace:Document.Single.Exists */
interface DocumentExistsRequest extends Request {
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
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}