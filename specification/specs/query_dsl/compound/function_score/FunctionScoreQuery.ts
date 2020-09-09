class FunctionScoreQuery {
  boost_mode: FunctionBoostMode;
  functions: ScoreFunction[];
  max_boost: double;
  min_score: double;
  query: QueryContainer;
  score_mode: FunctionScoreMode;
  boost: float;
}
