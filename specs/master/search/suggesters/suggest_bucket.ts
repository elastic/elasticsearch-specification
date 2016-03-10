
/**namespace:Search.Suggesters */
/**custom_serialization*/
interface SuggestBucket {
	text: string;
	term: TermSuggester;
	phrase: PhraseSuggester;
	completion: CompletionSuggester;
}