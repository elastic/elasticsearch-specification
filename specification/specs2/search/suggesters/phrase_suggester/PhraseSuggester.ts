class PhraseSuggester {
	text: string;
	shard_size: integer;
	gram_size: integer;
	real_word_error_likelihood: double;
	confidence: double;
	max_errors: double;
	separator: string;
	direct_generator: DirectGenerator[];
	highlight: PhraseSuggestHighlight;
	collate: PhraseSuggestCollate;
	smoothing: SmoothingModelContainer;
}
