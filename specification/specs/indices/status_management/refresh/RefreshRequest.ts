@rest_spec_name("indices.refresh")
class RefreshRequest extends RequestBase {
  query_parameters: {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
  }
  body: {
  }
}
