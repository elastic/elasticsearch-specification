
/**namespace:Analysis.TokenFilters */
interface limit_token_count_token_filter extends token_filter_base {
	max_token_count: integer;
	consume_all_tokens: boolean;
}