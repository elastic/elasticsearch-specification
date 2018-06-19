class GetSnapshotRequest extends RequestBase {
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	verbose: boolean;
}
