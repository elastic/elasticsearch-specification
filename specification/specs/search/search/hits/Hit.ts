class Hit<TDocument> {
	_explanation: Explanation;
	fields: Dictionary<string, LazyDocument>;
	highlight: Dictionary<string, string[]>;
	inner_hits: Dictionary<string, InnerHitsResult>;
	_nested: NestedIdentity;
	matched_queries: string[];
	_score: double;
	sort: any[];
}
