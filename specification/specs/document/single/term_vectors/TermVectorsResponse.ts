class TermVectorsResponse extends ResponseBase {
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	found: boolean;
	took: long;
	@prop_serializer("ResolvableDictionaryJsonConverter`2")
	term_vectors: Map<Field, TermVector>;
}
