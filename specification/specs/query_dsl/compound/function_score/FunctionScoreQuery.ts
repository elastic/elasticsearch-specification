class FunctionScoreQuery {
	query: QueryContainer;
	functions: ScoreFunction[];
	max_boost: double;
	score_mode: FunctionScoreMode;
	boost_mode: FunctionBoostMode;
	min_score: double;
}
