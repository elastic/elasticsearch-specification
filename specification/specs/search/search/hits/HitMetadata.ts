class HitMetadata<TDocument> {
	index: string;
	type: string;
	version: long;
	routing: string;
	id: string;
	parent: string;
	@prop_serializer("SourceConverter")
	source: TDocument;
}
