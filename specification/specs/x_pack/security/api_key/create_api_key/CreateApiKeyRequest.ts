@rest_spec_name("security.create_api_key")
class CreateApiKeyRequest extends RequestBase {
	@request_parameter()
	refresh: Refresh;
	expiration: Time;
	name: string;
	roles: Dictionary<string, ApiKeyRole>;
}
