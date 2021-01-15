@rest_spec_name("security.delete_user")
class DeleteUserRequest extends RequestBase {
  path_parts?: {
    username: Name;
  }
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
  }
}
