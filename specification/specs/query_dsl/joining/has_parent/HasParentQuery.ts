class HasParentQuery extends QueryBase {
	ignore_unmapped: boolean;
	inner_hits: InnerHits;
	parent_type: RelationName;
	query: QueryContainer;
	score: boolean;
}
