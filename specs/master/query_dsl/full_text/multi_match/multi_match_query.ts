
/**namespace:QueryDsl.FullText.MultiMatch */
/**custom_serialization*/
interface multi_match_query {
	/**custom_serialization */
	type: TextQueryType;
	query: string;
	analyzer: string;
	/**custom_serialization */
	fuzzy_rewrite: RewriteMultiTerm;
	fuzziness: fuzziness;
	cutoff_frequency: double;
	prefix_length: integer;
	max_expansions: integer;
	slop: integer;
	lenient: boolean;
	use_dis_max: boolean;
	tie_breaker: double;
	minimum_should_match: minimum_should_match;
	operator: Operator;
	fields: field[];
	zero_terms_query: ZeroTermsQuery;
}