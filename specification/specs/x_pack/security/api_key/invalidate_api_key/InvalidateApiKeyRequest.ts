@rest_spec_name("security.invalidate_api_key")
class InvalidateApiKeyRequest extends RequestBase {
	id: string;
	name: string;
	realm_name: string;
	username: string;
}
