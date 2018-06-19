class CompletionSuggester {
	prefix: string;
	regex: string;
	fuzzy: FuzzySuggester;
	contexts: Map<string, SuggestContextQuery[]>;
}
