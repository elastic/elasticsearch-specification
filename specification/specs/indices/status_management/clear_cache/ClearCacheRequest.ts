@rest_spec_name("indices.clear_cache")
class ClearCacheRequest extends RequestBase {
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	fielddata: boolean;
	@request_parameter()
	fields: Field[];
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	query: boolean;
	@request_parameter()
	request: boolean;
}
