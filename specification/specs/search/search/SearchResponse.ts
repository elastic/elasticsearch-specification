class SearchResponse<TDocument> extends ResponseBase {
	aggregations: Dictionary<string, Aggregate>;
	clusters: ClusterStatistics;
	documents: TDocument[];
	fields: Dictionary<string, LazyDocument>;
	hits_metadata: HitsMetadata<TDocument>;
	max_score: double;
	number_of_reduce_phases: long;
	profile: Profile;
	scroll_id: string;
	shards: ShardStatistics;
	suggest: SuggestDictionary<TDocument>;
	terminated_early: boolean;
	timed_out: boolean;
	took: long;
	total: long;
}
