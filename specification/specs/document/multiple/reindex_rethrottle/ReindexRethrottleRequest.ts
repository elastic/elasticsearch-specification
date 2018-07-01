@rest_spec_name("reindex_rethrottle")
class ReindexRethrottleRequest extends RequestBase {
	@request_parameter()
	requests_per_second: long;
}
