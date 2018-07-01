@rest_spec_name("snapshot.get_repository")
class GetRepositoryRequest extends RequestBase {
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	local: boolean;
}
