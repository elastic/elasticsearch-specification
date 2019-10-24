@rest_spec_name("delete_by_query_rethrottle")
class DeleteByQueryRethrottleRequest extends RequestBase {
	@request_parameter()
	requests_per_second: long;
}
