class CommonGramsTokenFilter extends TokenFilterBase {
	@prop_serializer("SingleOrEnumerableFormatter`1")
	common_words: string[];
	common_words_path: string;
	@prop_serializer("NullableStringBooleanFormatter")
	ignore_case: boolean;
	@prop_serializer("NullableStringBooleanFormatter")
	query_mode: boolean;
}
