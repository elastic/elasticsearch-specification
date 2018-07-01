@rest_spec_name("indices.get")
class GetIndexRequest extends RequestBase {
	@request_parameter()
	local: boolean;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	flat_settings: boolean;
	@request_parameter()
	include_defaults: boolean;
}
