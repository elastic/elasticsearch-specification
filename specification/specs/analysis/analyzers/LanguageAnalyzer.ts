class LanguageAnalyzer extends AnalyzerBase {
	language: Language;
	stem_exclusion: string[];
	stopwords: StopWords;
	stopwords_path: string;
	type: string;
}
