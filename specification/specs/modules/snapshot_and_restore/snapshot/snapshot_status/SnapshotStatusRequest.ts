@rest_spec_name("snapshot.status")
class SnapshotStatusRequest extends RequestBase {
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	master_timeout: Time;
}
