
/**namespace:Search.FieldStats */
interface field_stats_request extends request {
	fields: field[];
	index_constraints: map<field, index_constraint>[];
	/**ambiguous_origin*/
	Level: Level;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}