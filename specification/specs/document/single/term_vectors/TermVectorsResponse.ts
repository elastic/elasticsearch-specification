class TermVectorsResponse extends ResponseBase implements IResponse {
	is_valid: boolean;
	found: boolean;
	_id: string;
	_index: string;
	term_vectors: Dictionary<Field, TermVector>;
	took: long;
	_type: string;
	_version: long;
}
