@rest_spec_name("security.enable_user")
class EnableUserRequest extends RequestBase {
	@request_parameter()
	refresh: Refresh;
}
