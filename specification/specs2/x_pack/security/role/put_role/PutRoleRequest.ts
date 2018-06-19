class PutRoleRequest extends RequestBase {
	cluster: string[];
	run_as: string[];
	indices: IndicesPrivileges[];
	metadata: Map<string, any>;
	@request_parameter()
	refresh: Refresh;
}
