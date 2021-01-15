@rest_spec_name("msearch_template")
@class_serializer("MultiSearchTemplateFormatter")
class MultiSearchTemplateRequest extends RequestBase {
  path_parts?: {
    index?: Indices;
    type?: TypeNames;
  }
  query_parameters?: {
    ccs_minimize_roundtrips?: boolean;
    max_concurrent_searches?: long;
    search_type?: SearchType;
    total_hits_as_integer?: boolean;
    typed_keys?: boolean;
  }
  body?: {
    operations?: Dictionary<string, SearchTemplateRequest>;
  }
}
