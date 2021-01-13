@rest_spec_name("indices.get")
class GetIndexRequest extends RequestBase {
  pathParts?: {
    index: string | string[];
  }
  query_parameters?: {
    allow_no_indices?: boolean;
    expand_wildcards?: ExpandWildcards;
    flat_settings?: boolean;
    ignore_unavailable?: boolean;
    include_defaults?: boolean;
    include_type_name?: boolean;
    local?: boolean;
    master_timeout?: Time;
  }
  body?: {
  }
}
