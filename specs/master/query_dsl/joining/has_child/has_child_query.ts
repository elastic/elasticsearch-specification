
/**namespace:QueryDsl.Joining.HasChild */
/**custom_serialization*/
interface HasChildQuery {
	type: TypeName;
	score_mode: ChildScoreMode;
	min_children: integer;
	max_children: integer;
	query: QueryContainer;
	inner_hits: InnerHits;
}