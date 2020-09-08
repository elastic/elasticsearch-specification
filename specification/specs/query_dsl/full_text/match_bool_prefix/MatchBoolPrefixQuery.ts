@class_serializer("FieldNameQueryFormatter`2")
class MatchBoolPrefixQuery {
	analyzer: string;
	fuzziness: Fuzziness;
	fuzzy_rewrite: MultiTermQueryRewrite;
	fuzzy_transpositions: boolean;
	max_expansions: integer;
	minimum_should_match: MinimumShouldMatch;
	operator: Operator;
	prefix_length: integer;
	query: string;
  boost: float;
}
