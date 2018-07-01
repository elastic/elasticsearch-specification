class GetResponse<TDocument> extends ResponseBase {
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	found: boolean;
	@prop_serializer("SourceConverter")
	_source: TDocument;
	fields: Map<string, LazyDocument>;
	_parent: string;
	_routing: string;
}
