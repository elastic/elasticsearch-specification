@rest_spec_name("security.put_role")
class PutRoleRequest extends RequestBase {
  path_parts?: {
    name: Name;
  }
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
    applications?: ApplicationPrivileges[];
    cluster?: string[];
    global?: Dictionary<string, UserDefinedValue>;
    indices?: IndicesPrivileges[];
    metadata?: Dictionary<string, UserDefinedValue>;
    run_as?: string[];
  }
}
