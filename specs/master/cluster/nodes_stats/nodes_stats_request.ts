
/**namespace:Cluster.NodesStats */
interface NodesStatsRequest extends Request {
	/**ambiguous_origin*/
	CompletionFields: Field[];
	/**ambiguous_origin*/
	FielddataFields: Field[];
	/**ambiguous_origin*/
	Fields: Field[];
	/**ambiguous_origin*/
	Groups: boolean;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Level: Level;
	/**ambiguous_origin*/
	Types: string[];
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}