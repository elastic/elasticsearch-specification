@rest_spec_name("indices.get_mapping")
class GetMappingRequest extends RequestBase {
  path_parts?: {
    index?: string | string[];
    type?: string | string[];
  }
  query_parameters?: {
    allow_no_indices?: boolean;
    expand_wildcards?: ExpandWildcards;
    ignore_unavailable?: boolean;
    include_type_name?: boolean;
    local?: boolean;
    master_timeout?: Time;
  }
  body?: {
  }
}
