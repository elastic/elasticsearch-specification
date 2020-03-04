@rest_spec_name("security.create_api_key")
class CreateApiKeyRequest extends RequestBase {
	@request_parameter()
	refresh: Refresh;
	expiration: Time;
	name: string;
	role_descriptors: Dictionary<string, ApiKeyRole>;
}
