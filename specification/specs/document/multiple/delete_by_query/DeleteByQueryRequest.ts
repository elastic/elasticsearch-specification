@rest_spec_name("delete_by_query")
class DeleteByQueryRequest extends RequestBase {
	query: QueryContainer;
	slice: SlicedScroll;
	max_docs: long;
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	analyze_wildcard: boolean;
	@request_parameter()
	analyzer: string;
	@request_parameter()
	conflicts: Conflicts;
	@request_parameter()
	default_operator: DefaultOperator;
	@request_parameter()
	df: string;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	from: long;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	lenient: boolean;
	@request_parameter()
	preference: string;
	@request_parameter()
	query_on_query_string: string;
	@request_parameter()
	refresh: boolean;
	@request_parameter()
	request_cache: boolean;
	@request_parameter()
	requests_per_second: long;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	scroll: Time;
	@request_parameter()
	scroll_size: long;
	@request_parameter()
	search_timeout: Time;
	@request_parameter()
	search_type: SearchType;
	@request_parameter()
	size: long;
	@request_parameter()
	slices: long;
	@request_parameter()
	sort: string[];
	@request_parameter()
	source_enabled: boolean;
	@request_parameter()
	source_excludes: Field[];
	@request_parameter()
	source_includes: Field[];
	@request_parameter()
	stats: string[];
	@request_parameter()
	terminate_after: long;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	version: boolean;
	@request_parameter()
	wait_for_active_shards: string;
	@request_parameter()
	wait_for_completion: boolean;
}
