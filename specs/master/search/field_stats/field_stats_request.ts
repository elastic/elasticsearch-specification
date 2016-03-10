
/**namespace:Search.FieldStats */
interface FieldStatsRequest extends Request {
	fields: Field[];
	index_constraints: Map<Field, IndexConstraint>;
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