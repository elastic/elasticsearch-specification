class TermSuggester {
	text: string;
	shard_size: integer;
	prefix_length: integer;
	suggest_mode: SuggestMode;
	min_word_length: integer;
	max_edits: integer;
	max_inspections: integer;
	min_doc_freq: double;
	max_term_freq: double;
	sort: SuggestSort;
	lowercase_terms: boolean;
	string_distance: StringDistance;
}
