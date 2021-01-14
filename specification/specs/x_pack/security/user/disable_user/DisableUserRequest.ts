@rest_spec_name("security.disable_user")
class DisableUserRequest extends RequestBase {
  path_parts?: {
    username: string;
  }
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
  }
}
