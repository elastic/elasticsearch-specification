
/**namespace:Analysis.TokenFilters.WordDelimiter */
interface word_delimiter_token_filter extends token_filter_base {
	generate_word_parts: boolean;
	generate_number_parts: boolean;
	catenate_words: boolean;
	catenate_numbers: boolean;
	catenate_all: boolean;
	split_on_case_change: boolean;
	preserve_original: boolean;
	split_on_numerics: boolean;
	stem_english_possessive: boolean;
	protected_words: string[];
	protected_words_path : string;
	type_table: string[];
	type_table_path: string;
}