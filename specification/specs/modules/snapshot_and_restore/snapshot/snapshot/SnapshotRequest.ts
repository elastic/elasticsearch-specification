@rest_spec_name("snapshot.create")
class SnapshotRequest extends RequestBase {
	ignore_unavailable: boolean;
	include_global_state: boolean;
	@prop_serializer("IndicesMultiSyntaxFormatter")
	indices: Indices;
	partial: boolean;
	metadata: Dictionary<string, any>;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	wait_for_completion: boolean;
}
