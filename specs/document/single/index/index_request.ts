
/**namespace:Document.Single.Index */
interface index_request<t_document> extends request {
	Document: t_document;
	/**ambiguous_origin*/
	Consistency: Consistency;
	/**ambiguous_origin*/
	OpType: OpType;
	/**ambiguous_origin*/
	Parent: string;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Timestamp: time;
	/**ambiguous_origin*/
	Ttl: time;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}