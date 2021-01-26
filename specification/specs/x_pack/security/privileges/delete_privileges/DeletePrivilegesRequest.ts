@rest_spec_name('security.delete_privileges')
class DeletePrivilegesRequest extends RequestBase {
  path_parts?: {
    application: Name
    name: Name
  }
  query_parameters?: {
    refresh?: Refresh
  }
  body?: {}
}
