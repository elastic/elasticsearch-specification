@rest_spec_name("async_search.get")
class AsyncSearchGetRequest extends RequestBase {
  path_parts?: {
    id: string;
  }
  query_parameters?: {
  }
  body?: {
    keep_alive?: Time;
    typed_keys?: boolean;
    wait_for_completion_timeout?: Time;
  }
}
