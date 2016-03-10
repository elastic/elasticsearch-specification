
/**namespace:QueryDsl.FullText.MultiMatch */
/**custom_serialization*/
interface MultiMatchQuery {
	/**custom_serialization */
	type: TextQueryType;
	query: string;
	analyzer: string;
	/**custom_serialization */
	fuzzy_rewrite: RewriteMultiTerm;
	fuzziness: Fuzziness;
	cutoff_frequency: double;
	prefix_length: integer;
	max_expansions: integer;
	slop: integer;
	lenient: boolean;
	use_dis_max: boolean;
	tie_breaker: double;
	minimum_should_match: MinimumShouldMatch;
	operator: Operator;
	fields: Field[];
	zero_terms_query: ZeroTermsQuery;
}