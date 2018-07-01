@rest_spec_name("update_by_query")
class UpdateByQueryRequest extends RequestBase {
	query: QueryContainer;
	script: Script;
	@request_parameter()
	analyzer: string;
	@request_parameter()
	analyze_wildcard: boolean;
	@request_parameter()
	default_operator: DefaultOperator;
	@request_parameter()
	df: string;
	@request_parameter()
	from: long;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	conflicts: Conflicts;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	lenient: boolean;
	@request_parameter()
	pipeline: string;
	@request_parameter()
	preference: string;
	@request_parameter()
	query_on_query_string: string;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	scroll: Time;
	@request_parameter()
	search_type: SearchType;
	@request_parameter()
	search_timeout: Time;
	@request_parameter()
	size: long;
	@request_parameter()
	sort: string[];
	@request_parameter()
	source_enabled: boolean;
	@request_parameter()
	source_exclude: Field[];
	@request_parameter()
	source_include: Field[];
	@request_parameter()
	terminate_after: long;
	@request_parameter()
	stats: string[];
	@request_parameter()
	version: boolean;
	@request_parameter()
	version_type: boolean;
	@request_parameter()
	request_cache: boolean;
	@request_parameter()
	refresh: boolean;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	wait_for_active_shards: string;
	@request_parameter()
	scroll_size: long;
	@request_parameter()
	wait_for_completion: boolean;
	@request_parameter()
	requests_per_second: long;
	@request_parameter()
	slices: long;
}
