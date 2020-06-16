class HasPrivilegesResponse extends ResponseBase implements IResponse {
	@prop_serializer("ApplicationsPrivilegesFormatter")
	application: Dictionary<string, ResourcePrivileges[]>;
	cluster: Dictionary<string, boolean>;
	has_all_requested: boolean;
	@prop_serializer("IndicesPrivilegesFormatter")
	index: ResourcePrivileges[];
	username: string;
}
