@rest_spec_name('ilm.explain_lifecycle')
class ExplainLifecycleRequest extends RequestBase {
  path_parts?: {
    index: IndexName
  }
  query_parameters?: {
    only_errors?: boolean
    only_managed?: boolean
  }
  body?: {}
}
