@rest_spec_name('indices.get_field_mapping')
class GetFieldMappingRequest extends RequestBase {
  path_parts?: {
    fields: Fields
    index?: Indices
    type?: TypeNames
  }
  query_parameters?: {
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    ignore_unavailable?: boolean
    include_defaults?: boolean
    include_type_name?: boolean
    local?: boolean
  }
  body?: {}
}
