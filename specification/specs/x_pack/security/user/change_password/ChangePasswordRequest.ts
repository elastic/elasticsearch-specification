@rest_spec_name("xpack.security.change_password")
class ChangePasswordRequest extends RequestBase {
	password: string;
	@request_parameter()
	refresh: Refresh;
}
