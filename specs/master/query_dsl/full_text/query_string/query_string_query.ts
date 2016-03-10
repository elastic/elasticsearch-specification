
/**namespace:QueryDsl.FullText.QueryString */
/**custom_serialization*/
interface QueryStringQuery {
	query: string;
	default_field: Field;
	default_operator: Operator;
	analyzer: string;
	quote_analyzer: string;
	allow_leading_wildcard: boolean;
	lowercase_expanded_terms: boolean;
	enable_position_increments: boolean;
	fuzzy_max_expansions: integer;
	fuziness: Fuzziness;
	fuzzy_prefix_length: integer;
	phrase_slop: double;
	analyze_wildcard: boolean;
	auto_generate_phrase_queries: boolean;
	max_determinized_states: integer;
	minimum_should_match: MinimumShouldMatch;
	lenient: boolean;
	locale: string;
	time_zone: string;
	fields: Field[];
	use_dis_max: boolean;
	tie_breaker: double;
	rewrite: RewriteMultiTerm;
	fuzzy_rewrite: RewriteMultiTerm;
	quote_field_suffix: string;
	escape: boolean;
}