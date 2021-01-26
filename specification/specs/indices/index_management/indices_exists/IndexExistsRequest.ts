@rest_spec_name('indices.exists')
class IndexExistsRequest extends RequestBase {
  path_parts?: {
    index: Indices
  }
  query_parameters?: {
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    flat_settings?: boolean
    ignore_unavailable?: boolean
    include_defaults?: boolean
    local?: boolean
  }
  body?: {}
}
