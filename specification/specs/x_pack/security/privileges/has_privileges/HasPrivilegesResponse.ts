class HasPrivilegesResponse extends ResponseBase implements IResponse {
	application: Dictionary<string, ResourcePrivileges[]>;
	cluster: Dictionary<string, boolean>;
	has_all_requested: boolean;
	index: ResourcePrivileges[];
	username: string;
}
