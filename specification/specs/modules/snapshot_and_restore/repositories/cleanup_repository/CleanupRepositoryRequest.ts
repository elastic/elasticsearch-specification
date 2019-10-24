@rest_spec_name("snapshot.cleanup_repository")
class CleanupRepositoryRequest extends RequestBase {
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
}
