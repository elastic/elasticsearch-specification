
/**namespace:Analysis.Analyzers */
interface pattern_analyzer extends analyzer_base {
	lowercase: boolean;
	pattern: string;
	flags: string;
	stopwords: stop_words;
}