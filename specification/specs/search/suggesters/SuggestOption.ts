class SuggestOption<TDocument> {
	collate_match: boolean;
	contexts: Dictionary<string, Context[]>;
	document_score: double;
	fields: Dictionary<string, LazyDocument>;
	frequency: long;
	highlighted: string;
	id: string;
	index: IndexName;
	score: double;
	source: TDocument;
	suggest_score: double;
	text: string;
}
