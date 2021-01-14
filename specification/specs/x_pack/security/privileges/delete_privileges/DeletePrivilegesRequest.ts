@rest_spec_name("security.delete_privileges")
class DeletePrivilegesRequest extends RequestBase {
  path_parts?: {
    application: string;
    name: string;
  }
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
  }
}
