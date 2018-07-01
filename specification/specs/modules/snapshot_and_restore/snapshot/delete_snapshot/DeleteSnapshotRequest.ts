@rest_spec_name("snapshot.delete")
class DeleteSnapshotRequest extends RequestBase {
	@request_parameter()
	master_timeout: Time;
}
