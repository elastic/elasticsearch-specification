@rest_spec_name("indices.clear_cache")
class ClearCacheRequest extends RequestBase {
  path_parts?: {
    index?: string | string[];
  }
  query_parameters?: {
    allow_no_indices?: boolean;
    expand_wildcards?: ExpandWildcards;
    fielddata?: boolean;
    fields?: Field[];
    ignore_unavailable?: boolean;
    query?: boolean;
    request?: boolean;
  }
  body?: {
  }
}
