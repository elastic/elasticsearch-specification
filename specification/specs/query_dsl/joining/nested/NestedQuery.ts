class NestedQuery {
	ignore_unmapped: boolean;
	inner_hits: InnerHits;
	path: Field;
	query: QueryContainer;
	score_mode: NestedScoreMode;
}
