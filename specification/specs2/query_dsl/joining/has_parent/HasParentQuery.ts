class HasParentQuery {
	parent_type: TypeName;
	score: boolean;
	query: QueryContainer;
	inner_hits: InnerHits;
	ignore_unmapped: boolean;
}
