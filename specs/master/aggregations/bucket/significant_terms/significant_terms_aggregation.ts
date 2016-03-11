
/**namespace:Aggregations.Bucket.SignificantTerms */
interface significant_terms_aggregation {
	field: field;
	size: integer;
	shard_size: integer;
	min_doc_count: integer;
	execution_hint: TermsAggregationExecutionHint;
	include: map<string, string>[];
	exclude: map<string, string>[];
	mutual_information: mutual_information_heuristic;
	chi_square: chi_square_heuristic;
	gnd: google_normalized_distance_heuristic;
	percentage: percentage_score_heuristic;
	script_heuristic: scripted_heuristic;
	background_filter: query_container;
}