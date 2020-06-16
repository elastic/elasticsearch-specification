class StopTokenFilter extends TokenFilterBase {
	@prop_serializer("NullableStringBooleanFormatter")
	ignore_case: boolean;
	@prop_serializer("NullableStringBooleanFormatter")
	remove_trailing: boolean;
	stopwords: StopWords;
	stopwords_path: string;
}
