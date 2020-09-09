@rest_spec_name("update_by_query_rethrottle")
class UpdateByQueryRethrottleRequest extends RequestBase {
  query_parameters: {
    requests_per_second: long;
  }
  body: {
  }
}
