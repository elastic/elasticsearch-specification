@rest_spec_name('security.enable_user')
class EnableUserRequest extends RequestBase {
  path_parts?: {
    username: Name
  }
  query_parameters?: {
    refresh?: Refresh
  }
  body?: {}
}
