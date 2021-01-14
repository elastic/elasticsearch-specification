@rest_spec_name("reindex_rethrottle")
class ReindexRethrottleRequest extends RequestBase {
  path_parts?: {
    task_id: string;
  }
  query_parameters?: {
    requests_per_second?: long;
  }
  body?: {
  }
}
