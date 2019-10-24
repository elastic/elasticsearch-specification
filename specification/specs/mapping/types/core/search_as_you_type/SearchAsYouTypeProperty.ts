class SearchAsYouTypeProperty extends CorePropertyBase {
	analyzer: string;
	index: boolean;
	index_options: IndexOptions;
	max_shingle_size: integer;
	norms: boolean;
	search_analyzer: string;
	search_quote_analyzer: string;
	term_vector: TermVectorOption;
}
