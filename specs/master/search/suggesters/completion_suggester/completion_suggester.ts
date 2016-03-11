
/**namespace:Search.Suggesters.CompletionSuggester */
/**custom_serialization*/
interface completion_suggester {
	fuzzy: fuzzy_suggester;
	context: map<string, any>[];
}