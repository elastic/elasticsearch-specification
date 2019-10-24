@rest_spec_name("security.put_privileges")
class PutPrivilegesRequest extends RequestBase {
	@request_parameter()
	refresh: Refresh;
	applications: Dictionary<string, Dictionary<string, PrivilegesActions>>;
}
