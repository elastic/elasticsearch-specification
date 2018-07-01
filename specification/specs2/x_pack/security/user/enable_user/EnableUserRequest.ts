@rest_spec_name("xpack.security.enable_user")
class EnableUserRequest extends RequestBase {
	@request_parameter()
	refresh: Refresh;
}
