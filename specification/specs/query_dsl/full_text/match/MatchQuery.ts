@class_serializer("FieldNameQueryFormatter`2")
class MatchQuery {
	analyzer: string;
	auto_generate_synonyms_phrase_query: boolean;
	cutoff_frequency: double;
	fuzziness: Fuzziness;
	fuzzy_rewrite: MultiTermQueryRewrite;
	fuzzy_transpositions: boolean;
	lenient: boolean;
	max_expansions: integer;
	minimum_should_match: MinimumShouldMatch;
	operator: Operator;
	prefix_length: integer;
	query: string;
	zero_terms_query: ZeroTermsQuery;
}
