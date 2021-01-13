@rest_spec_name("ilm.explain_lifecycle")
class ExplainLifecycleRequest extends RequestBase {
  pathParts?: {
    index: string;
  }
  query_parameters?: {
    only_errors?: boolean;
    only_managed?: boolean;
  }
  body?: {
  }
}
