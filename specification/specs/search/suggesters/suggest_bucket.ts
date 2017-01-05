
/**namespace:Search.Suggesters */
/**custom_serialization*/
interface suggest_bucket {
	text: string;
	term: term_suggester;
	phrase: phrase_suggester;
	completion: completion_suggester;
}