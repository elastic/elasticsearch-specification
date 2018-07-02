class CompletionSuggester {
	prefix: string;
	regex: string;
	fuzzy: FuzzySuggester;
	contexts: Dictionary<string, SuggestContextQuery[]>[];
}
