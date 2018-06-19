class SnowballAnalyzer extends AnalyzerBase {
	language: SnowballLanguage;
	@prop_serializer("StopWordsJsonConverter")
	stopwords: StopWords;
}
