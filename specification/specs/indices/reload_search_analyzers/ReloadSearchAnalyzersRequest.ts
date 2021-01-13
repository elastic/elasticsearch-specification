@rest_spec_name("indices.reload_search_analyzers")
class ReloadSearchAnalyzersRequest extends RequestBase {
  pathParts?: {
    index: string | string[];
  }
  query_parameters?: {
    allow_no_indices?: boolean;
    expand_wildcards?: ExpandWildcards;
    ignore_unavailable?: boolean;
  }
  body?: {
  }
}
