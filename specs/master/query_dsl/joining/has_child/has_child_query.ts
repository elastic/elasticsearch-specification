
/**namespace:QueryDsl.Joining.HasChild */
/**custom_serialization*/
interface has_child_query {
	type: type_name;
	score_mode: ChildScoreMode;
	min_children: integer;
	max_children: integer;
	query: query_container;
	inner_hits: inner_hits;
}