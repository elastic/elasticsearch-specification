@rest_spec_name("security.delete_role_mapping")
class DeleteRoleMappingRequest extends RequestBase {
	@request_parameter()
	refresh: Refresh;
}
