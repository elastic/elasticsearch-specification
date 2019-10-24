class HasPrivilegesResponse extends ResponseBase implements IResponse {
	applications: Dictionary<string, ResourcePrivileges[]>;
	clusters: Dictionary<string, boolean>;
	has_all_requested: boolean;
	indices: ResourcePrivileges[];
	username: string;
}
