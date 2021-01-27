@rest_spec_name('security.has_privileges')
class HasPrivilegesRequest extends RequestBase {
  path_parts?: {
    user?: Name
  }
  query_parameters?: {}
  body?: {
    application?: ApplicationPrivilegesCheck[]
    cluster?: string[]
    index?: IndexPrivilegesCheck[]
  }
}
