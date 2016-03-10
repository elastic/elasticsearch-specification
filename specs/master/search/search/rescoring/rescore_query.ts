
/**namespace:Search.Search.Rescoring */
/**custom_serialization*/
interface RescoreQuery {
	rescore_query: QueryContainer;
	query_weight: double;
	rescore_query_weight: double;
	score_mode: ScoreMode;
}