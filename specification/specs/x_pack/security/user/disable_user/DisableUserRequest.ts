@rest_spec_name("security.disable_user")
class DisableUserRequest extends RequestBase {
  pathParts?: {
    username: string;
  }
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
  }
}
