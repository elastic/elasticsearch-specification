@rest_spec_name("search_shards")
class SearchShardsRequest extends RequestBase {
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	local: boolean;
	@request_parameter()
	preference: string;
	@request_parameter()
	routing: Routing;
}
