@rest_spec_name("indices.get_settings")
class GetIndexSettingsRequest extends RequestBase {
  path_parts?: {
    index?: string | string[];
    name?: string | string[];
  }
  query_parameters?: {
    allow_no_indices?: boolean;
    expand_wildcards?: ExpandWildcards;
    flat_settings?: boolean;
    ignore_unavailable?: boolean;
    include_defaults?: boolean;
    local?: boolean;
    master_timeout?: Time;
  }
  body?: {
  }
}
