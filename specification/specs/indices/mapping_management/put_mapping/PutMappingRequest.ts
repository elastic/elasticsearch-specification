@rest_spec_name("indices.put_mapping")
class PutMappingRequest extends RequestBase {
  path_parts?: {
    index?: Indices;
    type?: TypeName;
  }
  query_parameters?: {
    allow_no_indices?: boolean;
    expand_wildcards?: ExpandWildcards;
    ignore_unavailable?: boolean;
    include_type_name?: boolean;
    master_timeout?: Time;
    timeout?: Time;
  }
  body?: {
    all_field?: AllField;
    date_detection?: boolean;
    dynamic?: Union<boolean, DynamicMapping>;
    dynamic_date_formats?: string[];
    dynamic_templates?: Dictionary<string, DynamicTemplate>;
    field_names_field?: FieldNamesField;
    index_field?: IndexField;
    meta?: Dictionary<string, UserDefinedValue>;
    numeric_detection?: boolean;
    properties?: Dictionary<PropertyName, PropertyBase>;
    routing_field?: RoutingField;
    size_field?: SizeField;
    source_field?: SourceField;
  }
}
