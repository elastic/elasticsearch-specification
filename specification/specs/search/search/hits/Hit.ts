class Hit<TDocument> {
	explanation: Explanation;
	fields: Dictionary<string, LazyDocument>;
	highlight: Dictionary<string, string[]>;
	inner_hits: Dictionary<string, InnerHitsResult>;
	matched_queries: string[];
	nested: NestedIdentity;
	score: double;
	sorts: any[];
}
