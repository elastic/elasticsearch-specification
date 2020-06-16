class KeepWordsTokenFilter extends TokenFilterBase {
	keep_words: string[];
	@prop_serializer("NullableStringBooleanFormatter")
	keep_words_case: boolean;
	keep_words_path: string;
}
