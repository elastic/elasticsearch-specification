
/**namespace:Document.Single.TermVectors */
interface TermVector {
	field_statistics: FieldStatistics;
	terms: Map<string, TermVectorTerm>;
}