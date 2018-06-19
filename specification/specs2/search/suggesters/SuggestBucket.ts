class SuggestBucket {
	text: string;
	prefix: string;
	regex: string;
	term: TermSuggester;
	phrase: PhraseSuggester;
	completion: CompletionSuggester;
}
