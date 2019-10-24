class WordDelimiterGraphTokenFilter extends TokenFilterBase {
	adjust_offsets: boolean;
	catenate_all: boolean;
	catenate_numbers: boolean;
	catenate_words: boolean;
	generate_number_parts: boolean;
	generate_word_parts: boolean;
	preserve_original: boolean;
	protected_words: string[];
	protected_words_path: string;
	split_on_case_change: boolean;
	split_on_numerics: boolean;
	stem_english_possessive: boolean;
	type_table: string[];
	type_table_path: string;
}
