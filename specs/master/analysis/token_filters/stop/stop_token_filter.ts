
/**namespace:Analysis.TokenFilters.Stop */
interface stop_token_filter extends token_filter_base {
	stopwords: stop_words;
	ignore_case: boolean;
	stopwords_path: string;
	remove_trailing: boolean;
}