
/**namespace:Analysis.TokenFilters */
interface stemmer_override_token_filter extends token_filter_base {
	rules: string[];
	rules_path: string;
}