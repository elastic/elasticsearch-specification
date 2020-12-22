@rest_spec_name("security.invalidate_api_key")
class InvalidateApiKeyRequest extends RequestBase {
  query_parameters?: {
  }
  body?: {
    id?: string;
    name?: string;
    owner?: boolean;
    realm_name?: string;
    username?: string;
  }
}
