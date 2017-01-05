
/**namespace:Analysis.TokenFilters */
interface keep_words_token_filter extends token_filter_base {
	keep_words: string[];
	keep_words_path: string;
	keep_words_case: boolean;
}