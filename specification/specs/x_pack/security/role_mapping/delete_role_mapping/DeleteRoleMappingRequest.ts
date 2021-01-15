@rest_spec_name("security.delete_role_mapping")
class DeleteRoleMappingRequest extends RequestBase {
  path_parts?: {
    name: Name;
  }
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
  }
}
