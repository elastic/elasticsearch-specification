@rest_spec_name('indices.exists_alias')
class AliasExistsRequest extends RequestBase {
  path_parts?: {
    name: Names
    index?: Indices
  }
  query_parameters?: {
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    ignore_unavailable?: boolean
    local?: boolean
  }
  body?: {}
}
