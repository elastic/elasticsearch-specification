@rest_spec_name("indices.exists_alias")
class AliasExistsRequest extends RequestBase {
  pathParts?: {
    name: string | string[];
    index?: string | string[];
  }
  query_parameters?: {
    allow_no_indices?: boolean;
    expand_wildcards?: ExpandWildcards;
    ignore_unavailable?: boolean;
    local?: boolean;
  }
  body?: {
  }
}
