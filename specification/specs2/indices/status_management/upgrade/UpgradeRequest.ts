@rest_spec_name("indices.upgrade")
class UpgradeRequest extends RequestBase {
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	wait_for_completion: boolean;
	@request_parameter()
	only_ancient_segments: boolean;
}
