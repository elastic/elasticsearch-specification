
/**namespace:Search.Suggesters.PhraseSuggester */
/**custom_serialization*/
interface phrase_suggester {
	gram_size: integer;
	real_word_error_likelihood: double;
	confidence: double;
	max_errors: double;
	separator: string;
	direct_generator: direct_generator[];
	highlight: phrase_suggest_highlight;
	collate: phrase_suggest_collate;
}