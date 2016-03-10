
/**namespace:Document.Single.Update */
interface UpdateRequest<TDocument, TPartialDocument> extends Request {
	/**ambiguous_origin*/
	script: string;
	script_file: string;
	lang: string;
	/**custom_serialization */
	params: Map<string, any>;
	upsert: TDocument;
	doc_as_upsert: boolean;
	doc: TPartialDocument;
	detect_noop: boolean;
	Fields: Field[];
	/**ambiguous_origin*/
	Consistency: Consistency;
	/**ambiguous_origin*/
	Lang: string;
	/**ambiguous_origin*/
	Parent: string;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	RetryOnConflict: long;
	/**ambiguous_origin*/
	Routing: string;
	ScriptQueryString: string;
	/**ambiguous_origin*/
	script_id: string;
	/**ambiguous_origin*/
	ScriptedUpsert: boolean;
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