@rest_spec_name("async_search.get")
class AsyncSearchGetRequest extends RequestBase {
	keep_alive: Time;
	typed_keys: boolean;
	wait_for_completion_timeout: Time;
}
