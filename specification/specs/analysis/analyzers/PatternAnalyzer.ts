class PatternAnalyzer extends AnalyzerBase {
	flags: string;
	@prop_serializer("NullableStringBooleanFormatter")
	lowercase: boolean;
	pattern: string;
	stopwords: StopWords;
}
