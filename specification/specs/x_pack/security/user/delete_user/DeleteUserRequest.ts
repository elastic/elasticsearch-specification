@rest_spec_name("security.delete_user")
class DeleteUserRequest extends RequestBase {
	@request_parameter()
	refresh: Refresh;
}
