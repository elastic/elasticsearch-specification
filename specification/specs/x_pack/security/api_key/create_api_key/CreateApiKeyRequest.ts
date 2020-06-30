@rest_spec_name("security.create_api_key")
class CreateApiKeyRequest extends RequestBase {
	query_parameters: {
		refresh: Refresh;
	}
	body: {
		expiration: Time;
		name: string;
		role_descriptors: Dictionary<string, ApiKeyRole>;
	}
}
