@rest_spec_name("reindex_rethrottle")
class ReindexRethrottleRequest extends RequestBase {
  pathParts?: {
    task_id: string;
  }
  query_parameters?: {
    requests_per_second?: long;
  }
  body?: {
  }
}
