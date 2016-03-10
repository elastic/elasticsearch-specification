
/**namespace:Search.Suggesters.CompletionSuggester */
/**custom_serialization*/
interface CompletionSuggester {
	fuzzy: FuzzySuggester;
	context: Map<string, any>;
}