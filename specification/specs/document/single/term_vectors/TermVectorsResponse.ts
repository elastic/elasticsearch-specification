class TermVectorsResponse extends ResponseBase implements IResponse {
	is_valid: boolean;
	found: boolean;
	id: string;
	index: string;
	term_vectors: Dictionary<Field, TermVector>;
	took: long;
	type: string;
	version: long;
}
