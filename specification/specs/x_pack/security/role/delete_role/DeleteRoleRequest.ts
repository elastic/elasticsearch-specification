@rest_spec_name("security.delete_role")
class DeleteRoleRequest extends RequestBase {
  pathParts?: {
    name: string;
  }
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
  }
}
