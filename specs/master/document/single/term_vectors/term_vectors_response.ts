
/**namespace:Document.Single.TermVectors */
interface term_vectors_response extends response {
	found: boolean;
	term_vectors: map<string, term_vector>[];
}