@rest_spec_name("search")
class SearchRequest extends RequestBase {
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	allow_partial_search_results: boolean;
	@request_parameter()
	analyze_wildcard: boolean;
	@request_parameter()
	analyzer: string;
	@request_parameter()
	batched_reduce_size: long;
	@request_parameter()
	ccs_minimize_roundtrips: boolean;
	@request_parameter()
	default_operator: DefaultOperator;
	@request_parameter()
	df: string;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	ignore_throttled: boolean;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	lenient: boolean;
	@request_parameter()
	max_concurrent_shard_requests: long;
	@request_parameter()
	pre_filter_shard_size: long;
	@request_parameter()
	preference: string;
	@request_parameter()
	request_cache: boolean;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	scroll: Time;
	@request_parameter()
	search_type: SearchType;
	@request_parameter()
	sequence_number_primary_term: boolean;
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
	total_hits_as_integer: boolean;
	@request_parameter()
	typed_keys: boolean;
	aggregations: Dictionary<string, AggregationContainer>;
	collapse: FieldCollapse;
	@request_parameter()
	doc_value_fields: Field[];
	explain: boolean;
	from: integer;
	highlight: Highlight;
	indices_boost: Dictionary<IndexName, double>;
	min_score: double;
	post_filter: QueryContainer;
	profile: boolean;
	query: QueryContainer;
	rescore: Rescore[];
	script_fields: Dictionary<string, ScriptField>;
	search_after: any[];
	size: integer;
	slice: SlicedScroll;
	sort: Sort[];
	source: Union<boolean, SourceFilter>;
	@request_parameter()
	stored_fields: Field[];
	suggest: Dictionary<string, SuggestBucket>;
	terminate_after: long;
	timeout: string;
	track_scores: boolean;
	@request_parameter()
	track_total_hits: boolean;
	version: boolean;
}
