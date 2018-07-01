@rest_spec_name("snapshot.verify_repository")
class VerifyRepositoryRequest extends RequestBase {
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
}
