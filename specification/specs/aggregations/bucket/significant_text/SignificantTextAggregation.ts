class SignificantTextAggregation {
	background_filter: QueryContainer;
	chi_square: ChiSquareHeuristic;
	exclude: IncludeExclude;
	execution_hint: TermsAggregationExecutionHint;
	field: Field;
	filter_duplicate_text: boolean;
	google_normalized_distance: GoogleNormalizedDistanceHeuristic;
	include: IncludeExclude;
	minimum_document_count: long;
	mutual_information: MutualInformationHeuristic;
	percentage_score: PercentageScoreHeuristic;
	script: ScriptedHeuristic;
	shard_minimum_document_count: long;
	shard_size: integer;
	size: integer;
	source_fields: Field[];
}
