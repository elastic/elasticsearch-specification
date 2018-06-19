class TermVectors {
	index: string;
	type: string;
	id: string;
	version: long;
	found: boolean;
	took: long;
	term_vectors: Map<Field, TermVector>;
}
