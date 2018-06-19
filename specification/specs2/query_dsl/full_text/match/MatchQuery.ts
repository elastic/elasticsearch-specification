@class_serializer("FieldNameQueryJsonConverter`1")
class MatchQuery {
	query: string;
	analyzer: string;
	fuzzy_rewrite: MultiTermQueryRewrite;
	fuzziness: Fuzziness;
	fuzzy_transpositions: boolean;
	cutoff_frequency: double;
	prefix_length: integer;
	max_expansions: integer;
	lenient: boolean;
	minimum_should_match: MinimumShouldMatch;
	operator: Operator;
	zero_terms_query: ZeroTermsQuery;
}
