class SnapshotRequest extends RequestBase {
	@prop_serializer("IndicesMultiSyntaxJsonConverter")
	indices: Indices;
	ignore_unavailable: boolean;
	include_global_state: boolean;
	partial: boolean;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	wait_for_completion: boolean;
}
