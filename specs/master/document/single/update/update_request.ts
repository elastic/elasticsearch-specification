
/**namespace:Document.Single.Update */
interface update_request<t_document, t_partial_document> extends request {
	/**ambiguous_origin*/
	script: string;
	script_file: string;
	lang: string;
	/**custom_serialization */
	params: map<string, any>[];
	upsert: t_document;
	doc_as_upsert: boolean;
	doc: t_partial_document;
	detect_noop: boolean;
	Fields: field[];
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