@rest_spec_name("security.enable_user")
class EnableUserRequest extends RequestBase {
  pathParts?: {
    username: string;
  }
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
  }
}
