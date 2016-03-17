
/**namespace:Document.Single.TermVectors */
interface term_vectors_request<t_document> extends request {
	doc: t_document;
	per_field_analyzer: map<field, string>[];
	/**ambiguous_origin*/
	TermStatistics: boolean;
	/**ambiguous_origin*/
	FieldStatistics: boolean;
	/**ambiguous_origin*/
	Dfs: boolean;
	/**ambiguous_origin*/
	Fields: field[];
	/**ambiguous_origin*/
	Offsets: boolean;
	/**ambiguous_origin*/
	Positions: boolean;
	/**ambiguous_origin*/
	Payloads: boolean;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Parent: string;
	/**ambiguous_origin*/
	Realtime: boolean;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}