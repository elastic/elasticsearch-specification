class InlineGet<TDocument> {
	fields: Dictionary<string, LazyDocument>;
	found: boolean;
	@prop_serializer("SourceFormatter`1")
	_source: TDocument;
}
