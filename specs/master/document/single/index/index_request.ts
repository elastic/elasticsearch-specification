
/**namespace:Document.Single.Index */
interface IndexRequest<TDocument> extends Request {
	Document: TDocument;
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
	Timeout: Time;
	/**ambiguous_origin*/
	Timestamp: Time;
	/**ambiguous_origin*/
	Ttl: Time;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}