class XPackRole {
	cluster: string[];
	run_as: string[];
	indices: IndicesPrivileges[];
	metadata: Map<string, any>;
}
