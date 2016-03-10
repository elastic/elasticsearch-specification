
/**namespace:QueryDsl.Joining.Nested */
/**custom_serialization*/
interface NestedQuery {
	score_mode: NestedScoreMode;
	query: QueryContainer;
	path: Field;
	inner_hits: InnerHits;
}