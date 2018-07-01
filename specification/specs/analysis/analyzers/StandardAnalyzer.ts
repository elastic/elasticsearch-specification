class StandardAnalyzer extends AnalyzerBase {
	@prop_serializer("StopWordsJsonConverter")
	stopwords: StopWords;
	max_token_length: integer;
}
