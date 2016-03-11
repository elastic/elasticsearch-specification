
/**namespace:QueryDsl.FullText.QueryString */
/**custom_serialization*/
interface query_string_query {
	query: string;
	default_field: field;
	default_operator: Operator;
	analyzer: string;
	quote_analyzer: string;
	allow_leading_wildcard: boolean;
	lowercase_expanded_terms: boolean;
	enable_position_increments: boolean;
	fuzzy_max_expansions: integer;
	fuziness: fuzziness;
	fuzzy_prefix_length: integer;
	phrase_slop: double;
	analyze_wildcard: boolean;
	auto_generate_phrase_queries: boolean;
	max_determinized_states: integer;
	minimum_should_match: minimum_should_match;
	lenient: boolean;
	locale: string;
	time_zone: string;
	fields: field[];
	use_dis_max: boolean;
	tie_breaker: double;
	rewrite: RewriteMultiTerm;
	fuzzy_rewrite: RewriteMultiTerm;
	quote_field_suffix: string;
	escape: boolean;
}