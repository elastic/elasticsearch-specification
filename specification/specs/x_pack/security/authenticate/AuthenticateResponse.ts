class AuthenticateResponse extends ResponseBase {
	authentication_realm: RealmInfo;
	email: string;
	full_name: string;
	lookup_realm: RealmInfo;
	metadata: Dictionary<string, any>;
	roles: string[];
	username: string;
}
