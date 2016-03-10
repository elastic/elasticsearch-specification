
/**namespace:Indices.Monitoring.IndicesStats */
interface IndicesStatsRequest extends Request {
	Types: TypeName[];
	/**ambiguous_origin*/
	CompletionFields: Field[];
	/**ambiguous_origin*/
	FielddataFields: Field[];
	/**ambiguous_origin*/
	Fields: Field[];
	/**ambiguous_origin*/
	Groups: string[];
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Level: Level;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}