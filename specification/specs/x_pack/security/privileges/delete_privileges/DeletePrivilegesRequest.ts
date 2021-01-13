@rest_spec_name("security.delete_privileges")
class DeletePrivilegesRequest extends RequestBase {
  pathParts?: {
    application: string;
    name: string;
  }
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
  }
}
