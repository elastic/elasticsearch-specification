class TermSuggester {
  lowercase_terms: boolean;
  max_edits: integer;
  max_inspections: integer;
  max_term_freq: float;
  min_doc_freq: float;
  min_word_length: integer;
  prefix_length: integer;
  shard_size: integer;
  sort: SuggestSort;
  string_distance: StringDistance;
  suggest_mode: SuggestMode;
  text: string;
}
