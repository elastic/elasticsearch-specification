@rest_spec_name("msearch")
@class_serializer("MultiSearchFormatter")
class MultiSearchRequest extends RequestBase {
	@request_parameter()
	ccs_minimize_roundtrips: boolean;
	@request_parameter()
	max_concurrent_searches: long;
	@request_parameter()
	max_concurrent_shard_requests: long;
	@request_parameter()
	pre_filter_shard_size: long;
	@request_parameter()
	search_type: SearchType;
	@request_parameter()
	total_hits_as_integer: boolean;
	@request_parameter()
	typed_keys: boolean;
	operations: Dictionary<string, SearchRequest>;
}
