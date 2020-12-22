@rest_spec_name("security.change_password")
class ChangePasswordRequest extends RequestBase {
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
    password?: string;
  }
}
