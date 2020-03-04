class InlineGet<TDocument> {
	fields: Dictionary<string, LazyDocument>;
	found: boolean;
	_source: TDocument;
}
