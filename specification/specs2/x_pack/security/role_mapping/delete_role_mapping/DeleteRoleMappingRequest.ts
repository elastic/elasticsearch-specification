@rest_spec_name("xpack.security.delete_role_mapping")
class DeleteRoleMappingRequest extends RequestBase {
	@request_parameter()
	refresh: Refresh;
}
