@rest_spec_name("security.put_role")
class PutRoleRequest extends RequestBase {
	query_parameters: {
		refresh: Refresh;
	}
	body: {
		applications: ApplicationPrivileges[];
		cluster: string[];
		global: Dictionary<string, any>;
		indices: IndicesPrivileges[];
		metadata: Dictionary<string, any>;
		run_as: string[];
	}
}
