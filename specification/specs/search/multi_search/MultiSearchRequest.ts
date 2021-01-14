@rest_spec_name("msearch")
@class_serializer("MultiSearchFormatter")
class MultiSearchRequest extends RequestBase {
  path_parts?: {
    index?: string | string[];
    type?: string | string[];
  }
  query_parameters?: {
    ccs_minimize_roundtrips?: boolean;
    max_concurrent_searches?: long;
    max_concurrent_shard_requests?: long;
    pre_filter_shard_size?: long;
    search_type?: SearchType;
    total_hits_as_integer?: boolean;
    typed_keys?: boolean;
  }
  body?: {
    operations?: Dictionary<string, SearchRequest>;
  }
}
