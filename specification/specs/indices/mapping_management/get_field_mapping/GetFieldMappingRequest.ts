@rest_spec_name("indices.get_field_mapping")
class GetFieldMappingRequest extends RequestBase {
  pathParts?: {
    fields: string | string[];
    index?: string | string[];
    type?: string | string[];
  }
  query_parameters?: {
    allow_no_indices?: boolean;
    expand_wildcards?: ExpandWildcards;
    ignore_unavailable?: boolean;
    include_defaults?: boolean;
    include_type_name?: boolean;
    local?: boolean;
  }
  body?: {
  }
}
