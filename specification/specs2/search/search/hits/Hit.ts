class Hit<TDocument> {
	score: double;
	fields: Map<string, LazyDocument>;
	sorts: any[];
	highlights: Map<string, HighlightHit>;
	explanation: Explanation;
	matched_queries: string[];
	inner_hits: Map<string, InnerHitsResult>;
}
