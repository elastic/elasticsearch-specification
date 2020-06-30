@rest_spec_name("security.get_api_key")
class GetApiKeyRequest extends RequestBase {
	query_parameters: {
		id: string;
		name: string;
		owner: boolean;
		realm_name: string;
		username: string;
	}
	body: {
	}
}
