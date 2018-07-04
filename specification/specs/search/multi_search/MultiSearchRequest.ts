@rest_spec_name("msearch")
@class_serializer("MultiSearchJsonConverter")
class MultiSearchRequest extends RequestBase {
	operations: Dictionary<string, SearchRequest>;
	@request_parameter()
	search_type: SearchType;
	@request_parameter()
	max_concurrent_searches: long;
	@request_parameter()
	typed_keys: boolean;
	@request_parameter()
	pre_filter_shard_size: long;
}
