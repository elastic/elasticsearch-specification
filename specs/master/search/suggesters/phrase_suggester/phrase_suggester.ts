
/**namespace:Search.Suggesters.PhraseSuggester */
/**custom_serialization*/
interface PhraseSuggester {
	gram_size: integer;
	real_word_error_likelihood: double;
	confidence: double;
	max_errors: double;
	separator: string;
	direct_generator: DirectGenerator[];
	highlight: PhraseSuggestHighlight;
	collate: PhraseSuggestCollate;
}