class QueryStringQuery {
	type: TextQueryType;
	query: string;
	default_field: Field;
	default_operator: Operator;
	analyzer: string;
	quote_analyzer: string;
	allow_leading_wildcard: boolean;
	fuzzy_max_expansions: integer;
	fuzziness: Fuzziness;
	fuzzy_prefix_length: integer;
	phrase_slop: double;
	analyze_wildcard: boolean;
	max_determinized_states: integer;
	minimum_should_match: MinimumShouldMatch;
	lenient: boolean;
	fields: Field[];
	tie_breaker: double;
	rewrite: MultiTermQueryRewrite;
	fuzzy_rewrite: MultiTermQueryRewrite;
	quote_field_suffix: string;
	escape: boolean;
}
