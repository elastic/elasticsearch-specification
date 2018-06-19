class LanguageAnalyzer extends AnalyzerBase {
	type: string;
	@prop_serializer("StopWordsJsonConverter")
	stopwords: StopWords;
	stem_exclusion: string[];
	language: Language;
	stopwords_path: string;
}
