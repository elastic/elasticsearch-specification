
/**namespace:Search.Suggesters.TermSuggester */
/**custom_serialization*/
interface TermSuggester {
	prefix_len: integer;
	/**custom_serialization */
	suggest_mode: SuggestMode;
	min_word_len: integer;
	max_edits: integer;
	max_inspections: integer;
	min_doc_freq: double;
	max_term_freq: double;
}