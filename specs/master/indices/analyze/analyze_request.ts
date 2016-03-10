
/**namespace:Indices.Analyze */
interface AnalyzeRequest extends Request {
	/**ambiguous_origin*/
	Analyzer: string;
	/**ambiguous_origin*/
	CharFilters: string[];
	/**ambiguous_origin*/
	Field: Field;
	/**ambiguous_origin*/
	Filters: string[];
	/**ambiguous_origin*/
	PreferLocal: boolean;
	/**ambiguous_origin*/
	Text: string[];
	/**ambiguous_origin*/
	Tokenizer: string;
	/**ambiguous_origin*/
	Format: Format;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}