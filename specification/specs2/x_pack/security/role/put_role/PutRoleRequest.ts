@rest_spec_name("xpack.security.put_role")
class PutRoleRequest extends RequestBase {
	cluster: string[];
	run_as: string[];
	indices: IndicesPrivileges[];
	metadata: Map<string, any>;
	@request_parameter()
	refresh: Refresh;
}
