
/**namespace:QueryDsl.FullText.CommonTerms */
/**custom_serialization*/
interface common_terms_query {
	query: string;
	cutoff_frequency: double;
	/**custom_serialization */
	low_freq_operator: Operator;
	/**custom_serialization */
	high_freq_operator: Operator;
	minimum_should_match: minimum_should_match;
	analyzer: string;
	disable_coord: boolean;
}