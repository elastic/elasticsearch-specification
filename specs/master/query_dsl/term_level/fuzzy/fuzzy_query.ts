
/**namespace:QueryDsl.TermLevel.Fuzzy */
/**custom_serialization*/
interface FuzzyQuery {
	prefix_length: integer;
	rewrite: RewriteMultiTerm;
	max_expansions: integer;
	transpositions: boolean;
}