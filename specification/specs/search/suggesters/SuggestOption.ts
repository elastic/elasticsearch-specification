class SuggestOption<TDocument> {
	text: string;
	score: double;
	freq: long;
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	@prop_serializer("SourceConverter")
	_source: TDocument;
	contexts: Dictionary<string, Context[]>[];
	highlighted: string;
	collate_match: boolean;
}
