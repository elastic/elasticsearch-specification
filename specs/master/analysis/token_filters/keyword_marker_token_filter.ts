
/**namespace:Analysis.TokenFilters */
interface keyword_marker_token_filter extends token_filter_base {
	keywords: string[];
	keywords_path: string;
	ignore_case: boolean;
}