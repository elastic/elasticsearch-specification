@rest_spec_name("security.change_password")
class ChangePasswordRequest extends RequestBase {
	@request_parameter()
	refresh: Refresh;
	password: string;
}
