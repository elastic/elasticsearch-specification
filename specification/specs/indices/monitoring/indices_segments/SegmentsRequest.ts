@rest_spec_name("indices.segments")
class SegmentsRequest extends RequestBase {
  query_parameters: {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
    verbose: boolean;
  }
  body: {
  }
}
