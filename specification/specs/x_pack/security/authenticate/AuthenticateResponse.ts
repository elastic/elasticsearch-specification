class AuthenticateResponse extends ResponseBase implements IResponse {
	email: string;
	full_name: string;
	metadata: Dictionary<string, any>;
	roles: string[];
	username: string;
	authentication_realm: RealmInfo;
	lookup_realm: RealmInfo;
}
