class GetUserPrivilegesResponse extends ResponseBase implements IResponse {
	applications: ApplicationResourcePrivileges[];
	cluster: string[];
	global: GlobalPrivileges[];
	indices: UserIndicesPrivileges[];
	run_as: string[];
}
