class SuggestOption<TDocument> {
	collate_match: boolean;
	contexts: Dictionary<string, Context[]>;
	_score: double;
	fields: Dictionary<string, LazyDocument>;
	freq: long;
	highlighted: string;
	_id: string;
	_index: IndexName;
	score: double;
	_source: TDocument;
	text: string;
}
