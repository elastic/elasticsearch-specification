class WordDelimiterGraphTokenFilter extends TokenFilterBase {
	@prop_serializer("NullableStringBooleanFormatter")
	adjust_offsets: boolean;
	@prop_serializer("NullableStringBooleanFormatter")
	catenate_all: boolean;
	@prop_serializer("NullableStringBooleanFormatter")
	catenate_numbers: boolean;
	@prop_serializer("NullableStringBooleanFormatter")
	catenate_words: boolean;
	@prop_serializer("NullableStringBooleanFormatter")
	generate_number_parts: boolean;
	@prop_serializer("NullableStringBooleanFormatter")
	generate_word_parts: boolean;
	@prop_serializer("NullableStringBooleanFormatter")
	preserve_original: boolean;
	protected_words: string[];
	protected_words_path : string;
	@prop_serializer("NullableStringBooleanFormatter")
	split_on_case_change: boolean;
	@prop_serializer("NullableStringBooleanFormatter")
	split_on_numerics: boolean;
	@prop_serializer("NullableStringBooleanFormatter")
	stem_english_possessive: boolean;
	type_table: string[];
	type_table_path: string;
}
