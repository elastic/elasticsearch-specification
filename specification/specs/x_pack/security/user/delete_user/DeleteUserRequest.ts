@rest_spec_name("security.delete_user")
class DeleteUserRequest extends RequestBase {
  path_parts?: {
    username: string;
  }
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
  }
}
