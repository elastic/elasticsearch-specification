@rest_spec_name("async_search.get")
class AsyncSearchGetRequest extends RequestBase {
  query_parameters: {
  }
  body: {
    keep_alive: Time;
    typed_keys: boolean;
    wait_for_completion_timeout: Time;
  }
}
