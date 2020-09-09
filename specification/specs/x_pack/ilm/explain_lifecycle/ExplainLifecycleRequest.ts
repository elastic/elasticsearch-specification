@rest_spec_name("ilm.explain_lifecycle")
class ExplainLifecycleRequest extends RequestBase {
  query_parameters: {
    only_errors: boolean;
    only_managed: boolean;
  }
  body: {
  }
}
