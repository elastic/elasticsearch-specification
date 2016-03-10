
/**namespace:Document.Single.TermVectors */
interface TermVectorsRequest<TDocument> extends Request {
	doc: TDocument;
	per_field_analyzer: Map<Field, string>;
	/**ambiguous_origin*/
	TermStatistics: boolean;
	/**ambiguous_origin*/
	FieldStatistics: boolean;
	/**ambiguous_origin*/
	Dfs: boolean;
	/**ambiguous_origin*/
	Fields: Field[];
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