@rest_spec_name("security.disable_user")
class DisableUserRequest extends RequestBase {
	@request_parameter()
	refresh: Refresh;
}
