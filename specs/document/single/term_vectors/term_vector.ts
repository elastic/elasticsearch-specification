
/**namespace:Document.Single.TermVectors */
interface term_vector {
	field_statistics: field_statistics;
	terms: map<string, term_vector_term>[];
}