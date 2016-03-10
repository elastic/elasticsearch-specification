
/**namespace:Search.Search.Hits */
interface Hit<T> {
	fields: Map<string, any>;
	_source: T;
	_index: string;
	/**custom_serialization */
	inner_hits: Map<string, InnerHitsResult>;
	_score: double;
	_type: string;
	_version: long;
	_id: string;
	_parent: string;
	_routing: string;
	_timestamp: long;
	_ttl: long;
	sort: any[];
	Highlights: Map<string, HighlightHit>;
	_explanation: Explanation;
	matched_queries: string[];
}