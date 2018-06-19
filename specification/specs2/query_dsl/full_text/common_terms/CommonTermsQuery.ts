@class_serializer("FieldNameQueryJsonConverter`1")
class CommonTermsQuery {
	query: string;
	cutoff_frequency: double;
	low_freq_operator: Operator;
	high_freq_operator: Operator;
	minimum_should_match: MinimumShouldMatch;
	analyzer: string;
}
