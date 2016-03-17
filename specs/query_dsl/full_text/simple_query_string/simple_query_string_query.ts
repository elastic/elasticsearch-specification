
/**namespace:QueryDsl.FullText.SimpleQueryString */
/**custom_serialization*/
interface simple_query_string_query {
	fields: field[];
	query: string;
	analyzer: string;
	default_operator: Operator;
	flags: SimpleQueryStringFlags;
	locale: string;
	lowercase_expanded_terms: boolean;
	lenient: boolean;
	analyze_wildcard: boolean;
	minimum_should_match: minimum_should_match;
}