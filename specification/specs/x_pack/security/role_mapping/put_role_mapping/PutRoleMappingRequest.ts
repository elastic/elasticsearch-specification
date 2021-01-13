@rest_spec_name("security.put_role_mapping")
class PutRoleMappingRequest extends RequestBase {
  pathParts?: {
    name: string;
  }
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
    enabled?: boolean;
    metadata?: Dictionary<string, UserDefinedValue>;
    roles?: string[];
    rules?: RoleMappingRuleBase;
    run_as?: string[];
  }
}
