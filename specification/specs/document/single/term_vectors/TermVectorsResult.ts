class TermVectorsResult {
	found: boolean;
	id: string;
	index: string;
	term_vectors: Dictionary<Field, TermVector>;
	took: long;
	version: long;
}
