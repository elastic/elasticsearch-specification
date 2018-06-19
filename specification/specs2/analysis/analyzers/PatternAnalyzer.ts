class PatternAnalyzer extends AnalyzerBase {
	lowercase: boolean;
	pattern: string;
	flags: string;
	@prop_serializer("StopWordsJsonConverter")
	stopwords: StopWords;
}
