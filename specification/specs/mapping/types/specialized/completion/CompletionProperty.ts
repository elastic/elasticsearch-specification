class CompletionProperty extends DocValuesPropertyBase {
	search_analyzer: string;
	analyzer: string;
	preserve_separators: boolean;
	preserve_position_increments: boolean;
	max_input_length: integer;
	contexts: SuggestContext[];
}
