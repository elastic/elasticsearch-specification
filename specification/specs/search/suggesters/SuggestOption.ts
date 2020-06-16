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
	@prop_serializer("SourceFormatter`1")
	_source: TDocument;
	score: double;
	text: string;
}
