
/**namespace:Analysis.TokenFilters.Phonetic */
interface phonetic_token_filter extends token_filter_base {
	encoder: PhoneticEncoder;
	replace: boolean;
}