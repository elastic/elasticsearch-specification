
/**namespace:Cluster.NodesStats */
interface nodes_stats_request extends request {
	/**ambiguous_origin*/
	CompletionFields: field[];
	/**ambiguous_origin*/
	FielddataFields: field[];
	/**ambiguous_origin*/
	Fields: field[];
	/**ambiguous_origin*/
	Groups: boolean;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Level: Level;
	/**ambiguous_origin*/
	Types: string[];
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}