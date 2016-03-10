
/**namespace:Search.Suggesters.CompletionSuggester */
/**custom_serialization*/
interface FuzzySuggester {
	transpositions: boolean;
	min_length: integer;
	prefix_length: integer;
	fuzziness: Fuzziness;
	unicode_aware: boolean;
}