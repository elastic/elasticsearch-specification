class GetUserAccessTokenResponse extends ResponseBase implements IResponse {
	access_token: string;
	expires_in: long;
	scope: string;
	type: string;
}
