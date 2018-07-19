class SearchResponse<T> extends ResponseBase {
	_shards: ShardStatistics;
	aggregations: Dictionary<string, Aggregate>;
	aggs: Dictionary<string, Aggregate>;
	profile: Profile;
	suggest: Dictionary<string, Suggest<T>[]>;
	took: long;
	timed_out: boolean;
	terminated_early: boolean;
	_scroll_id: string;
	hits: HitsMetadata<T>;
	num_reduce_phases: long;
	total: long;
	max_score: double;
	documents: T[];
	fields: Dictionary<string, LazyDocument>;
}
