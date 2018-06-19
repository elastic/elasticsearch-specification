class SimpleQueryStringQuery {
	fields: Field[];
	query: string;
	analyzer: string;
	default_operator: Operator;
	flags: SimpleQueryStringFlags;
	lenient: boolean;
	analyze_wildcard: boolean;
	minimum_should_match: MinimumShouldMatch;
	quote_field_suffix: string;
}
