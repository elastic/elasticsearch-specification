
/**namespace:Search.Search */
interface SearchResponse<T> extends Response {
	_shards: ShardsMetaData;
	hits: HitsMetaData<T>;
	/**custom_serialization */
	aggregations: Map<string, Aggregate>;
	Aggs: AggregationsHelper;
	suggest: Map<string, Suggest[]>;
	took: integer;
	timed_out: boolean;
	terminated_early: boolean;
	_scroll_id: string;
	Total: long;
	MaxScore: double;
	Documents: T[];
	Hits: Hit<T>[];
	Fields: Map<string, any>;
	Highlights: Map<string, Map<string, HighlightHit>>;
}