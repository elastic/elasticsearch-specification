class SearchResponse<TDocument> extends ResponseBase {
	aggregations: Dictionary<string, Aggregate>;
	_clusters: ClusterStatistics;
	documents: TDocument[];
	fields: Dictionary<string, LazyDocument>;
	hits: HitsMetadata<TDocument>;
	max_score: double;
	num_reduce_phases: long;
	profile: Profile;
	_scroll_id: string;
	_shards: ShardStatistics;
	suggest: SuggestDictionary<TDocument>;
	terminated_early: boolean;
	timed_out: boolean;
	took: long;
	total: long;
}
