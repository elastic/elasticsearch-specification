@rest_spec_name("xpack.security.delete_role")
class DeleteRoleRequest extends RequestBase {
	@request_parameter()
	refresh: Refresh;
}
