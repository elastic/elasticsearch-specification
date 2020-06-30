@rest_spec_name("snapshot.status")
class SnapshotStatusRequest extends RequestBase {
	query_parameters: {
		ignore_unavailable: boolean;
		master_timeout: Time;
	}
	body: {
	}
}
