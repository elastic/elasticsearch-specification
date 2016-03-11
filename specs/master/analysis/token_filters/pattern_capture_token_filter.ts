
/**namespace:Analysis.TokenFilters */
interface pattern_capture_token_filter extends token_filter_base {
	patterns: string[];
	preserve_original: boolean;
}