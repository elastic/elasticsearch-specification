@rest_spec_name("indices.flush")
class FlushRequest extends RequestBase {
  pathParts?: {
    index?: string | string[];
  }
  query_parameters?: {
    allow_no_indices?: boolean;
    expand_wildcards?: ExpandWildcards;
    force?: boolean;
    ignore_unavailable?: boolean;
    wait_if_ongoing?: boolean;
  }
  body?: {
  }
}
