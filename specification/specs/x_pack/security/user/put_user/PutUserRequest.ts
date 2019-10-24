@rest_spec_name("security.put_user")
class PutUserRequest extends RequestBase {
	@request_parameter()
	refresh: Refresh;
	email: string;
	full_name: string;
	metadata: Dictionary<string, any>;
	password: string;
	password_hash: string;
	roles: string[];
}
