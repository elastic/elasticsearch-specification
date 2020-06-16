@class_serializer("FieldNameQueryFormatter`2")
class CommonTermsQuery {
	analyzer: string;
	cutoff_frequency: double;
	high_freq_operator: Operator;
	low_freq_operator: Operator;
	minimum_should_match: MinimumShouldMatch;
	query: string;
}
