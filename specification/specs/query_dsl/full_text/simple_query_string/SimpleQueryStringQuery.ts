class SimpleQueryStringQuery extends QueryBase {
	analyzer: string;
	analyze_wildcard: boolean;
	auto_generate_synonyms_phrase_query: boolean;
	default_operator: Operator;
	fields: Field[];
	flags: SimpleQueryStringFlags;
	fuzzy_max_expansions: integer;
	fuzzy_prefix_length: integer;
	fuzzy_transpositions: boolean;
	lenient: boolean;
	minimum_should_match: MinimumShouldMatch;
	query: string;
	quote_field_suffix: string;
}
