
/**namespace:Search.Suggesters.CompletionSuggester */
/**custom_serialization*/
interface fuzzy_suggester {
	transpositions: boolean;
	min_length: integer;
	prefix_length: integer;
	fuzziness: fuzziness;
	unicode_aware: boolean;
}