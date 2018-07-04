@rest_spec_name("search")
class SearchRequest extends RequestBase {
	timeout: string;
	from: integer;
	size: integer;
	explain: boolean;
	version: boolean;
	track_scores: boolean;
	profile: boolean;
	min_score: double;
	terminate_after: long;
	@request_parameter()
	docvalue_fields: Field[];
	@request_parameter()
	stored_fields: Field[];
	script_fields: Dictionary<string, ScriptField>[];
	_source: Union<boolean, SourceFilter>;
	sort: Sort[];
	search_after: any[];
	indices_boost: Dictionary<IndexName, double>[];
	post_filter: QueryContainer;
	slice: SlicedScroll;
	query: QueryContainer;
	rescore: Rescore[];
	suggest: Dictionary<string, SuggestBucket>[];
	highlight: Highlight;
	collapse: FieldCollapse;
	aggs: Dictionary<string, AggregationContainer>[];
	@request_parameter()
	analyzer: string;
	@request_parameter()
	analyze_wildcard: boolean;
	@request_parameter()
	default_operator: DefaultOperator;
	@request_parameter()
	df: string;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	lenient: boolean;
	@request_parameter()
	preference: string;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	scroll: Time;
	@request_parameter()
	search_type: SearchType;
	@request_parameter()
	stats: string[];
	@request_parameter()
	suggest_field: Field;
	@request_parameter()
	suggest_mode: SuggestMode;
	@request_parameter()
	suggest_size: long;
	@request_parameter()
	suggest_text: string;
	@request_parameter()
	track_total_hits: boolean;
	@request_parameter()
	typed_keys: boolean;
	@request_parameter()
	request_cache: boolean;
	@request_parameter()
	batched_reduce_size: long;
	@request_parameter()
	max_concurrent_shard_requests: long;
	@request_parameter()
	pre_filter_shard_size: long;
}
