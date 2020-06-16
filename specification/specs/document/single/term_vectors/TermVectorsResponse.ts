class TermVectorsResponse extends ResponseBase implements IResponse {
	found: boolean;
	_id: string;
	_index: string;
	@prop_serializer("ResolvableReadOnlyDictionaryFormatter`2")
	term_vectors: Dictionary<Field, TermVector>;
	took: long;
	_type: string;
	_version: long;
}
