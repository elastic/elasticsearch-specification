@rest_spec_name("security.has_privileges")
class HasPrivilegesRequest extends RequestBase {
	query_parameters: {
	}
	body: {
		application: ApplicationPrivilegesCheck[];
		cluster: string[];
		index: IndexPrivilegesCheck[];
	}
}
