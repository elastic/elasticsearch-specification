@rest_spec_name("snapshot.get_repository")
class GetRepositoryRequest extends RequestBase {
	@request_parameter()
	local: boolean;
	@request_parameter()
	master_timeout: Time;
}
