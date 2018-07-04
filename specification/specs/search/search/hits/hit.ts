class Hit<TDocument> {
	score: double;
	fields: Dictionary<string, LazyDocument>;
	sorts: any[];
	highlights: Dictionary<string, HighlightHit>;
	explanation: Explanation;
	matched_queries: string[];
	inner_hits: Dictionary<string, InnerHitsResult>;
}
