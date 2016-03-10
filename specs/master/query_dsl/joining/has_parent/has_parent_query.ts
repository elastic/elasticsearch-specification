
/**namespace:QueryDsl.Joining.HasParent */
/**custom_serialization*/
interface HasParentQuery {
	type: TypeName;
	score_mode: ParentScoreMode;
	query: QueryContainer;
	inner_hits: InnerHits;
}