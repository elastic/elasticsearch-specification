
/**namespace:Indices.Monitoring.IndicesStats */
interface indices_stats_request extends request {
	Types: type_name[];
	/**ambiguous_origin*/
	CompletionFields: field[];
	/**ambiguous_origin*/
	FielddataFields: field[];
	/**ambiguous_origin*/
	Fields: field[];
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