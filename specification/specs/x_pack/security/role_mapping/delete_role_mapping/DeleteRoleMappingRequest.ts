@rest_spec_name("security.delete_role_mapping")
class DeleteRoleMappingRequest extends RequestBase {
  pathParts?: {
    name: string;
  }
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
  }
}
