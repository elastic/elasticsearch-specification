
/**namespace:Analysis.TokenFilters */
interface common_grams_token_filter extends token_filter_base {
	common_words: string[];
	common_words_path: string;
	ignore_case: boolean;
	query_mode: boolean;
}