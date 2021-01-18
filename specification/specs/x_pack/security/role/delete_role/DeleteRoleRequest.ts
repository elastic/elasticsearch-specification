@rest_spec_name("security.delete_role")
class DeleteRoleRequest extends RequestBase {
  path_parts?: {
    name: Name;
  }
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
  }
}
