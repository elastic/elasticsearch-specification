
/**namespace:Document.Single.TermVectors */
interface TermVectorsResponse extends Response {
	found: boolean;
	term_vectors: Map<string, TermVector>;
}