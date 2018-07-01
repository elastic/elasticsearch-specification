class SignificantTermsAggregation {
	field: Field;
	size: integer;
	shard_size: integer;
	min_doc_count: long;
	shard_min_doc_count: long;
	execution_hint: TermsAggregationExecutionHint;
	include: SignificantTermsIncludeExclude;
	exclude: SignificantTermsIncludeExclude;
	mutual_information: MutualInformationHeuristic;
	chi_square: ChiSquareHeuristic;
	gnd: GoogleNormalizedDistanceHeuristic;
	percentage: PercentageScoreHeuristic;
	script_heuristic: ScriptedHeuristic;
	background_filter: QueryContainer;
}
