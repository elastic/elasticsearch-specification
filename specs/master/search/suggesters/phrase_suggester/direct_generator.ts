
/**namespace:Search.Suggesters.PhraseSuggester */
/**custom_serialization*/
interface direct_generator {
	field: field;
	size: integer;
	prefix_len: integer;
	/**custom_serialization */
	suggest_mode: SuggestMode;
	min_word_len: integer;
	max_edits: integer;
	max_inspections: double;
	min_doc_freq: double;
	max_term_freq: double;
	pre_filter: string;
	post_filter: string;
}