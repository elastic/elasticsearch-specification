@rest_spec_name("security.change_password")
class ChangePasswordRequest extends RequestBase {
  path_parts?: {
    username?: Name;
  }
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
    password?: string;
  }
}
