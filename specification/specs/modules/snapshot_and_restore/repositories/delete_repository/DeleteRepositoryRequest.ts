@rest_spec_name("snapshot.delete_repository")
class DeleteRepositoryRequest extends RequestBase {
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
}
