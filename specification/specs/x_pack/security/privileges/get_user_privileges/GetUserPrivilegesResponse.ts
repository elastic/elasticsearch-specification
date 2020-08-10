class GetUserPrivilegesResponse extends ResponseBase {
	applications: ApplicationResourcePrivileges[];
	cluster: string[];
	global: GlobalPrivileges[];
	indices: UserIndicesPrivileges[];
	run_as: string[];
}
