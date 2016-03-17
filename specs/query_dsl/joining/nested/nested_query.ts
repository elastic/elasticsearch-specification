
/**namespace:QueryDsl.Joining.Nested */
/**custom_serialization*/
interface nested_query {
	score_mode: NestedScoreMode;
	query: query_container;
	path: field;
	inner_hits: inner_hits;
}