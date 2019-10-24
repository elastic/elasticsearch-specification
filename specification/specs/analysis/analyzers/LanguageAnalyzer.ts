class LanguageAnalyzer extends AnalyzerBase {
	language: Language;
	stem_exclusion_list: string[];
	stop_words: StopWords;
	stopwords_path: string;
	type: string;
}
