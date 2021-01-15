@rest_spec_name("delete_by_query_rethrottle")
class DeleteByQueryRethrottleRequest extends RequestBase {
  path_parts?: {
    task_id: Id;
  }
  query_parameters?: {
    requests_per_second?: long;
  }
  body?: {
  }
}
