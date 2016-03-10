
/**namespace:QueryDsl.FullText.SimpleQueryString */
/**custom_serialization*/
interface SimpleQueryStringQuery {
	fields: Field[];
	query: string;
	analyzer: string;
	default_operator: Operator;
	flags: SimpleQueryStringFlags;
	locale: string;
	lowercase_expanded_terms: boolean;
	lenient: boolean;
	analyze_wildcard: boolean;
	minimum_should_match: MinimumShouldMatch;
}