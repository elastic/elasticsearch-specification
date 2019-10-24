@rest_spec_name("update_by_query_rethrottle")
class UpdateByQueryRethrottleRequest extends RequestBase {
	@request_parameter()
	requests_per_second: long;
}
