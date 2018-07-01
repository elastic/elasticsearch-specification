class StopAnalyzer extends AnalyzerBase {
	@prop_serializer("StopWordsJsonConverter")
	stopwords: StopWords;
	stopwords_path: string;
}
