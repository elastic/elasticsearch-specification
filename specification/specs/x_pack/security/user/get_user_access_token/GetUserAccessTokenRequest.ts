@rest_spec_name("security.get_token")
class GetUserAccessTokenRequest extends RequestBase {
  query_parameters?: {
  }
  body?: {
    grant_type?: AccessTokenGrantType;
    scope?: string;
  }
}
