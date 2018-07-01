@rest_spec_name("xpack.security.get_token")
class GetUserAccessTokenRequest extends RequestBase {
	grant_type: AccessTokenGrantType;
	scope: string;
}
