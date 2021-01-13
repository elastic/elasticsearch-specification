@rest_spec_name("security.change_password")
class ChangePasswordRequest extends RequestBase {
  pathParts?: {
    username?: string;
  }
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
    password?: string;
  }
}
