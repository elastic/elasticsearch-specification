@rest_spec_name("security.delete_privileges")
class DeletePrivilegesRequest extends RequestBase {
	@request_parameter()
	refresh: Refresh;
}
