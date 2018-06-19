class NestedQuery {
	score_mode: NestedScoreMode;
	query: QueryContainer;
	path: Field;
	inner_hits: InnerHits;
	ignore_unmapped: boolean;
}
