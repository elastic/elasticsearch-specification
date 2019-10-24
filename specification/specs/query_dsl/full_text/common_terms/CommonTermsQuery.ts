class CommonTermsQuery {
	analyzer: string;
	cutoff_frequency: double;
	high_frequency_operator: Operator;
	low_frequency_operator: Operator;
	minimum_should_match: MinimumShouldMatch;
	query: string;
}
