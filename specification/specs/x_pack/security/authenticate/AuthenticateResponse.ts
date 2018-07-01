class AuthenticateResponse extends ResponseBase {
	username: string;
	roles: string[];
	full_name: string;
	email: string;
	metadata: Map<string, any>;
}
