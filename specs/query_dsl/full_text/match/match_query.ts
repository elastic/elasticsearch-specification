
/**namespace:QueryDsl.FullText.Match */
/**custom_serialization*/
interface match_query {
	type: string;
	query: string;
	analyzer: string;
	/**custom_serialization */
	fuzzy_rewrite: RewriteMultiTerm;
	fuzziness: fuzziness;
	fuzzy_transpositions: boolean;
	cutoff_frequency: double;
	prefix_length: integer;
	max_expansions: integer;
	slop: integer;
	lenient: boolean;
	minimum_should_match: minimum_should_match;
	operator: Operator;
	zero_terms_query: ZeroTermsQuery;
}