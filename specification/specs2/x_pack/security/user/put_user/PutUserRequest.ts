@rest_spec_name("xpack.security.put_user")
class PutUserRequest extends RequestBase {
	password: string;
	roles: string[];
	full_name: string;
	email: string;
	metadata: Map<string, any>;
	@request_parameter()
	refresh: Refresh;
}
