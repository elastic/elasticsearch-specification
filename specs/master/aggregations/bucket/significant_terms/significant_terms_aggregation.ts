
/**namespace:Aggregations.Bucket.SignificantTerms */
interface SignificantTermsAggregation {
	field: Field;
	size: integer;
	shard_size: integer;
	min_doc_count: integer;
	execution_hint: TermsAggregationExecutionHint;
	include: Map<string, string>;
	exclude: Map<string, string>;
	mutual_information: MutualInformationHeuristic;
	chi_square: ChiSquareHeuristic;
	gnd: GoogleNormalizedDistanceHeuristic;
	percentage: PercentageScoreHeuristic;
	script_heuristic: ScriptedHeuristic;
	background_filter: QueryContainer;
}