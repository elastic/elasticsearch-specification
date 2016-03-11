
/**namespace:Search.Search */
interface search_response<t> extends response {
	_shards: shards_meta_data;
	hits: hits_meta_data<t>;
	/**custom_serialization */
	aggregations: map<string, aggregate>[];
	Aggs: aggregations_helper;
	suggest: map<string, suggest[]>[];
	took: integer;
	timed_out: boolean;
	terminated_early: boolean;
	_scroll_id: string;
	Total: long;
	MaxScore: double;
	Documents: t[];
	Hits: hit<t>[];
	Fields: map<string, any>[][];
	Highlights: map<string, map<string, highlight_hit>[]>[];
}