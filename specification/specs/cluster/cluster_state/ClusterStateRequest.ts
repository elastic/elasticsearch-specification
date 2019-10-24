@rest_spec_name("cluster.state")
class ClusterStateRequest extends RequestBase {
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	flat_settings: boolean;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	local: boolean;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	wait_for_metadata_version: long;
	@request_parameter()
	wait_for_timeout: Time;
}
