@rest_spec_name("indices.flush")
class FlushRequest extends RequestBase {
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	force: boolean;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	wait_if_ongoing: boolean;
}
