
/**namespace:Analysis.TokenFilters.CompoundWord */
interface compound_word_token_filter_base extends token_filter_base {
	WordList: string[];
	WordListPath: string;
	MinWordSize: integer;
	MinSubwordSize: integer;
	MaxSubwordSize: integer;
	OnlyLongestMatch: boolean;
	HyphenationPatternsPath: string;
}