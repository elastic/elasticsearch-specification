@rest_spec_name("reindex_rethrottle")
class ReindexRethrottleRequest extends RequestBase {
  query_parameters?: {
    requests_per_second?: long;
  }
  body?: {
  }
}
