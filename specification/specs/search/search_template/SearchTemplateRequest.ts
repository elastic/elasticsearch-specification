@rest_spec_name('search_template')
class SearchTemplateRequest extends RequestBase {
  path_parts?: {
    index?: Indices
    type?: TypeNames
  }
  query_parameters?: {
    allow_no_indices?: boolean
    ccs_minimize_roundtrips?: boolean
    expand_wildcards?: ExpandWildcards
    explain?: boolean
    ignore_throttled?: boolean
    ignore_unavailable?: boolean
    preference?: string
    profile?: boolean
    routing?: Routing
    scroll?: Time
    search_type?: SearchType
    total_hits_as_integer?: boolean
    typed_keys?: boolean
  }
  body?: {
    id?: string
    params?: Dictionary<string, UserDefinedValue>
    source?: string
  }
}
