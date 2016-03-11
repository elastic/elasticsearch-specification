
/**namespace:Analysis.TokenFilters */
interface hunspell_token_filter extends token_filter_base {
	ignore_case: boolean;
	locale: string;
	dictionary: string;
	dedup: boolean;
	longest_only: boolean;
}