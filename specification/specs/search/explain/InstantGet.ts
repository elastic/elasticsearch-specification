class InstantGet<TDocument> {
	found: boolean;
	@prop_serializer("SourceConverter")
	_source: TDocument;
	fields: Map<string, LazyDocument>;
}
