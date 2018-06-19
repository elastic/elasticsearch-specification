class FlushRequest extends RequestBase {
	@request_parameter()
	force: boolean;
	@request_parameter()
	wait_if_ongoing: boolean;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
}
