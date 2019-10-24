class CompletionSuggester {
	contexts: Dictionary<string, SuggestContextQuery[]>;
	fuzzy: SuggestFuzziness;
	prefix: string;
	regex: string;
	skip_duplicates: boolean;
}
