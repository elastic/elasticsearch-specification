class PhraseSuggester {
	collate: PhraseSuggestCollate;
	confidence: double;
	direct_generator: DirectGenerator[];
	force_unigrams: boolean;
	gram_size: integer;
	highlight: PhraseSuggestHighlight;
	max_errors: double;
	real_word_error_likelihood: double;
	separator: string;
	shard_size: integer;
	smoothing: SmoothingModelContainer;
	text: string;
	token_limit: integer;
}
