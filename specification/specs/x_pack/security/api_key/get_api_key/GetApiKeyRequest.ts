@rest_spec_name("security.get_api_key")
class GetApiKeyRequest extends RequestBase {
	@request_parameter()
	id: string;
	@request_parameter()
	name: string;
	@request_parameter()
	owner: boolean;
	@request_parameter()
	realm_name: string;
	@request_parameter()
	username: string;
}
