class HitMetadata<TDocument> {
	_id: string;
	_index: string;
	_primary_term: long;
	_routing: string;
	_seq_no: long;
	@prop_serializer("SourceFormatter`1")
	_source: TDocument;
	_type: string;
	_version: long;
}
