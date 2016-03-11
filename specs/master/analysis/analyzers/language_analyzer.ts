
/**namespace:Analysis.Analyzers */
interface language_analyzer extends analyzer_base {
	Type: string;
	stopwords: stop_words;
	stem_exclusion: string[];
	Language: Language;
	stopwords_path: string;
}