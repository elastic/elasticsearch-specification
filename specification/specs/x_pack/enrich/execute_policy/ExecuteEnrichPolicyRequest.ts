@rest_spec_name("enrich.execute_policy")
class ExecuteEnrichPolicyRequest extends RequestBase {
  path_parts?: {
    name: string;
  }
  query_parameters?: {
    wait_for_completion?: boolean;
  }
  body?: {
  }
}
