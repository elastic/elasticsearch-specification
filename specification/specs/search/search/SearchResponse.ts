class SearchResponse<T> extends ResponseBase {
	_shards: ShardStatistics;
	aggregations: Map<string, Aggregate>;
	aggs: Map<string, Aggregate>;
	profile: Profile;
	suggest: Map<string, Suggest<T>[]>;
	took: long;
	timed_out: boolean;
	terminated_early: boolean;
	_scroll_id: string;
	hits: HitsMetadata<T>;
	num_reduce_phases: long;
	total: long;
	max_score: double;
	documents: T[];
	//hits: Hit<T>[];
	fields: Map<string, LazyDocument>;
}
