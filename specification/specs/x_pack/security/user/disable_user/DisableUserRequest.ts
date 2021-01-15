@rest_spec_name("security.disable_user")
class DisableUserRequest extends RequestBase {
  path_parts?: {
    username: Name;
  }
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
  }
}
