class ReindexRethrottleRequest extends RequestBase {
	@request_parameter()
	requests_per_second: long;
}
