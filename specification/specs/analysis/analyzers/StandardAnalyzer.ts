class StandardAnalyzer extends AnalyzerBase {
	@prop_serializer("NullableStringIntFormatter")
	max_token_length: integer;
	stopwords: StopWords;
}
