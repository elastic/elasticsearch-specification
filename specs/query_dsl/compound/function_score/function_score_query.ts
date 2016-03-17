
/**namespace:QueryDsl.Compound.FunctionScore */
/**custom_serialization*/
interface function_score_query {
	query: query_container;
	functions: score_function[];
	max_boost: double;
	score_mode: FunctionScoreMode;
	boost_mode: FunctionBoostMode;
	min_score: double;
}