
/**namespace:Analysis.TokenFilters.EdgeNGram */
interface edge_n_gram_token_filter extends token_filter_base {
	min_gram: integer;
	max_gram: integer;
	side: EdgeNGramSide;
}