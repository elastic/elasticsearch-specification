@rest_spec_name("xpack.security.disable_user")
class DisableUserRequest extends RequestBase {
	@request_parameter()
	refresh: Refresh;
}
