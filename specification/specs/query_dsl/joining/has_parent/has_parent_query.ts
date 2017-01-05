
/**namespace:QueryDsl.Joining.HasParent */
/**custom_serialization*/
interface has_parent_query {
	type: type_name;
	score_mode: ParentScoreMode;
	query: query_container;
	inner_hits: inner_hits;
}