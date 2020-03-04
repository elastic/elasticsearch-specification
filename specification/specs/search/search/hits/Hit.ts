class Hit<TDocument> {
	_explanation: Explanation;
	fields: Dictionary<string, LazyDocument>;
	highlight: Dictionary<string, string[]>;
	inner_hits: Dictionary<string, InnerHitsResult>;
	matched_queries: string[];
	_nested: NestedIdentity;
	_score: double;
	sort: any[];
}
