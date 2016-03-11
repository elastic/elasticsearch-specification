
/**namespace:QueryDsl.TermLevel.Fuzzy */
/**custom_serialization*/
interface fuzzy_query {
	prefix_length: integer;
	rewrite: RewriteMultiTerm;
	max_expansions: integer;
	transpositions: boolean;
}