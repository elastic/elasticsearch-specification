@rest_spec_name("security.has_privileges")
class HasPrivilegesRequest extends RequestBase {
	application: ApplicationPrivilegesCheck[];
	cluster: string[];
	index: IndexPrivilegesCheck[];
}
